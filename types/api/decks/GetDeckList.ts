import { z } from "zod";
import { ZDeckTeamId } from "~/types";
import type { DeckCode } from "~/types";

export const ZGetDeckListParams = z.object({
  teamId: ZDeckTeamId.optional(),
  offset: z.number().optional().default(0),
  limit: z.number().optional().default(100),
});

export interface GetDeckListResponse {
  decks: DeckCode[];
}
