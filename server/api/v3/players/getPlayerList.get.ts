export default defineEventHandler(() => {
  const players = getPlayerList();
  return responseOk({ players });
});
