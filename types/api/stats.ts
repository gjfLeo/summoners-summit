import { z } from "zod";
import { ZGameVersionId } from "../data";
import type { DeckTeamId } from "../data";

export const ZGetTeamStatsParams = z.object({
  gameVersion: ZGameVersionId,
}).strip();
export type GetTeamStatsParams = z.infer<typeof ZGetTeamStatsParams>;

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
}

export const ZGetTeamMatchupsParams = z.object({
  gameVersion: ZGameVersionId,
  minGames: z.number().optional(),
}).strip();
export type GetTeamMatchupsParams = z.infer<typeof ZGetTeamMatchupsParams>;

export interface TeamMatchups {
  teamAId: DeckTeamId;
  teamBId: DeckTeamId;
  gamesAWin: number;
  gamesBWin: number;
}
