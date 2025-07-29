import { getGameList } from "./game";

export function getTeamMatchupStats(params: GetAllTeamMatchupsParams) {
  const { gameVersion } = params;

  const games = getGameList()
    .filter(game => game.gameVersion === gameVersion)
    .filter(game => !game.isPrePatch);

  // 选择对局数最多的8个阵容
  const numGamesRecord: Record<DeckTeamId, number> = {};
  games.forEach((game) => {
    numGamesRecord[game.playerADeck.teamId] = (numGamesRecord[game.playerADeck.teamId] ?? 0) + 1;
    numGamesRecord[game.playerBDeck.teamId] = (numGamesRecord[game.playerBDeck.teamId] ?? 0) + 1;
  });
  const teams = Object.entries(numGamesRecord)
    .sort(([_teamIdA, numGamesA], [_teamIdB, numGamesB]) => {
      return numGamesB - numGamesA;
    })
    .slice(0, 8)
    .map(([teamId]) => teamId as DeckTeamId);

  const records: Record<DeckTeamId, TeamMatchups> = {};
  function getRecord(teamId: DeckTeamId, opponentTeamId: DeckTeamId): TeamMatchups {
    records[teamId] ??= {
      teamId,
      opponents: {},
      overall: { numGames: 0, numGamesWin: 0 },
    };
    records[teamId].opponents[opponentTeamId] ??= {
      numGames: 0,
      numGamesWin: 0,
    };
    return records[teamId];
  }

  games
    .filter(game => teams.includes(game.playerADeck.teamId) && teams.includes(game.playerBDeck.teamId))
    // .filter(game => game.playerADeck.teamId !== game.playerBDeck.teamId)
    .flatMap(game => [game, getMirroredGame(game)])
    .forEach((game) => {
      const teamAId = game.playerADeck.teamId;
      const teamBId = game.playerBDeck.teamId;
      const record = getRecord(teamAId, teamBId);
      record.overall.numGames++;
      record.opponents[teamBId].numGames++;
      if (game.winner === "A") {
        record.overall.numGamesWin++;
        record.opponents[teamBId].numGamesWin++;
      }
    });

  const matchupStats = Object.values(records).sort((a, b) => teams.indexOf(a.teamId) - teams.indexOf(b.teamId));

  return { teams, matchupStats };
}
