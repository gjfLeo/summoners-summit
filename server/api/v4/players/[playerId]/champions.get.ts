import z from "zod";
import { getStoragePlayer, getTournamentDetailBriefList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Players"],
    summary: "选手冠军记录查询",
    description: "查询指定选手的获得过的赛事冠军。",
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
    throw createError({ statusCode: 404, message: "Player not found" });
  }

  const tournaments = await getTournamentDetailBriefList();
  const champions = tournaments
    .filter(t => t.champion?.playerId === playerId)
    .sort((a, b) => b.gameVersion.localeCompare(a.gameVersion))
    .sort((a, b) => {
      if (a.dateRange.end && b.dateRange.end) {
        return b.dateRange.end.localeCompare(a.dateRange.end);
      }
      if (a.dateRange.start && b.dateRange.start) {
        return b.dateRange.start.localeCompare(a.dateRange.start);
      }
      return 0;
    })
    .map((t) => {
      return {
        tournamentId: t.id,
        tournamentName: t.name,
        gameVersion: t.gameVersion,
        date: t.dateRange.end,
      };
    });
  return champions;
});
