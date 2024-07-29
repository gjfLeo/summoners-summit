import { z } from "zod";
import { ZDeckTeamId, ZGameVersionId } from "~/types/data";

export const ZGetTeamExampleDeckParams = z.object({
  gameVersion: ZGameVersionId,
  teamId: ZDeckTeamId,
}).strip();
export type GetTeamExampleDeckParams = z.infer<typeof ZGetTeamExampleDeckParams>;
