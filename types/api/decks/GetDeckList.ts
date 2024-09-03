import { z } from "zod";
import { ZDeckTeamId } from "~/types";
import type { DeckCode } from "~/types";

export const ZGetDeckListParams = z.object({
  teamId: ZDeckTeamId.optional(),
  offset: z.number().optional(),
  limit: z.number().optional(),
});
export type GetDeckListParams = z.infer<typeof ZGetDeckListParams>;

export interface GetDeckListResponseItem {
  deckCode: DeckCode;
  numGames: number;
  numGamesWin: number;
}
export interface GetDeckListResponse {
  deckList: GetDeckListResponseItem[];
}
