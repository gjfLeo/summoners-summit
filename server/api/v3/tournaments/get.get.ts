import { z } from "zod";
import { ZTournamentId } from "~/types/data";

const ZParams = z.object({
  id: ZTournamentId,
});

export default defineEventHandler(async (event) => {
  const { id } = await getValidatedQuery(event, ZParams.parse);

  const tournament = getTournamentR(id);

  return responseData({ tournament });
});
