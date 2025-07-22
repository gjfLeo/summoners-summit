import z from "zod";
import { getPlayerAchievements, getStoragePlayer } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Players"],
    summary: "查询指定选手详细信息",
    description: "查询指定选手的详细信息。",
    parameters: [
      {
        name: "playerId",
        in: "path",
        required: true,
        description: "选手ID",
        example: "6e2707a45bb0d3f3",
      },
    ],
  },
});

const ZRouteParams = z.object({
  playerId: ZPlayerId,
});

export default defineEventHandler(async (event) => {
  const { playerId } = await getValidatedRouterParams(event, ZRouteParams.parse);

  const player = await getStoragePlayer(playerId);

  if (!player) {
    throw createError({
      statusCode: 404,
      statusMessage: errorCodes.PLAYER_NOT_FOUND,
    });
  }

  const achievements = await getPlayerAchievements(playerId);

  return {
    ...player,
    achievements,
  };
});
