import { z } from "zod";
import { ZDeckCode } from "../data";

export const ZGetGameListParams = z.object({
  deckCode: ZDeckCode.optional(),
});
export type GetGameListParams = z.infer<typeof ZGetGameListParams>;
