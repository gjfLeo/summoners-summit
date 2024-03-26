import { z } from "zod";
import { writeData } from "./data";

const ZPlayer = z.object({
  uid: z.coerce.string().regex(/^\d{9}$/).optional(),
  uniqueName: z.string(),
}).strip();
type Player = z.infer<typeof ZPlayer>;

export function getPlayer(playerId: string): Player | undefined {
  return ZPlayer.optional().parse(readData(`player/${playerId}`));
}

export function savePlayer(player: Player): void {
  writeData(`player/${player.uid}`, ZPlayer.parse(player));
}

export function getPlayerList(): Player[] {
  return ZPlayer.array().parse(readDataList("player"));
}
