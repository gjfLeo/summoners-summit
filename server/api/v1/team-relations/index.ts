import { gameById } from "~/server/data";
import { getTeamIdByCharacters } from "~/utils/cards";
import type { ApiTeamRelationItem, ApiTeamRelationsData, R, TeamId } from "~/utils/types";

export default defineEventHandler<R & ApiTeamRelationsData>((event) => {
  const { gameVersion } = getQuery(event);

  const map: Record<`${TeamId}/${TeamId}`, ApiTeamRelationItem> = {};

  Object.values(gameById)
    .filter(g => g.gameVersion === gameVersion)
    .forEach((g) => {
      const teamA = getTeamIdByCharacters(g.playerACharacters);
      const teamB = getTeamIdByCharacters(g.playerBCharacters);
      if (teamA === teamB) return;
      const team1Key = teamA < teamB ? "A" : "B";
      const key: `${TeamId}/${TeamId}` = team1Key === "A" ? `${teamA}/${teamB}` : `${teamB}/${teamA}`;
      map[key] = map[key] ?? {
        teamA: team1Key === "A" ? teamA : teamB,
        teamB: team1Key === "A" ? teamB : teamA,
        teamAWin: 0,
        teamBWin: 0,
      };
      map[key][g.winner === team1Key ? "teamAWin" : "teamBWin"]++;
    });

  const relations = Object.values(map)
    .filter(item => item.teamAWin + item.teamBWin >= 5)
    .map((item) => {
      if (item.teamAWin >= item.teamBWin) return item;
      return {
        teamA: item.teamB,
        teamB: item.teamA,
        teamAWin: item.teamBWin,
        teamBWin: item.teamAWin,
      };
    });

  return { statusCode: 200, relations };
});
