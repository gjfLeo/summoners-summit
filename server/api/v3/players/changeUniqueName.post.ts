import { changePlayerUniqueName } from "~/server/service";
import { ZPlayer } from "~/types";

const ZParams = ZPlayer.pick({
  id: true,
  uniqueName: true,
});

export default defineEventHandler(async (event) => {
  const { id, uniqueName } = await readValidatedBody(event, ZParams.parse);

  try {
    changePlayerUniqueName(id, uniqueName);
  }
  catch (e) {
    return responseError(e);
  }

  return responseOk();
});
