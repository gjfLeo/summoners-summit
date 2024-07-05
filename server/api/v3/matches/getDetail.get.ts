import { z } from "zod";
import { getGame, getMatchDetail } from "~/server/service";
import type { Game, GameId } from "~/types";
import { ZMatchId } from "~/types";

const ZParams = z.object({
  id: ZMatchId,
});

export default defineEventHandler(async (event) => {
  const params = await getValidatedQuery(event, ZParams.parse);

  const match = getMatchDetail(params.id);

  if (!match) {
    throw createError(errorCodes.MATCH_NOT_FOUND);
  }

  const games: Record<GameId, Game> = {};
  match.gameIds.forEach((gameId) => {
    games[gameId] = getGame(gameId)!;
  });

  return responseData({ match, games });
});
