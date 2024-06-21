import { responseData } from "~/server/utils";
import { getGameVersionList } from "~/server/service";
import { defineEventHandler } from "#imports";

export default defineEventHandler(() => {
  const gameVersionList = getGameVersionList();
  return responseData({ gameVersionList });
});
