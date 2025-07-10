import z from "zod/v4";
import { getTeamDecksStats } from "~/server/service";
import { ZDeckTeamId, ZGameVersionId } from "~/types";

const ZRouteParams = z.object({
  teamId: ZDeckTeamId,
});

const ZQuery = z.object({
  gameVersion: ZGameVersionId.optional(),
  sortBy: z.enum(["numGames", "numGamesWin", "distanceToAverage"]).optional(),
});

export default defineEventHandler(async (event) => {
  const { teamId } = await getValidatedRouterParams(event, ZRouteParams.parse);
  const { gameVersion, sortBy } = await getValidatedQuery(event, ZQuery.parse);

  let deckStats = await getTeamDecksStats({ teamId, gameVersion });
  if (sortBy) {
    deckStats = deckStats.sort((a, b) => {
      return (a[sortBy] - b[sortBy]) * (sortBy === "distanceToAverage" ? 1 : -1);
    });
  }

  return deckStats;
});
