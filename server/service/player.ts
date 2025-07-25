import type { z } from "zod";
import { clearMatchCache, getMatchList, getStorageMatchList, writeMatch } from "./match";
import { defineRecordStorage } from "./storage";

const playerStorage = defineRecordStorage("players", ZPlayer);
export const getStoragePlayer = playerStorage.get;
export const getStoragePlayerList = playerStorage.getList;
export const getStoragePlayerRecord = playerStorage.getRecord;
export const clearPlayerCache = playerStorage.clearCache;

// ----------------------------------------------------------------------------

/** @deprecated */
export function getPlayer(playerId: PlayerId): Player | undefined {
  return ZPlayer.optional().parse(readData<Player>(`players/${playerId}`));
}

/** @deprecated */
export function getPlayerByUid(uid: string): Player | undefined {
  const playerId = readPlayerIndex().uid[uid];
  return getPlayer(playerId);
}

export function getPlayerList(): Player[] {
  return ZPlayer.array().parse(readDataList<Player>("players"));
}

// ----------------------------------------------------------------------------

export async function getPlayerByUidV2(uid: string): Promise<Player | undefined> {
  const index = await readPlayerIndexV2();
  const playerId = index.uid[uid];
  return playerId ? await getStoragePlayer(playerId) : undefined;
}

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

  const changedPlayerIds = await Promise.all(
    ranks.ranks.map(async ({ uid, nickname }) => {
      const playerId = playerIdByUid[uid];
      const player = playerId ? existedPlayerRecord[playerId] : undefined;
      if (player) {
        if (player.uniqueName !== nickname && !player.aliases.includes(nickname)) {
          player.aliases.push(nickname);
          const id = await savePlayerV2(player, { clearCache: false });
          return [id];
        }
        return [];
      }
      else {
        const id = await savePlayerV2({
          uniqueName: nickname,
          aliases: [],
          uids: [uid],
        }, { clearCache: false });
        return [id];
      }
    }),
  );

  return clearPlayerCache(changedPlayerIds.flat());
}

// ----------------------------------------------------------------------------

export function deletePlayer(playerId: PlayerId) {
  const player = getPlayer(playerId);
  if (!player) return;

  updatePlayerIndex((index) => {
    player?.uids.forEach(uid => delete index.uid[uid]);
  });
  deleteData(`players/${playerId}`);
  return clearPlayerCache();
}

const _ZSavePlayerParams = ZPlayer.partial({ id: true });
type SavePlayerParams = z.infer<typeof _ZSavePlayerParams>;
export function savePlayer(params: SavePlayerParams) {
  const oldId = params.id;
  const newId = params.uids[0] ? hash(params.uids[0]) : (oldId ?? hash());
  // if (oldId && oldId !== newId) {
  //   redirectPlayer(oldId, newId);
  // }

  const player = {
    ...params,
    id: newId,
    aliases: [...params.aliases].sort(),
  };

  if (!player.ignored) delete player.ignored;

  updatePlayerIndex((index) => {
    player.uids.forEach((uid) => {
      index.uid[uid] = player.id;
    });
  });

  writeData(`players/${player.id}`, ZPlayer.parse(player));
  // TODO await
  clearPlayerCache();
  return player.id;
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
    writeMatch,
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

/** @deprecated */
export function bindPlayerNickname({ nickname, playerId }: { nickname: string; playerId?: string }) {
  const player = playerId ? getPlayer(playerId) : undefined;
  if (!player) {
    return savePlayer({
      uniqueName: nickname,
      aliases: [],
      uids: [],
    });
  }
  else {
    if (player.uniqueName !== nickname && !player.aliases.includes(nickname)) {
      player.aliases.push(nickname);
      savePlayer(player);
      return player.id;
    }
    else {
      return player.id;
    }
  }
}

function readPlayerIndex(): PlayerIndex {
  return Object.assign(
    { uid: {} } satisfies PlayerIndex,
    readData<Partial<PlayerIndex>>("players/_index"),
  );
}
function updatePlayerIndex(func: (index: PlayerIndex) => void) {
  const index = readPlayerIndex();
  func(index);
  writeData("players/_index", index);
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
