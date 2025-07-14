import { z } from "zod";
import { ZPlayerId } from "~/types";

export const ZApiPlayerRouterParams = z.object({
  playerId: ZPlayerId,
});
