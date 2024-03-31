export default defineEventHandler(async (event) => {
  let player: SavePlayerParams;
  try {
    player = await readValidatedBody(event, ZSavePlayerParams.parse);
  }
  catch (err: any) {
    console.error(err);
    return responseError(err.message);
  }

  player.aliases = player.aliases?.filter(a => a !== player.uniqueName);

  for (const nickname of [player.uniqueName, ...player.aliases ?? []]) {
    const conflictPlayer = findPlayer(nickname);
    if (conflictPlayer) {
      return responseErrorCode(409, "Player already exists", { nickname, conflictPlayer });
    }
  }

  savePlayer(player);
  return responseOk({});
});
