import z from "zod";
import { clearGameCache, clearMatchCache, clearPlayerCache, clearTournamentCache, getStorageGameRecord, getStorageMatchRecord, getStorageTournamentList, refreshPlayerIndex } from "~~/server/service";
import { updateDeckCodes } from "~~/server/service/deck";

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
            "refreshPlayerIndex",
            "updateDeckCodes",
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
    "refreshPlayerIndex",
    "updateDeckCodes",
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

  if (action === "refreshPlayerIndex") {
    await refreshPlayerIndex();
    return {};
  }

  if (action === "updateDeckCodes") {
    await updateDeckCodes();
    return {};
  }
});
