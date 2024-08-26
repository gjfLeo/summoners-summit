import { z } from "zod";
import { ZPlayerId } from "~/types";
import type { GameVersionId } from "~/types";

export const ZApiGetPlayerStatsByVersionRouteParams = z.object({
  playerId: ZPlayerId,
});

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
