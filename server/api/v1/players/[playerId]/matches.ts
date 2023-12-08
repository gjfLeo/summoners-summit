import { gameById, matchById, playerById } from "~/server/data";
import { getGameMirror, getMatchMirror } from "~/utils/games";
import type { ApiPlayerMatchesData, R } from "~/utils/types";

export default defineEventHandler<R & ApiPlayerMatchesData>((event) => {
  const playerId = event.context.params!.playerId;

  const player = playerById[playerId];
  if (!player) {
    throw createError({ statusCode: 404, message: "数据不存在" });
  }

  const matchList = Object.values(matchById)
    .flatMap((m) => {
      if (playerId === m.playerAId) {
        return [m];
      }
      else if (playerId === m.playerBId) {
        return [getMatchMirror(m)];
      }
      else {
        return [];
      }
    });

  const matches = Object.fromEntries(matchList.map(m => [m.id, m]));
  const games = Object.fromEntries(matchList.flatMap(m => m.gameIds).map((gId) => {
    const g = gameById[gId];
    if (!g) {
      throw new Error("对局信息缺失");
    }
    if (playerId === g.playerAId) {
      return [gId, g];
    }
    else {
      return [gId, getGameMirror(g)];
    }
  }));

  return { statusCode: 200, matches, games };
});
