import { z } from "zod";
import { defineEventHandler, getValidatedQuery } from "#imports";
import { getTournamentDetail } from "~/server/service";
import { responseData } from "~/server/utils";
import { ZTournamentId } from "~/types";

const ZParams = z.object({
  id: ZTournamentId,
});

export default defineEventHandler(async (event) => {
  const { id } = await getValidatedQuery(event, ZParams.parse);

  const tournament = getTournamentDetail(id);

  return responseData({ tournament });
});
