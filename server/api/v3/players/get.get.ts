import { ZPlayer } from "~/types/data";

const ZParams = ZPlayer.pick({ id: true });

export default defineEventHandler(async (event) => {
  const params = await getValidatedQuery(event, ZParams.parse);
  const { id } = params;

  const player = getPlayer(id);
  return responseData({ player });
});
