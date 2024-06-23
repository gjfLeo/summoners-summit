import { getGameVersionList } from "~/server/service";

export default defineEventHandler(() => {
  const gameVersionList = getGameVersionList();
  return responseData({ gameVersionList });
});
