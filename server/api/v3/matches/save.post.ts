import { ZMatchSaveParams, saveMatch } from "~/server/utils/match";
import type { MatchId } from "~/types/data";

export default defineEventHandler(async (event) => {
  const params = await readValidatedBody(event, ZMatchSaveParams.parse);

  try {
    const id = saveMatch(params);
    return responseData<{ id: MatchId }>({ id });
  }
  catch (error) {
    if (error instanceof Error) {
      return responseErrorCode(error.message);
    }
  }
});
