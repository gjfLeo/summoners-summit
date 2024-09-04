import { z } from "zod";
import { ZDeckTeamId } from "~/types/data";

export const ZRouterParamsTeamId = z.object({
  teamId: ZDeckTeamId,
});
