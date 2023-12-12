import { divide } from "mathjs/number";
import type { ApiTeamStatsMapValue, TeamId } from "~/utils/types";

interface TeamStats {
  teamId: TeamId;
  total: number;
  win: number;
  starterTotal: number;
  starterWin: number;
  followerTotal: number;
  followerWin: number;
  winRate: number;
  totalExcludeSame: number;
  winExcludeSame: number;
  winRateExcludeSame: number;
  starterWinRate: number;
  followerWinRate: number;
  winDiff: number;
  banned: number;
  bp: number;
}

export default async function useTeamStatsMap(gameVersion: MaybeRef<string>) {
  const { teamStatsMap: teamBasicStatsMap } = await useApiTeamStatsMap(unref(gameVersion));

  const teamStatsMap = Object.fromEntries(
    (Object.entries(teamBasicStatsMap) as [TeamId, ApiTeamStatsMapValue][])
      .map(([teamId, teamBasicStats]) => {
        const { total, win, starterTotal, starterWin, followerTotal, followerWin, banned, vsSame } = teamBasicStats;

        const stats: TeamStats = {
          teamId,
          ...teamBasicStats,
          followerTotal,
          followerWin,
          winRate: divide(win, total),
          totalExcludeSame: total - 2 * vsSame,
          winExcludeSame: win - vsSame,
          winRateExcludeSame: divide(win - vsSame, total - 2 * vsSame),
          starterWinRate: divide(starterWin, starterTotal),
          followerWinRate: divide(followerWin, followerTotal),
          winDiff: win - (total - win),
          bp: total + banned,
        };
        return [teamId, stats];
      }),
  );
  return { teamStatsMap };
}
