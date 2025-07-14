import { z } from "zod";
import { redirectPlayer } from "~/server/service";
import { ZPlayerId } from "~/types";

const ZParams = z.object({
  sourceId: ZPlayerId,
  targetId: ZPlayerId,
});

export default defineEventHandler(async (event) => {
  const { sourceId, targetId } = await readValidatedBody(event, ZParams.parse);

  try {
    redirectPlayer(sourceId, targetId);
  }
  catch (e) {
    return responseError(e);
  }

  return responseOk();
});
