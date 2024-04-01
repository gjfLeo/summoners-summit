export default defineEventHandler(async (event) => {
  const params = await readValidatedBody(event, ZPlayer.pick({ id: true }).parse);
  const { id } = params;

  deletePlayer(id);
  return responseOk({ });
});
