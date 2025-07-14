import { z } from "zod";

export const ZRouterParamsTeamId = z.object({
  teamId: ZDeckTeamId,
});
