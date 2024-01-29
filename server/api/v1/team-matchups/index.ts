import { gameById } from "~/server/data";
import { getTeamIdByCharacters } from "~/utils/cards";
import type { ApiTeamMatchupItem, ApiTeamMatchupsData, R, TeamId } from "~/utils/types";

export default defineEventHandler<R & ApiTeamMatchupsData>((event) => {
  const { gameVersion } = getQuery(event);

  const numGamesMap: Record<TeamId, number> = {};

  Object.values(gameById)
    .filter(g => g.gameVersion === gameVersion)
    .forEach((g) => {
      const teamA = getTeamIdByCharacters(g.playerACharacters);
      const teamB = getTeamIdByCharacters(g.playerBCharacters);
      numGamesMap[teamA] = (numGamesMap[teamA] ?? 0) + 1;
      numGamesMap[teamB] = (numGamesMap[teamB] ?? 0) + 1;
    });

  const teams = Object.entries(numGamesMap)
    .sort(([_teamIdA, numGamesA], [_teamIdB, numGamesB]) => {
      return numGamesB - numGamesA;
    })
    .slice(0, 8)
    .map(([teamId]) => teamId as TeamId);

  const matchupMap: Record<TeamId, ApiTeamMatchupItem> = Object.fromEntries(
    teams.map(teamId => ([
      teamId,
      {
        teamId,
        ...Object.fromEntries(
          teams.map(opponentTeamId => [opponentTeamId, { win: 0, total: 0 }]),
        ),
        overall: { win: 0, total: 0 },
      },
    ])),
  );

  Object.values(gameById)
    .filter(g => g.gameVersion === gameVersion)
    .forEach((g) => {
      const teamA = getTeamIdByCharacters(g.playerACharacters);
      const teamB = getTeamIdByCharacters(g.playerBCharacters);
      if (!teams.includes(teamA) || !teams.includes(teamB)) {
        return;
      }
      matchupMap[teamA].overall.total++;
      matchupMap[teamA][teamB].total++;
      matchupMap[teamB].overall.total++;
      matchupMap[teamB][teamA].total++;
      if (g.winner === "A") {
        matchupMap[teamA].overall.win += 1;
        matchupMap[teamA][teamB].win += 1;
      }
      else if (g.winner === "B") {
        matchupMap[teamB].overall.win += 1;
        matchupMap[teamB][teamA].win += 1;
      }
    });

  const matchups = Object.values(matchupMap);

  return { statusCode: 200, teams, matchups };
});
