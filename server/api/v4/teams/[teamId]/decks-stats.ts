import z from "zod";
import { getTeamDecksStats } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Teams", "Decks"],
    summary: "查询阵容牌组数据",
    description: "查询特定阵容的牌组和统计数据。",
    parameters: [
      {
        name: "teamId",
        in: "path",
        required: true,
        description: "阵容ID：角色牌ID以`-`拼接。",
        example: "1311-1404-2304",
      },
      {
        name: "gameVersion",
        in: "query",
        required: false,
        description: "游戏版本",
        example: "5.0",
      },
    ],
    responses: {
      200: {
        description: "成功",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  deckCode: { type: "string", description: "牌组分享码" },
                  numGames: { type: "number", description: "上场对局数" },
                  numGamesWin: { type: "number", description: "获胜对局数" },
                  distanceToAverage: { type: "number", description: "与“阵容平均牌组”的“距离”" },
                },
              },
            },
            example: [{
              deckCode: "FtLyN0AUAmHRxVoNF0IiiWMPCkHB5Z0QCkHR9Z4QGWEi94MZGqLhi7URDOJhErcSDDEB",
              numGames: 1,
              numGamesWin: 1,
              distanceToAverage: 9.181058495821725,
            }],
          },
        },
      },
    },
  },
});

const ZRouteParams = z.object({
  teamId: ZDeckTeamId,
});

const ZQuery = z.object({
  gameVersion: ZGameVersionId.optional(),
  sortBy: z.enum(["numGames", "numGamesWin", "distanceToAverage"]).optional(),
});

export default defineEventHandler(async (event) => {
  const { teamId } = await getValidatedRouterParams(event, ZRouteParams.parse);
  const { gameVersion, sortBy } = await getValidatedQuery(event, ZQuery.parse);

  let deckStats = await getTeamDecksStats({ teamId, gameVersion });
  if (sortBy) {
    deckStats = deckStats.sort((a, b) => {
      return (a[sortBy] - b[sortBy]) * (sortBy === "distanceToAverage" ? 1 : -1);
    });
  }

  return deckStats;
});
