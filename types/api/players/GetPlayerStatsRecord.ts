import { z } from "zod";
import { ZGameVersionId } from "~/types/data";
import type { PlayerId } from "~/types/data";

export const ZGetPlayerStatsRecordParams = z.object({
  gameVersion: ZGameVersionId,
});
export type GetPlayerStatsRecordParams = z.infer<typeof ZGetPlayerStatsRecordParams>;

export interface PlayerStats {
  playerId: PlayerId;
  uniqueName: string;
  aliases?: string[];

  numMatches: number;
  numMatchesWin: number;
  numGames: number;
  numGamesWin: number;

  rank: number | undefined;
  score: number | undefined;
}
