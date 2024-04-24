export default defineEventHandler(() => {
  const gameVersionList = getGameVersionList();
  return responseData({ gameVersionList });
});
