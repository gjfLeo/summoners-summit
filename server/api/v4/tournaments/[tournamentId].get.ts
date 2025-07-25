import { z } from "zod";
import { getStorageGame, getStorageMatch, getStorageTournamentDetail } from "~~/server/service";
import { getTournamentMatchIds } from "~~/shared/utils/match";

defineRouteMeta({
  openAPI: {
    tags: ["Tournaments"],
    summary: "赛事详情查询",
    description: "查询指定赛事详情，和相应的场次、对局信息。",
    parameters: [
      {
        name: "tournamentId",
        in: "path",
        required: true,
        description: "赛事ID",
        example: "3b350bea7f2d357b",
      },
    ],
  },
});

const ZRouterParams = z.object({
  tournamentId: ZTournamentId,
});

export default defineEventHandler(async (event) => {
  const { tournamentId: id } = await getValidatedRouterParams(event, ZRouterParams.parse);

  const tournament = await getStorageTournamentDetail(id);

  if (!tournament) {
    throw createError({ statusCode: 404, message: "Tournament not found" });
  }

  const matches: Record<MatchId, Match> = {};
  const games: Record<GameId, Game> = {};

  const matchIds = getTournamentMatchIds(tournament);
  await Promise.all(
    matchIds.map(async (matchId) => {
      const match = await getStorageMatch(matchId);
      if (!match) return;
      matches[matchId] = match!;
      await Promise.all(
        match.gameIds.map(async (gameId) => {
          const game = await getStorageGame(gameId);
          games[gameId] = game!;
        }),
      );
    }),
  );

  return {
    ...tournament,
    matches,
    games,
  };
});
