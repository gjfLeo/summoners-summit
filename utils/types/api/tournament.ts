import type { Game, Match, Tournament } from "../output-data";

export interface ApiTournamentListData {
  tournamentList: Pick<Tournament, "id" | "gameVersion" | "name" | "type">[];
}

export interface ApiTournamentData {
  tournament: Tournament;
}

export type ApiTournamentDetailsMatchesValue = Omit<Match, "id" | "tournamentId">;
export type ApiTournamentDetailsGamesValue = Pick<Game, `player${"A" | "B"}${"Characters" | "DeckId"}` | "starter" | "winner">;

export interface ApiTournamentDetailsData {
  tournament: Tournament;
  matches: Record<string, ApiTournamentDetailsMatchesValue>;
  games: Record<string, ApiTournamentDetailsGamesValue>;
}
