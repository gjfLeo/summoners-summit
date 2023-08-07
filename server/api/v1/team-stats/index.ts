import type { R } from "~/utils/types";
import { gameById } from "~/server/data";
import { getTeamId } from "~/composables/use-team";

interface TeamStat {
  total: number;
  win: number;
  starterTotal: number;
  starterWin: number;
}

interface TeamStatsData {
  teamStats: Record<string, TeamStat>;
}

const initTeamStat = (): TeamStat => ({ win: 0, total: 0, starterWin: 0, starterTotal: 0 });

export default defineEventHandler<R & TeamStatsData>((event) => {
  const { gameVersion } = getQuery(event);

  let gameList = Object.values(gameById);
  if (gameVersion) {
    gameList = gameList.filter(game => game.gameVersion === gameVersion);
  }

  const teamStats: Record<string, TeamStat> = {};
  for (const game of gameList) {
    for (const player of (["A", "B"] as const)) {
      const teamId = getTeamId(game[`player${player}Characters`]);
      const teamStat = teamStats[teamId] ?? (teamStats[teamId] = initTeamStat());
      teamStat.total++;
      if (game.winner === player) teamStat.win++;
      if (game.starter === player) teamStat.starterTotal++;
      if (game.winner === player && game.starter === player) teamStat.starterWin++;
    }
  }

  return { statusCode: 200, teamStats };
});
