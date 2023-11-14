import type { ApiGlobalStatsMapData, ApiGlobalStatsValue, R } from "~/utils/types";
import { gameById } from "~/server/data";

const initStats = (): ApiGlobalStatsValue => ({ total: 0, totalWithDeck: 0, totalWithStarter: 0, starterWin: 0 });

export default defineEventHandler<R & ApiGlobalStatsMapData>(() => {
  const stats: Record<string, ApiGlobalStatsValue> = {};
  Object.values(gameById).forEach((game) => {
    const versionStats = stats[game.gameVersion] ?? (stats[game.gameVersion] = initStats());
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
  stats[""] = Object.values(stats).reduce(
    (allStats, versionStats) => {
      allStats.total += versionStats.total;
      allStats.totalWithDeck += versionStats.totalWithDeck;
      allStats.totalWithStarter += versionStats.totalWithStarter;
      allStats.starterWin += versionStats.starterWin;
      return allStats;
    },
    initStats(),
  );
  return { statusCode: 200, stats };
});
