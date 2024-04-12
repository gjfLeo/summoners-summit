export default defineEventHandler(async (event) => {
  const { id, alias } = await readValidatedBody(event, ZPlayerAddAliasParams.parse);

  const player = getPlayer(id);
  if (!player) {
    throw createError({
      statusCode: 404,
      statusMessage: "Player not found",
    });
  }

  if (!player.aliases.includes(alias)) {
    player.aliases = [...player.aliases, alias].sort();
  }

  return responseOk({});
});
