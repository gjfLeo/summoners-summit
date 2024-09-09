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
