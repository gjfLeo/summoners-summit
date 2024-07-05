import { z } from "zod";
import { ZGameVersionId } from "../data";

export const ZGetTeamStatsParams = z.object({
  gameVersion: ZGameVersionId,
}).strip();
export type GetTeamStatsParams = z.infer<typeof ZGetTeamStatsParams>;

export interface TeamStats {
  games: number;
  gamesWin: number;
  gamesStarter: number;
  gamesStarterWin: number;
  gamesFollower: number;
  gamesFollowerWin: number;
  gamesMirror: number;
  banned: number;
}
