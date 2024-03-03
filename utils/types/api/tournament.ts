import type { Game, GameId, Match, MatchId, PlayerId, Tournament } from "../output-data";

export interface ApiTournamentListData {
  tournamentList: Omit<Tournament, "stages">[];
}

export interface ApiTournamentData {
  tournament: Tournament;
}

export type ApiTournamentDetailsMatchesValue = Omit<Match, "id" | "tournamentId">;
export type ApiTournamentDetailsGamesValue = Pick<Game, `player${"A" | "B"}${"Characters" | "DeckId"}` | "starter" | "winner">;

export interface ApiTournamentDetailsData {
  tournament: Tournament;
  matches: Record<MatchId, ApiTournamentDetailsMatchesValue>;
  games: Record<GameId, ApiTournamentDetailsGamesValue>;
}
