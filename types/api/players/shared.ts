import { z } from "zod/v4";
import { ZPlayerId } from "~/types";

export const ZApiPlayerRouterParams = z.object({
  playerId: ZPlayerId,
});
