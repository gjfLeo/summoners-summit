import type { R } from "~/utils/types";
import { gameById } from "~/server/data";
import { getTeamId } from "~/composables/use-team";

interface TeamStats {
  total: number;
  win: number;
  starterTotal: number;
  starterWin: number;
}

interface TeamStatsData {
  teamStatsMap: Record<string, TeamStats>;
}

const initTeamStat = (): TeamStats => ({ win: 0, total: 0, starterWin: 0, starterTotal: 0 });

export default defineEventHandler<R & TeamStatsData>((event) => {
  const { gameVersion } = getQuery(event);

  let gameList = Object.values(gameById);
  if (gameVersion) {
    gameList = gameList.filter(game => game.gameVersion === gameVersion);
  }

  const teamStatsMap: Record<string, TeamStats> = {};
  for (const game of gameList) {
    for (const player of (["A", "B"] as const)) {
      const teamId = getTeamId(game[`player${player}Characters`]);
      const teamStat = teamStatsMap[teamId] ?? (teamStatsMap[teamId] = initTeamStat());
      teamStat.total++;
      if (game.winner === player) teamStat.win++;
      if (game.starter === player) teamStat.starterTotal++;
      if (game.winner === player && game.starter === player) teamStat.starterWin++;
    }
  }

  return { statusCode: 200, teamStatsMap };
});
