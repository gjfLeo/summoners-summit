import { z } from "zod";
import { ZGameVersionId } from "~/types/data";
import { responseData } from "~/server/utils";
import { defineEventHandler, getValidatedQuery } from "#imports";
import { getTournamentDetailBriefList } from "~/server/service";

const ZParams = z.object({
  gameVersion: ZGameVersionId.optional(),
});

export default defineEventHandler(async (event) => {
  const { gameVersion } = await getValidatedQuery(event, ZParams.parse);

  let tournaments = getTournamentDetailBriefList();

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
