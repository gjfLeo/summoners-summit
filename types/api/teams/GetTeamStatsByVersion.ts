import { z } from "zod";
import { ZDeckTeamId } from "~/types/data";
import type { GameVersionId } from "~/types/data";

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
