export default defineEventHandler(async (event) => {
  const params = await getValidatedQuery(event, ZPlayer.pick({ id: true }).parse);
  const { id } = params;

  deletePlayer(id);
  return responseOk({ });
});
