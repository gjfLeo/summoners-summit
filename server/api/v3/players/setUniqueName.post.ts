import { ZPlayer } from "~/types/data";

const ZParams = ZPlayer.pick({
  id: true,
  uniqueName: true,
});

export default defineEventHandler(async (event) => {
  const { id, uniqueName } = await readValidatedBody(event, ZParams.parse);
  const player = getPlayer(id);
  if (!player) {
    return responseErrorCode("PLAYER_NOT_EXIST");
  }
  if (player.uniqueName === uniqueName) {
    return responseOk();
  }

  const oldUniqueName = player.uniqueName;
  player.uniqueName = uniqueName;
  player.aliases = [...player.aliases, oldUniqueName].filter(n => n !== uniqueName);
  savePlayer(player);
  return responseOk();
});
