import z from "zod";
import { clearGameCache, clearMatchCache, clearPlayerCache, clearTournamentCache, getStorageGameRecord, getStorageMatchRecord, getStorageTournamentList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Misc"],
    summary: "调试接口",
    parameters: [
      {
        name: "action",
        in: "query",
        description: "操作",
        required: true,
        schema: {
          type: "string",
          enum: [
            "clearStorageCache",
            "findUnusedData",
          ],
        },
      },
    ],
  },
});

const ZQuery = z.object({
  action: z.enum([
    "clearStorageCache",
    "findUnusedData",
  ]),
});

export default defineEventHandler(async (event) => {
  const { action } = await getValidatedQuery(event, ZQuery.parse);

  if (action === "clearStorageCache") {
    await clearPlayerCache();
    await clearGameCache();
    await clearMatchCache();
    await clearTournamentCache();
    return {};
  }

  if (action === "findUnusedData") {
    const games = await getStorageGameRecord();
    const matches = await getStorageMatchRecord();
    const tournaments = await getStorageTournamentList();

    Object.values(matches).forEach((match) => {
      match.gameIds.forEach((gameId) => {
        delete games[gameId];
      });
    });

    tournaments.flatMap(getTournamentMatchIds).forEach((matchId) => {
      delete matches[matchId];
    });

    return {
      games,
      matches,
    };
  }
});
