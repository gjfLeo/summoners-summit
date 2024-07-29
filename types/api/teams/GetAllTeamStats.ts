import { z } from "zod";
import { ZGameVersionId } from "~/types/data";
import type { DeckTeamId } from "~/types/data";

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
