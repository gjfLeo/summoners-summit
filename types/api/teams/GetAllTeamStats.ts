import type { DeckTeamId } from "~/types/data";
import { z } from "zod/v4";
import { ZGameVersionId } from "~/types/data";

export const ZGetAllTeamStatsParams = z.object({
  gameVersion: ZGameVersionId,
}).strip();
export type GetAllTeamStatsParams = z.infer<typeof ZGetAllTeamStatsParams>;

export interface TeamStats {
  teamId: DeckTeamId;
  games: number;
  gamesWin: number;
  gamesStarter: number;
  gamesStarterWin: number;
  gamesFollower: number;
  gamesFollowerWin: number;
  gamesMirror: number;
  banned: number;
  gamesWithDeck: number;
  gamesWithDeckWin: number;
}
