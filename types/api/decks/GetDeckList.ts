import { z } from "zod";
import { ZDeckTeamId } from "~/types/data";

export const ZGetDeckListParams = z.object({
  teamId: ZDeckTeamId.optional(),
  offset: z.number().optional().default(0),
  limit: z.number().optional().default(100),
});
