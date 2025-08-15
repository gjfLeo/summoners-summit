import type { z } from "zod";
import { clearMatchCache, getStorageMatchList, writeMatchV2 } from "./match";
import { defineRecordStorage } from "./storage";

const playerStorage = defineRecordStorage("players", ZPlayer);
export const getStoragePlayer = playerStorage.get;
export const getStoragePlayerList = playerStorage.getList;
export const getStoragePlayerRecord = playerStorage.getRecord;
export const clearPlayerCache = playerStorage.clearCache;

// ----------------------------------------------------------------------------

const _ZSavePlayerV2Params = ZPlayer.partial({ id: true });
type SavePlayerV2Params = z.infer<typeof _ZSavePlayerV2Params>;

async function writePlayerOnly(player: Player) {
  const data: Player = ZPlayer
    .transform((player) => {
      if (!player.ignored) delete player.ignored;
      return {
        ...player,
        aliases: player.aliases.toSorted(),
      };
    })
    .parse(player);
  await writeDataV2(`players/${player.id}`, data);
}
async function deletePlayerOnly(playerId: PlayerId) {
  await deleteDataV2(`players/${playerId}`);
}

function generatePlayerId(player: SavePlayerV2Params) {
  if (player.uids.length > 0) {
    return hash(player.uids[0]);
  }
  return player.id ?? hash();
}

export async function savePlayerV2(
  params: SavePlayerV2Params,
  options: {
    clearCache?: boolean;
    redirectMatches?: boolean;
  } = {},
) {
  const { clearCache = true, redirectMatches = true } = options;

  const newId = generatePlayerId(params);
  const oldId = params.id !== newId ? params.id : undefined;

  const oldPlayer = oldId ? await getStoragePlayer(oldId) : undefined;
  const currentPlayer = await getStoragePlayer(newId);

  const oldUids = new Set([
    ...oldPlayer?.uids ?? [],
    ...currentPlayer?.uids ?? [],
  ]);

  const newPlayer: Player = { ...params, id: newId };

  await Promise.all([
    oldId ? deletePlayerOnly(oldId) : null,
    writePlayerOnly(newPlayer),
    // TODO 可判断是否需要更新索引
    updatePlayerIndexV2((index) => {
      oldUids.forEach(uid => delete index.uid[uid]);
      params.uids.forEach(uid => index.uid[uid] = newId);
    }),
    clearCache ? clearPlayerCache(oldId ? [oldId, newId] : [newId]) : null,
  ]);

  if (oldId && redirectMatches) {
    throw new Error("redirect matches not supported");
    // await redirectMatchesToPlayer(newId, oldId);
  }

  return newId;
}

export async function saveRanksPlayer(ranks: Ranks) {
  const playerIdByUid = (await readPlayerIndexV2()).uid;
  const existedPlayerIds = ranks.ranks.map(({ uid }) => playerIdByUid[uid]).filter(Boolean);
  const existedPlayerRecord = await getStoragePlayerRecord(existedPlayerIds);

  const changedPlayerIds = new Set<PlayerId>();
  for (const { uid, nickname } of ranks.ranks) {
    const playerId = playerIdByUid[uid];
    const player = playerId ? existedPlayerRecord[playerId] : undefined;
    if (player) {
      if (player.uniqueName !== nickname && !player.aliases.includes(nickname)) {
        player.aliases.push(nickname);
        const id = await savePlayerV2(player, { clearCache: false });
        changedPlayerIds.add(id);
        continue;
      }
    }
    else {
      const id = await savePlayerV2({
        uniqueName: nickname,
        aliases: [],
        uids: [uid],
      }, { clearCache: false });
      changedPlayerIds.add(id);
    }
  }

  return clearPlayerCache(changedPlayerIds);
}

export async function mergePlayer(targetPlayer: Player, sourceId: PlayerId): Promise<PlayerId> {
  const targetId = targetPlayer.id;
  if (sourceId === targetId) {
    return targetId;
  }
  const sourcePlayer = await getStoragePlayer(sourceId);
  if (!sourcePlayer) {
    return targetId;
  }

  const newPlayer: SavePlayerV2Params = {
    id: targetId,
    uniqueName: targetPlayer.uniqueName,
    uids: Array.from(new Set([
      ...targetPlayer.uids,
      ...sourcePlayer.uids,
    ])),
    aliases: Array.from(new Set([
      ...targetPlayer.aliases,
      sourcePlayer.uniqueName,
      ...sourcePlayer.aliases,
    ])),
    ignored: targetPlayer.ignored || sourcePlayer.ignored,
  };

  await deletePlayerOnly(sourceId);
  await deletePlayerOnly(targetId);
  await clearPlayerCache([targetId, sourceId]);

  const newId = await savePlayerV2(newPlayer, { redirectMatches: false });
  await redirectMatchesToPlayer(newId, targetId, sourceId);

  return newId;
}

async function redirectMatchesToPlayer(targetId: PlayerId, ...sourceIds: PlayerId[]) {
  const matches = await getStorageMatchList();
  const sourceIdRecord = Object.fromEntries(
    sourceIds
      .filter(id => id !== targetId)
      .map(id => [id, true]),
  );
  const changedMatches: Match[] = [];
  matches.forEach((match) => {
    if (sourceIdRecord[match.playerA.playerId]) {
      match.playerA.playerId = targetId;
      changedMatches.push(match);
    }
    if (sourceIdRecord[match.playerB.playerId]) {
      match.playerB.playerId = targetId;
      changedMatches.push(match);
    }
  });
  await runParallel(
    new Set(changedMatches),
    writeMatchV2,
    { concurrency: 10 },
  );
  await clearMatchCache(changedMatches.map(m => m.id));
}

export async function changePlayerUniqueName(player: Player, newUniqueName: string) {
  if (player.uniqueName === newUniqueName) {
    return;
  }
  player.aliases = [player.uniqueName, ...player.aliases].filter(n => n !== newUniqueName);
  player.uniqueName = newUniqueName;
  await savePlayerV2(player);
}

async function readPlayerIndexV2(): Promise<PlayerIndex> {
  return Object.assign(
    { uid: {} },
    await readDataV2<PlayerIndex>("players/_index", { uid: {} }),
  );
}
async function updatePlayerIndexV2(func: (index: PlayerIndex) => void) {
  const index = await readPlayerIndexV2();
  func(index);
  await writeDataV2("players/_index", index);
}
export async function refreshPlayerIndex() {
  const index: PlayerIndex = { uid: {} };
  const players = await getStoragePlayerList();
  players.forEach((player) => {
    player.uids.forEach((uid) => {
      index.uid[uid] = player.id;
    });
  });
  await writeDataV2("players/_index", index);
}
