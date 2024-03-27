import { z } from "zod";

const routerParamsSchema = z.object({
  playerId: z.string(),
});

export default defineEventHandler(async (event) => {
  const params = await getValidatedRouterParams(event, routerParamsSchema.parse);
  const { playerId } = params;

  const player = getPlayer(playerId);
  if (!player) {
    setResponseStatus(event, 404);
    return { statusCode: 404 };
  }
  return { player };
});
