import { divide } from "mathjs/number";

interface TeamStats {
  teamId: string;
  total: number;
  win: number;
  starterTotal: number;
  starterWin: number;
  followerTotal: number;
  followerWin: number;
  winRate: number;
  starterWinRate: number;
  followerWinRate: number;
  winDiff: number;
  banned: number;
  bp: number;
}

export default async function useTeamStatsMap(gameVersion: MaybeRef<string>) {
  const { teamStatsMap: teamBasicStatsMap } = await useApiTeamStatsMap(unref(gameVersion));

  const teamStatsMap = Object.fromEntries(
    Object.entries(teamBasicStatsMap)
      .map(([teamId, teamBasicStats]) => {
        const { total, win, starterTotal, starterWin, followerTotal, followerWin, banned } = teamBasicStats;

        const stats: TeamStats = {
          teamId,
          ...teamBasicStats,
          followerTotal,
          followerWin,
          winRate: divide(win, total),
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
