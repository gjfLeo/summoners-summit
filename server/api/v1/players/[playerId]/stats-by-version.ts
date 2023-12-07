import type { ApiPlayerStatsByVersionData, ApiPlayerStatsByVersionValue, R } from "~/utils/types";
import { gameById, matchById, playerById } from "~/server/data";
import { getGameMirror, getMatchMirror } from "~/utils/games";
import { gameVersionList } from "~/composables/use-game-version";

export default defineEventHandler<R & ApiPlayerStatsByVersionData>((event) => {
  const playerId = event.context.params!.playerId;

  const player = playerById[playerId];
  if (!player) {
    throw createError({ statusCode: 404, message: "数据不存在" });
  }

  const statsByVersion: Record<string, ApiPlayerStatsByVersionValue> = Object.fromEntries(
    gameVersionList.filter(version => version.value)
      .map((version) => {
        return [version.value, {
          matchTotal: 0,
          matchWin: 0,
          gameTotal: 0,
          gameWin: 0,
        }];
      }),
  );

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
      statsByVersion[m.gameVersion].matchTotal++;
      statsByVersion[m.gameVersion].matchWin += m.winner === "A" ? 1 : 0;
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
      statsByVersion[m.gameVersion].gameTotal++;
      statsByVersion[m.gameVersion].gameWin += m.winner === "A" ? 1 : 0;
    });

  return { statusCode: 200, statsByVersion };
});
