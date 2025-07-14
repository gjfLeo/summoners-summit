import { z } from "zod";

export const ZGetActionCardStatsParams = z.object({
  gameVersion: ZGameVersionId.optional(),
  teamId: ZDeckTeamId.optional(),
  preferredGameVersion: ZGameVersionId.optional(),
}).strip();
export type GetActionCardStatsParams = z.infer<typeof ZGetActionCardStatsParams>;

export interface ActionCardStats {
  cardId: CardId;
  numGameDecks: number;
  numGameDecksWin: number;
  numUsages: number;
  numUsagesWin: number;
}
