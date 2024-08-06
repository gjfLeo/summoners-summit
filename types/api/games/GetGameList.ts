import { z } from "zod";
import { ZDeckCode, ZDeckTeamId, ZGameVersionId } from "../../data";

export const ZGetGameListParams = z.object({
  gameVersion: ZGameVersionId.optional(),
  deckCode: ZDeckCode.optional(),
  teamId: ZDeckTeamId.optional(),
});
export type GetGameListParams = z.infer<typeof ZGetGameListParams>;
