import type { z } from "zod";
import { getMatchList } from "./match";
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

function generatePlayerId(player: SavePlayerV2Params) {
  if (player.uids.length > 0) {
    return hash(player.uids[0]);
  }
  return player.id ?? hash();
}

export async function savePlayerV2(params: SavePlayerV2Params) {
  const playerId = generatePlayerId(params);
  // TODO
  // if (params.id && params.id !== playerId) {
  //   await redirectPlayerV2(params.id, playerId);
  // }

  // TODO 通过zod实现
  const player = {
    ...params,
    id: playerId,
    aliases: [...params.aliases].sort(),
  };
  if (!player.ignored) delete player.ignored;

  await updatePlayerIndexV2((index) => {
    player.uids.forEach((uid) => {
      index.uid[uid] = player.id;
    });
  });

  await writeDataV2(`players/${player.id}`, ZPlayer.parse(player));
  return player.id;
}

export async function deletePlayerV2(playerId: PlayerId) {
  const player = await getStoragePlayer(playerId);
  if (!player) return;

  return await Promise.all([
    deleteDataV2(`players/${playerId}`),
    updatePlayerIndex((index) => {
      player.uids.forEach(uid => delete index.uid[uid]);
    }),
  ]);
}

export async function saveRanksPlayer(ranks: Ranks) {
  const playerIdByUid = (await readPlayerIndexV2()).uid;

  const playerIds = ranks.ranks.map(({ uid }) => playerIdByUid[uid]).filter(Boolean);
  const players = await getStoragePlayerRecord(playerIds);

  await Promise.all(
    ranks.ranks.map(async ({ uid, nickname }) => {
      const playerId = playerIdByUid[uid];
      const player = playerId ? players[playerId] : undefined;
      if (player) {
        if (player.uniqueName !== nickname && !player.aliases.includes(nickname)) {
          player.aliases = [...player.aliases, nickname];
          return await savePlayerV2(player);
        }
      }
      else {
        return await savePlayerV2({
          uniqueName: nickname,
          aliases: [],
          uids: [uid],
        });
      }
    }),
  );

  return clearPlayerCache(playerIds);
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
  if (oldId && oldId !== newId) {
    redirectPlayer(oldId, newId);
  }

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

export function redirectPlayer(sourceId: PlayerId, targetId: PlayerId): PlayerId {
  if (sourceId === targetId) {
    return targetId;
  }
  const sourcePlayer = getPlayer(sourceId);
  const targetPlayer = getPlayer(targetId);

  if (!sourcePlayer && !targetPlayer) {
    throw new Error(errorCodes.PLAYER_NOT_FOUND);
  }

  if (!sourcePlayer) {
    return targetId;
  }

  const player: Player = {
    id: "",
    uids: [],
    uniqueName: targetPlayer?.uniqueName ?? sourcePlayer.uniqueName,
    aliases: [],
    ignored: targetPlayer?.ignored ?? sourcePlayer.ignored,
  };

  const existsUid: Record<string, true> = {};
  [...targetPlayer?.uids ?? [], ...sourcePlayer.uids].forEach((uid) => {
    if (existsUid[uid]) return;
    player.uids.push(uid);
    existsUid[uid] = true;
  });

  const existsNicknames: Record<string, true> = { [player.uniqueName]: true };
  [...targetPlayer?.aliases ?? [], sourcePlayer.uniqueName, ...sourcePlayer.aliases].forEach((nickname) => {
    if (existsNicknames[nickname]) return;
    player.aliases.push(nickname);
    existsNicknames[nickname] = true;
  });

  deletePlayer(sourceId);
  deletePlayer(targetId);
  player.id = savePlayer({ ...player, id: undefined });

  updatePlayerIndex((index) => {
    player.uids.forEach((uid) => {
      index.uid[uid] = player.id;
    });
  });

  getMatchList()
    .forEach((match) => {
      if (match.playerA.playerId === sourceId || match.playerA.playerId === targetId) {
        match.playerA.playerId = player.id;
      }
      if (match.playerB.playerId === sourceId || match.playerB.playerId === targetId) {
        match.playerB.playerId = player.id;
      }
      writeData(`matches/${match.id}`, ZMatch.parse(match));
    });
  return player.id;
}

export function changePlayerUniqueName(playerId: PlayerId, nickname: string) {
  const player = getPlayer(playerId);
  if (!player) {
    throw new Error(errorCodes.PLAYER_NOT_FOUND);
  }

  if (player.uniqueName === nickname) {
    return;
  }

  player.aliases = [player.uniqueName, ...player.aliases].filter(n => n !== nickname);
  player.uniqueName = nickname;
  savePlayer(player);
}

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
