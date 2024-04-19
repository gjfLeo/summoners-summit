import { z } from "zod";
import { mergePlayer } from "~/server/utils/players";
import type { ApiResponse } from "~/server/utils/response";
import { ZPlayerId } from "~/types/data";

const ZParams = z.object({
  sourceId: ZPlayerId,
  targetId: ZPlayerId,
});

export default defineEventHandler(async (event): Promise<ApiResponse> => {
  const { sourceId, targetId } = await readValidatedBody(event, ZParams.parse);

  try {
    mergePlayer(sourceId, targetId);
  }
  catch (error) {
    if (error instanceof Error) {
      return responseErrorCode(error.message);
    }
  }

  return responseOk();
});
