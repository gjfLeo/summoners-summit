import { z } from "zod";

export function getPlayer(playerId: string): Player | undefined {
  return ZPlayer.optional().parse(readData(`players/${playerId}`));
}

export function getPlayerList(): Player[] {
  return ZPlayer.array().parse(readDataList("players"));
}

export function deletePlayer(playerId: string): void {
  deleteData(`players/${playerId}`);
}

export function savePlayer(params: PlayerSaveParams) {
  const player = {
    id: hash(params.uid),
    ...params,
  };
  writeData(`players/${player.id}`, ZPlayer.parse(player));
}

const ZPlayerSaveNicknameByUidParams = z.object({ uid: ZPlayerUid, nickname: ZPlayerNickname });
export function savePlayerNicknameByUid(params: z.infer<typeof ZPlayerSaveNicknameByUidParams>) {
  const { uid, nickname } = params;
  const id = hash(uid);
  const player = getPlayer(id);
  if (player) {
    if (player.uniqueName === nickname) return;
    if (player.aliases.includes(nickname)) return;
    player.aliases = [...player.aliases, nickname].sort();
    savePlayer(player);
  }
  else {
    savePlayer({
      uid,
      uniqueName: nickname,
      aliases: [],
    });
  }
}

// export function findPlayer(nickname: string, excludeId?: string): Player | undefined {
//   return getPlayerList()
//     .filter(player => player.id !== excludeId)
//     .find(player => player.uniqueName === nickname || player.aliases?.includes(nickname));
// }
