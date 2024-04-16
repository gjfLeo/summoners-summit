const ZParams = ZPlayer.pick({ id: true, uniqueName: true });

export default defineEventHandler(async (event) => {
  const { id, uniqueName } = await readValidatedBody(event, ZParams.parse);
  const player = getPlayer(id);
  if (!player) {
    throw responseErrorCode(404, "Player not found", {});
  }
  if (player.uniqueName === uniqueName) {
    return responseOk({});
  }

  const oldUniqueName = player.uniqueName;
  player.uniqueName = uniqueName;
  player.aliases = [...player.aliases, oldUniqueName].filter(n => n !== uniqueName).sort();
  savePlayer(player);
  return responseOk({});
});
