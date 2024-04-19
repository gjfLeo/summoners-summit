import type { z } from "zod";
import type { PlayerIndex } from "~/types/data";
import { ZPlayer } from "~/types/data";

export function getPlayer(playerId: string) {
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
    });
    deleteData(`players/${playerId}`);
  }
}

const ZSavePlayerParams = ZPlayer.partial({ id: true });
type SavePlayerParams = z.infer<typeof ZSavePlayerParams>;
export function savePlayer(params: SavePlayerParams) {
  const player = {
    ...params,
    id: params.id ?? hash(params.uids[0]),
    aliases: params.aliases.toSorted(),
  };

  updateIndex((index) => {
    player.uids.forEach(uid => index.uid[uid] = player.id);
  });

  writeData(`players/${player.id}`, ZPlayer.parse(player));
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

  deletePlayer(sourceId);
  savePlayer(target);
  updateIndex((index) => {
    index.redirect[sourceId] = targetId;
  });
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
