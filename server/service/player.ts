import type { z } from "zod";
import { getMatchList } from "./match";
import type { Player, PlayerId, PlayerIndex } from "~/types/data";
import { ZMatch, ZPlayer } from "~/types/data";

export function getPlayer(playerId: PlayerId): Player | undefined {
  return ZPlayer.optional().parse(readData<Player>(`players/${playerId}`));
}

export function getPlayerByUid(uid: string): Player | undefined {
  const playerId = readPlayerIndex().uid[uid];
  return getPlayer(playerId);
}

export function getPlayerList(): Player[] {
  return ZPlayer.array().parse(readDataList<Player>("players"));
}

export function deletePlayer(playerId: PlayerId): void {
  const player = getPlayer(playerId);
  if (!player) return;

  updatePlayerIndex((index) => {
    player?.uids.forEach(uid => delete index.uid[uid]);
  });
  deleteData(`players/${playerId}`);
}

const ZSavePlayerParams = ZPlayer.partial({ id: true });
type SavePlayerParams = z.infer<typeof ZSavePlayerParams>;
export function savePlayer(params: SavePlayerParams, skipRedirect: boolean = false) {
  const oldId = params.id;
  const newId = hash(params.uids[0] ?? params.uniqueName);
  if (!skipRedirect) {
    if (oldId && oldId !== newId) {
      redirectPlayer(oldId, newId);
    }
  }

  const player = {
    ...params,
    id: newId,
    aliases: params.aliases.toSorted(),
  };

  updatePlayerIndex((index) => {
    player.uids.forEach((uid) => {
      index.uid[uid] = player.id;
    });
  });

  writeData(`players/${player.id}`, ZPlayer.parse(player));
  return player.id;
}

export function redirectPlayer(oldId: string, newId: string) {
  const oldPlayer = getPlayer(oldId);
  const newPlayer = getPlayer(newId);

  if (!oldPlayer && !newPlayer) {
    throw new Error(errorCodes.PLAYER_NOT_FOUND);
  }

  if (!oldPlayer) {
    return;
  }

  const player: Player = {
    id: newId,
    uids: [],
    uniqueName: newPlayer?.uniqueName ?? oldPlayer.uniqueName,
    aliases: [],
    ignored: newPlayer?.ignored ?? oldPlayer.ignored,
  };

  const existsUid: Record<string, true> = {};
  [...newPlayer?.uids ?? [], ...oldPlayer.uids].forEach((uid) => {
    if (existsUid[uid]) return;
    player.uids.push(uid);
    existsUid[uid] = true;
  });
  updatePlayerIndex((index) => {
    player.uids.forEach((uid) => {
      index.uid[uid] = player.id;
    });
  });

  const existsNicknames: Record<string, true> = { [player.uniqueName]: true };
  [...newPlayer?.aliases ?? [], oldPlayer.uniqueName, ...oldPlayer.aliases].forEach((nickname) => {
    if (existsNicknames[nickname]) return;
    player.aliases.push(nickname);
    existsNicknames[nickname] = true;
  });

  getMatchList().forEach((match) => {
    if (match.playerA.playerId === oldId) {
      match.playerA.playerId = newId;
    }
    if (match.playerB.playerId === oldId) {
      match.playerB.playerId = newId;
    }
    writeData(`matches/${match.id}`, ZMatch.parse(match));
  });

  deletePlayer(oldId);
  savePlayer(player, true);
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
