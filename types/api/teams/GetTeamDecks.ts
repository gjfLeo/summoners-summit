import { z } from "zod";
import { ZDeckTeamId, ZGameVersionId } from "~/types/data";

export const ZGetTeamDecksParams = z.object({
  gameVersion: ZGameVersionId,
  teamId: ZDeckTeamId,
}).strip();
export type GetTeamDecksParams = z.infer<typeof ZGetTeamDecksParams>;
