export default defineEventHandler(() => {
  return responseOk({ players: readDataList<Player>("players") });
});
