export default defineEventHandler(() => {
  const players = getPlayerList();
  return responseData({ players });
});
