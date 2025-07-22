import z from "zod";
import { getStorageGameRecord, getStorageMatchDetail } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Matches"],
    summary: "查询指定场次详情",
    description: "查询指定比赛场次的详细信息，和相关对局。",
    parameters: [
      {
        name: "matchId",
        in: "path",
        required: true,
        description: "场次ID",
        example: "3b350bea7f2d357b22",
      },
    ],
  },
});

const ZRouterParams = z.object({
  matchId: ZMatchId,
});

export default defineEventHandler(async (event) => {
  const { matchId } = await getValidatedRouterParams(event, ZRouterParams.parse);

  const match = await getStorageMatchDetail(matchId);
  if (!match) {
    throw createError({ statusCode: 404, message: "Match not found" });
  }
  const games = await getStorageGameRecord(match.gameIds);
  return {
    ...match,
    games,
  };
});
