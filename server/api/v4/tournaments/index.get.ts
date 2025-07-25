import { z } from "zod";
import { getTournamentDetailBriefList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Tournaments"],
    summary: "赛事列表查询",
    description: "根据条件查询赛事列表。",
    parameters: [
      {
        name: "gameVersion",
        in: "query",
        required: false,
        description: "游戏版本",
        example: "5.0",
      },
    ],
  },
});

const ZQuery = z.object({
  gameVersion: ZGameVersionId.optional(),
});

export default defineEventHandler(async (event) => {
  const { gameVersion } = await getValidatedQuery(event, ZQuery.parse);

  let tournaments = await getTournamentDetailBriefList();

  if (gameVersion) {
    tournaments = tournaments.filter(t => t.gameVersion === gameVersion);
  }

  tournaments.sort((a, b) => {
    if (!a.dateRange.start || !b.dateRange.start) {
      return 0;
    }
    return b.dateRange.start.localeCompare(a.dateRange.start);
  });

  return tournaments;
});
