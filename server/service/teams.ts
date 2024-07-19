import { getGameList } from "./game";
import { getMatchList } from "./match";
import type { DeckTeamId, GetTeamMatchupsParams, GetTeamStatsParams, TeamMatchups, TeamStats } from "~/types";
import { getMirroredGame } from "~/utils/match";

export function getTeamStatsRecords(params: GetTeamStatsParams): Record<DeckTeamId, TeamStats> {
  const { gameVersion } = params;

  const records: Record<DeckTeamId, TeamStats> = {};
  function getRecord(teamId: DeckTeamId): TeamStats {
    return records[teamId] ??= {
      teamId,
      games: 0,
      gamesWin: 0,
      gamesStarter: 0,
      gamesStarterWin: 0,
      gamesFollower: 0,
      gamesFollowerWin: 0,
      gamesMirror: 0,
      banned: 0,
    };
  }

  const games = getGameList()
    .filter(game => game.gameVersion === gameVersion)
    .flatMap(game => [game, getMirroredGame(game)]);

  games.forEach((game) => {
    const teamId = game.playerADeck.teamId;
    const record = getRecord(teamId);
    record.games++;
    if (game.winner === "A") {
      record.gamesWin++;
      if (game.starter === "A") {
        record.gamesStarter++;
        record.gamesStarterWin++;
      }
      if (game.starter === "B") {
        record.gamesFollower++;
        record.gamesFollowerWin++;
      }
    }
    if (game.playerBDeck.teamId === teamId) {
      record.gamesMirror++;
    }
  });

  const matches = getMatchList()
    .filter(match => match.gameVersion === gameVersion);
  matches.flatMap(match => match.bans ?? [])
    .filter(ban => ban.banType === "team")
    .flatMap(ban => [ban.playerATeamId, ban.playerBTeamId])
    .forEach((teamId) => {
      const record = getRecord(teamId);
      record.banned++;
    });

  return records;
}

export function getTeamMatchupStats(params: GetTeamMatchupsParams) {
  const { gameVersion } = params;

  const games = getGameList()
    .filter(game => game.gameVersion === gameVersion);

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
