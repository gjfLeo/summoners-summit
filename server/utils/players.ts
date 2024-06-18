import type { z } from "zod";
import type { PlayerIndex } from "~/types/data";
import { ZPlayer } from "~/types/data";

export function getPlayer(playerId: string, skipRedirect = false) {
  if (!skipRedirect) {
    const redirectId = readIndex().redirect[playerId];
    if (redirectId) return getPlayer(redirectId);
  }
  return ZPlayer.optional().parse(readData(`players/${playerId}`));
}
export function getPlayerByUid(uid: string) {
  const playerId = readIndex().uid[uid];
  return getPlayer(playerId);
}

export function getPlayerList() {
  return ZPlayer.array().parse(readDataList("players"));
}

export function deletePlayer(playerId: string) {
  const player = getPlayer(playerId);
  if (player) {
    updateIndex((index) => {
      player.uids.forEach(uid => delete index.uid[uid]);
      player.redirectFrom?.forEach(redirectId => delete index.redirect[redirectId]);
    });
    deleteData(`players/${playerId}`);
  }
}

const ZSavePlayerParams = ZPlayer.partial({ id: true });
type SavePlayerParams = z.infer<typeof ZSavePlayerParams>;
export function savePlayer(params: SavePlayerParams) {
  const oldId = params.id;
  const newId = hash(params.uids[0] ?? params.uniqueName);
  if (oldId && oldId !== newId) {
    deletePlayer(oldId);
    updateIndex((index) => {
      index.redirect[oldId] = newId;
    });
  }

  const player = {
    ...params,
    id: newId,
    aliases: params.aliases.toSorted(),
  };

  updateIndex((index) => {
    player.uids.forEach(uid => index.uid[uid] = player.id);
  });

  writeData(`players/${player.id}`, ZPlayer.parse(player));
  return player.id;
}

export function mergePlayer(sourceId: string, targetId: string) {
  const source = getPlayer(sourceId);
  const target = getPlayer(targetId);
  if (!source || !target) {
    throw new Error("PLAYER_NOT_FOUND");
  }
  target.uids = target.uids.concat(source.uids);
  const existsNicknames = Object.fromEntries([target.uniqueName, ...target.aliases].map(n => [n, true]));
  target.aliases = target.aliases.concat([source.uniqueName, ...source.aliases].filter(n => !existsNicknames[n]));
  target.redirectFrom = [...target.redirectFrom ?? [], sourceId];

  deletePlayer(sourceId);
  savePlayer(target);
  updateIndex((index) => {
    index.redirect[sourceId] = targetId;
  });
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

function readIndex(): PlayerIndex {
  return Object.assign(
    { uid: {}, redirect: {} } as PlayerIndex,
    readData<Partial<PlayerIndex>>("players/_index"),
  );
}
function updateIndex(func: (index: PlayerIndex) => void) {
  const index = readIndex();
  func(index);
  writeData("players/_index", index);
}
