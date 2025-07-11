import { z } from "zod/v4";
import { ZDeckTeamId } from "~/types/data";

export const ZRouterParamsTeamId = z.object({
  teamId: ZDeckTeamId,
});
