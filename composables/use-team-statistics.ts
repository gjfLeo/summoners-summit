import { divide } from "mathjs/number";
import type { Game } from "~/utils/types";

interface BasicStatistic {
  teamId: string;
  total: number;
  win: number;
  starterTotal: number;
  starterWin: number;
}
interface Statistic extends BasicStatistic {
  followerTotal: number;
  followerWin: number;
  winRate: number;
  starterWinRate: number;
  followerWinRate: number;
  winDiff: number;
}

export default function useTeamStatistics(gameList: Ref<Game[]>) {
  const teamBasicStatistics = computed(() => gameList.value.reduce<Record<string, BasicStatistic>>(
    (map, game) => {
      const teamId = getTeamId(game.playerACharacters);
      const statistic = map[teamId] ?? { teamId, total: 0, win: 0, starterTotal: 0, starterWin: 0 };
      statistic.total += 1;
      if (game.winner === "A") statistic.win++;
      if (game.starter === "A") statistic.starterTotal++;
      if (game.starter === "A" && game.winner === "A") statistic.starterWin++;
      map[teamId] = statistic;
      return map;
    },
    {},
  ));
  const teamStatistics = computed(() => Object.fromEntries(
    Object.entries(teamBasicStatistics.value)
      .map(([teamId, basicStatistic]) => {
        const { total, win, starterTotal, starterWin } = basicStatistic;

        const followerTotal = total - starterTotal;
        const followerWin = win - starterWin;

        const statistic: Statistic = {
          ...basicStatistic,
          followerTotal,
          followerWin,
          winRate: divide(win, total),
          starterWinRate: divide(starterWin, starterTotal),
          followerWinRate: divide(followerWin, followerTotal),
          winDiff: win - (total - win),
        };
        return [teamId, statistic];
      }),
  ));
  return { teamStatistics };
}
