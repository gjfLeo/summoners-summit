export default defineEventHandler(async (event) => {
  const { uniqueName, alias } = await readValidatedBody(event, ZPlayerAddAliasParams.parse);
  const aliasPlayer = findPlayer(alias);
  if (aliasPlayer?.aliases) {
    return responseErrorCode(409, "Alias already exists", {});
  }

  const player = findPlayer(uniqueName);
  if (player) {
    if (player.aliases?.includes(alias)) {
      return responseOk({});
    }
    else {
      player.aliases = [...(player.aliases ?? []), alias];
      savePlayer(player);
      return responseOk({});
    }
  }
  else {
    savePlayer({ uniqueName, aliases: [alias] });
    return responseOk({});
  }
});
