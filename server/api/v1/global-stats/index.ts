import type { ApiGlobalStatsListByVersionData, ApiGlobalStatsValue, GameVersion, R } from "~/utils/types";
import { gameById } from "~/server/data";
import { getAllGameVersionsReversed, initGameVersionMap } from "~/utils/game-version";

function initStats(gameVersion: GameVersion): ApiGlobalStatsValue {
  return {
    gameVersion,
    total: 0,
    totalWithDeck: 0,
    totalWithStarter: 0,
    starterWin: 0,
  };
}

export default defineEventHandler<R & ApiGlobalStatsListByVersionData>(() => {
  const statsMap = initGameVersionMap(initStats);
  Object.values(gameById).forEach((game) => {
    const versionStats = statsMap[game.gameVersion];
    versionStats.total++;
    if (game.playerADeckId && game.playerBCharacters) {
      versionStats.totalWithDeck++;
    }
    if (game.starter) {
      versionStats.totalWithStarter++;
    }
    if (game.starter === game.winner) {
      versionStats.starterWin++;
    }
  });

  const statsList = getAllGameVersionsReversed().map(v => statsMap[v]);
  return { statusCode: 200, statsList };
});
