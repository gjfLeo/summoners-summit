import { z } from "zod";
import { ZGameVersionId } from "~/types/data";
import type { DeckTeamId } from "~/types/data";

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
