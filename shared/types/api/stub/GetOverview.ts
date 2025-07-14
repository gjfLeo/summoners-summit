export interface GetOverviewResponseItem {
  gameVersion: GameVersionId;
  numGames: number;
  numGamesWithDeck: number;
  numGamesWithStarter: number;
  numGamesStarterWin: number;
}

export interface GetOverviewResponse {
  overview: GetOverviewResponseItem[];
}
