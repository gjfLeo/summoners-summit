export interface ApiGetPlayerMatchesResponse {
  matchList: MatchDetail[];
  games: Record<GameId, Game>;
}
