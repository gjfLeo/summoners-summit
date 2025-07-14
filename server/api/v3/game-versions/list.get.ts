import { getGameVersionList } from "~~/server/service";

export default defineEventHandler(async () => {
  const gameVersionList = await getGameVersionList();
  return responseData({ gameVersionList });
});
