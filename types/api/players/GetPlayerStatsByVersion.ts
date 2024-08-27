import type { GameVersionId } from "~/types";

export interface ApiGetPlayerStatsByVersionItem {
  gameVersion: GameVersionId;
  numMatches: number;
  numMatchesWin: number;
  numGames: number;
  numGamesWin: number;
}

export interface ApiGetPlayerStatsByVersionResponse {
  statsByVersion: ApiGetPlayerStatsByVersionItem[];
}
