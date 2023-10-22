import type { Player, R } from "~/utils/types";
import { playerById } from "~/server/data";

interface PlayerData {
  player: Player;
}

export default defineEventHandler<R & PlayerData>((event) => {
  const playerId = event.context.params!.playerId;

  const player = playerById[playerId];
  if (!player) {
    throw createError({ statusCode: 404, message: "数据不存在" });
  }

  return { statusCode: 200, player };
});
