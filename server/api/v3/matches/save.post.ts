import type { MatchId } from "~/types";
import { saveMatch, ZMatchSaveParams } from "~/server/service";

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
