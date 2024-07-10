import { getGameList } from "./game";
import { getTournament } from "./tournament";
import { getMatch, getMatchList } from "./match";
import type { DeckTeamId, GetTeamStatsParams, TeamStats } from "~/types";
import { getMirroredGame } from "~/utils/match";

export function getTeamStatsRecords(params: GetTeamStatsParams): Record<DeckTeamId, TeamStats> {
  const { gameVersion } = params;

  const records: Record<DeckTeamId, TeamStats> = {};
  function getRecord(teamId: DeckTeamId): TeamStats {
    return records[teamId] ??= {
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
    .map((game) => {
      const match = getMatch(game.matchId)!;
      const tournament = getTournament(match.tournamentId)!;
      return {
        gameVersion: tournament.gameVersion,
        ...game,
      };
    })
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
    .map((match) => {
      const tournament = getTournament(match.tournamentId)!;
      return {
        gameVersion: tournament.gameVersion,
        ...match,
      };
    })
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
