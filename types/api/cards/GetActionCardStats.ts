import { z } from "zod";
import { ZDeckTeamId, ZGameVersionId } from "~/types/data";
import type { CardId } from "~/types/data";

export const ZGetActionCardStatsParams = z.object({
  gameVersion: ZGameVersionId,
  teamId: ZDeckTeamId.optional(),
}).strip();
export type GetActionCardStatsParams = z.infer<typeof ZGetActionCardStatsParams>;

export interface ActionCardStats {
  cardId: CardId;
  numGameDecks: number;
  numGameDecksWin: number;
  numUsages: number;
  numUsagesWin: number;
}
