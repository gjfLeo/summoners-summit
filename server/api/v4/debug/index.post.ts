import z from "zod";
import { getStorageGameRecord, getStorageMatchRecord, getStorageTournamentList } from "~~/server/service";

const ZBody = z.object({
  action: z.string(),
});

export default defineEventHandler(async (event) => {
  const { action } = await readValidatedBody(event, ZBody.parse);

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
