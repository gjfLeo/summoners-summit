import { z } from "zod";
import { ZGameVersionId } from "~/types/data";

const ZParams = z.object({
  gameVersion: ZGameVersionId.optional(),
});

export default defineEventHandler(async (event) => {
  const { gameVersion } = await getValidatedQuery(event, ZParams.parse);

  let tournaments = getTournamentList();

  if (gameVersion) {
    tournaments = tournaments.filter(t => t.gameVersion === gameVersion);
  }

  tournaments.sort((a, b) => {
    if (!a.dateRange.start || !b.dateRange.start) {
      return 0;
    }
    return b.dateRange.start.localeCompare(a.dateRange.start);
  });

  return responseData({ tournaments });
});
