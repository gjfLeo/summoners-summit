import type { z } from "zod";
import { ZPlayer } from "~/types/data";

export function getPlayer(playerId: string) {
  return ZPlayer.optional().parse(readData(`players/${playerId}`));
}

export function getPlayerList() {
  return ZPlayer.array().parse(readDataList("players"));
}

export function deletePlayer(playerId: string) {
  deleteData(`players/${playerId}`);
}

const ZSavePlayerParams = ZPlayer.partial({ id: true });
type SavePlayerParams = z.infer<typeof ZSavePlayerParams>;

export function savePlayer(params: SavePlayerParams) {
  const player = {
    id: params.id ?? hash(params.uids[0]),
    ...params,
  };
  writeData(`players/${player.id}`, ZPlayer.parse(player));
}
