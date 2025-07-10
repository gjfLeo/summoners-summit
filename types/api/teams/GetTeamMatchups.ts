import type { DeckTeamId } from "~/types/data";
import { z } from "zod/v4";
import { ZGameVersionId } from "~/types/data";

export const ZGetTeamMatchupsParams = z.object({
  gameVersion: ZGameVersionId,
});

export interface GetTeamMatchupsResponseItem {
  opponentTeamId: DeckTeamId;
  numGames: number;
  numGamesWin: number;
  numGamesStarter: number;
  numGamesStarterWin: number;
}

export interface GetTeamMatchupsResponse {
  matchups: GetTeamMatchupsResponseItem[];
}
