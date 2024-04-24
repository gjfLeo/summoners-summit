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

  return responseData({ tournaments });
});
