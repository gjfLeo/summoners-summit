import type { ApiTournamentDetailsData, ApiTournamentDetailsGamesValue, ApiTournamentDetailsMatchesValue, R, TournamentId } from "~/utils/types";
import { gameById, matchById, tournamentById } from "~/server/data";

export default defineEventHandler<R & ApiTournamentDetailsData>((event) => {
  const tournamentId = event.context.params!.tournamentId as TournamentId;

  const tournament = tournamentById[tournamentId];
  if (!tournament) {
    throw createError({ statusCode: 404, message: "数据不存在" });
  }

  const matches = Object.fromEntries(
    Object.values(matchById)
      .filter(m => m.tournamentId === tournamentId)
      .map<[string, ApiTournamentDetailsMatchesValue]>((match) => {
        const {
          id,
          tournamentId: _tournamentId,
          ...matchInfo
        } = match;
        return [id, matchInfo];
      }),
  );
  const games = Object.fromEntries(
    Object.values(gameById)
      .filter(g => g.tournamentId === tournamentId)
      .map<[string, ApiTournamentDetailsGamesValue]>((game) => {
        const { id, playerACharacters, playerBCharacters, playerADeckId, playerBDeckId, starter, winner } = game;
        return [id, { playerACharacters, playerBCharacters, playerADeckId, playerBDeckId, starter, winner }];
      }),
  );

  return { statusCode: 200, tournament, matches, games };
});
