import { z } from "zod";
import { defineEventHandler, readValidatedBody } from "#imports";
import { redirectPlayer } from "~/server/service";
import { responseError, responseOk } from "~/server/utils";
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
