type Res = ApiResponse<{ nickname?: string; conflictPlayer?: Player }>;

export default defineEventHandler(async (event): Promise<Res> => {
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
    const conflictPlayer = findPlayer(nickname, player.id);
    if (conflictPlayer) {
      if (conflictPlayer.aliases) {
        return responseErrorCode(409, "Player already exists", { nickname, conflictPlayer });
      }
      else {
        deletePlayer(conflictPlayer.id);
        savePlayer(Object.assign(conflictPlayer, player));
        return responseOk({});
      }
    }
  }

  savePlayer(player);
  return responseOk({});
});
