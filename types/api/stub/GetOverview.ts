import type { GameVersionId } from "~/types/data";

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
