import type { ApiPlayerStatsByVersionData, GameVersion, PlayerId, R } from "~/utils/types";
import { gameById, matchById, playerById } from "~/server/data";
import { getGameMirror, getMatchMirror } from "~/utils/games";
import { gameVersionSorter, initGameVersionMap } from "~/utils/game-versions";

export default defineEventHandler<R & ApiPlayerStatsByVersionData>((event) => {
  const playerId = event.context.params!.playerId as PlayerId;

  const player = playerById[playerId];
  if (!player) {
    throw createError({ statusCode: 404, message: "数据不存在" });
  }

  const statsByVersionMap: Record<GameVersion, ApiPlayerStatsByVersionData["statsByVersion"][number]> = initGameVersionMap(gameVersion => ({
    gameVersion,
    matchTotal: 0,
    matchWin: 0,
    gameTotal: 0,
    gameWin: 0,
  }));

  Object.values(matchById)
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
    })
    .forEach((m) => {
      statsByVersionMap[m.gameVersion].matchTotal++;
      statsByVersionMap[m.gameVersion].matchWin += m.winner === "A" ? 1 : 0;
    });

  Object.values(gameById)
    .flatMap((g) => {
      if (playerId === g.playerAId) {
        return [g];
      }
      else if (playerId === g.playerBId) {
        return [getGameMirror(g)];
      }
      else {
        return [];
      }
    })
    .forEach((m) => {
      statsByVersionMap[m.gameVersion].gameTotal++;
      statsByVersionMap[m.gameVersion].gameWin += m.winner === "A" ? 1 : 0;
    });

  const statsByVersion = Object.values(statsByVersionMap).sort(gameVersionSorter(s => s.gameVersion));
  return { statusCode: 200, statsByVersion };
});
