import type { ApiTeamStatsMapData, ApiTeamStatsMapValue, R } from "~/utils/types";
import { gameById, matchById } from "~/server/data";
import { getTeamIdByCharacters } from "~/utils/cards";

function initTeamStatsValue(): ApiTeamStatsMapValue {
  return {
    win: 0,
    total: 0,
    starterWin: 0,
    starterTotal: 0,
    followerWin: 0,
    followerTotal: 0,
    banned: 0,
    vsSame: 0,
  };
}

export default defineEventHandler<R & ApiTeamStatsMapData>((event) => {
  const { gameVersion } = getQuery(event);

  let gameList = Object.values(gameById);
  let matchList = Object.values(matchById);
  if (gameVersion) {
    gameList = gameList.filter(game => game.gameVersion === gameVersion);
    matchList = matchList.filter(match => match.gameVersion === gameVersion);
  }

  const teamStatsMap: ApiTeamStatsMapData["teamStatsMap"] = {};
  for (const game of gameList) {
    for (const player of (["A", "B"] as const)) {
      const teamId = getTeamIdByCharacters(game[`player${player}Characters`]);
      const teamStatsValue = teamStatsMap[teamId] ?? (teamStatsMap[teamId] = initTeamStatsValue());
      teamStatsValue.total++;
      if (game.winner === player) teamStatsValue.win++;
      if (game.starter === player) teamStatsValue.starterTotal++;
      if (game.winner === player && game.starter === player) teamStatsValue.starterWin++;
      if (game.starter && game.starter !== player) teamStatsValue.followerTotal++;
      if (game.winner === player && game.starter && game.starter !== player) teamStatsValue.followerWin++;

      // 统计内战场数
      if (player === "A" && teamId === getTeamIdByCharacters(game.playerBCharacters)) {
        teamStatsValue.vsSame++;
      }
    }
  }

  for (const match of matchList) {
    for (const ban of match.banned ?? []) {
      for (const player of (["A", "B"] as const)) {
        const teamId = getTeamIdByCharacters(ban[`player${player}Characters`]);
        const teamStatsValue = teamStatsMap[teamId] ?? (teamStatsMap[teamId] = initTeamStatsValue());
        teamStatsValue.banned++;
      }
    }
  }

  return { statusCode: 200, teamStatsMap };
});
