import { getGameList } from "./game";
import { getTournament } from "./tournament";
import { getMatch } from "./match";
import type { DeckTeamId, GetTeamStatsParams, TeamStats } from "~/types";

export function getTeamStats(params: GetTeamStatsParams): Record<DeckTeamId, TeamStats> {
  const { gameVersion } = params;

  const records: Record<DeckTeamId, TeamStats> = {};

  const games = getGameList()
    .map((game) => {
      const match = getMatch(game.matchId)!;
      const tournament = getTournament(match.tournamentId)!;
      return {
        gameVersion: tournament.gameVersion,
        ...game,
      };
    })
    .filter(game => game.gameVersion === gameVersion);
    // .flatMap(game => [game, getMirroredGame(game)]);

  return records;
}
