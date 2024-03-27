export default defineEventHandler(async (event) => {
  const player = await readValidatedBody(event, ZPlayerInput.parse);
  savePlayer(player);
  return {};
});
