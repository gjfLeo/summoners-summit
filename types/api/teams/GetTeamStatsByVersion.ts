import { z } from "zod";
import { type GameVersionId, ZDeckTeamId } from "~/types/data";

export const ZGetTeamStatsByVersionParams = z.object({
  teamId: ZDeckTeamId,
});
export type GetTeamStatsByVersionParams = z.infer<typeof ZGetTeamStatsByVersionParams>;

export interface TeamStatsInVersion {
  gameVersion: GameVersionId;
  numGames: number;
  numGamesWin: number;
  numBanned: number;
}
