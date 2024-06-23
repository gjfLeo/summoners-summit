import { z } from "zod";
import { getGame, getMatch, getTournamentDetail } from "~/server/service";
import type { Game, GameId, Match, MatchId } from "~/types";
import { ZTournamentId } from "~/types";

const ZParams = z.object({
  id: ZTournamentId,
});

export default defineEventHandler(async (event) => {
  const { id } = await getValidatedQuery(event, ZParams.parse);

  const tournament = getTournamentDetail(id);

  if (!tournament) {
    throw createError(errorCodes.TOURNAMENT_NOT_FOUND);
    // return responseErrorCode(errorCodes.TOURNAMENT_NOT_FOUND);
  }

  const matches: Record<MatchId, Match> = {};
  const games: Record<GameId, Game> = {};

  tournament.stages.forEach((stage) => {
    stage.parts.forEach(part =>
      part.matchIds.forEach((matchId) => {
        const match = getMatch(matchId);
        if (!match) return;
        matches[matchId] = match;

        match.gameIds.forEach((gameId) => {
          const game = getGame(gameId);
          if (!game) return;
          games[gameId] = game;
        });
      }),
    );
  });

  return responseData({ tournament, matches, games });
});
