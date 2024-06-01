import { ZMatchSaveParams, saveMatch } from "~/server/utils/match";

export default defineEventHandler(async (event) => {
  const params = await readValidatedBody(event, ZMatchSaveParams.parse);

  try {
    const id = saveMatch(params);
    return responseData({ id });
  }
  catch (error) {
    if (error instanceof Error) {
      return responseErrorCode(error.message);
    }
  }
});
