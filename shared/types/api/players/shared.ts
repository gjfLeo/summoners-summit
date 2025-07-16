import { z } from "zod";

export const ZApiPlayerRouterParams = z.object({
  playerId: ZPlayerId,
});
