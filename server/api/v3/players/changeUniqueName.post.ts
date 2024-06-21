import { defineEventHandler, readValidatedBody } from "#imports";
import { ZPlayer } from "~/types";
import { responseError, responseErrorCode, responseOk } from "~/server/utils";
import { changePlayerUniqueName, getPlayer, savePlayer } from "~/server/service";

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
