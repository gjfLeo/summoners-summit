import type { Player } from "~/types/data";
import { ZPlayer } from "~/types/data";

const ZParams = ZPlayer.pick({ id: true });

export default defineEventHandler(async (event) => {
  const params = await getValidatedQuery(event, ZParams.parse);
  const { id } = params;

  const player = getPlayer(id);

  if (!player) {
    return responseErrorCode<{ player: Player }>("PLAYER_NOT_FOUND");
  }

  return responseData({ player });
});
