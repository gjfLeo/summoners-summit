import type { Game, GameId, MatchDetail } from "~/types/data";

export interface ApiGetPlayerMatchesResponse {
  matchList: MatchDetail[];
  games: Record<GameId, Game>;
}
