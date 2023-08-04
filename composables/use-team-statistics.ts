import { divide } from "mathjs/number";
import QueryString from "qs";

interface TeamStat {
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
}

export default async function useTeamStatistics(gameVersion: MaybeRef<string>) {
  const qs = QueryString.stringify({
    gameVersion: unref(gameVersion),
  });
  const teamStatsData = (await useFetch(`/api/v1/team-stats?${qs}`)).data?.value;
  if (teamStatsData?.statusCode !== 200) throw createError("获取数据失败");
  const { teamStats } = teamStatsData;

  const teamStatistics = Object.fromEntries(
    Object.entries(teamStats)
      .map(([teamId, teamBasicStat]) => {
        const { total, win, starterTotal, starterWin } = teamBasicStat;

        const followerTotal = total - starterTotal;
        const followerWin = win - starterWin;

        const stat: TeamStat = {
          teamId,
          ...teamBasicStat,
          followerTotal,
          followerWin,
          winRate: divide(win, total),
          starterWinRate: divide(starterWin, starterTotal),
          followerWinRate: divide(followerWin, followerTotal),
          winDiff: win - (total - win),
        };
        return [teamId, stat];
      }),
  );
  return { teamStatistics };
}
