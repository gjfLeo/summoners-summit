import { z } from "zod";
import { getPlayer } from "~/server/service";
import { ZPlayerId } from "~/types";

const ZParams = z.object({
  id: ZPlayerId,
});

export default defineEventHandler(async (event) => {
  const params = await getValidatedQuery(event, ZParams.parse);
  const { id } = params;

  const player = getPlayer(id);

  if (!player) {
    return responseErrorCode("PLAYER_NOT_FOUND");
  }

  return responseData({ player });
});
