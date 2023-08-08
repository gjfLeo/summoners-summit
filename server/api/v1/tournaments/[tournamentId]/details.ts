import type { Game, Match, R, Tournament } from "~/utils/types";
import { gameById, matchById, tournamentById } from "~/server/data";

type MatchInfo = Omit<Match, "id" | "tournamentId">;
type GameInfo = Pick<Game, `player${"A" | "B"}${"Characters" | "DeckId"}` | "starter" | "winner">;

interface TournamentDetailsData {
  tournament: Tournament;
  matches: Record<string, MatchInfo>;
  games: Record<string, GameInfo>;
}

export default defineEventHandler<R & TournamentDetailsData>((event) => {
  const tournamentId = event.context.params!.tournamentId;

  const tournament = tournamentById[tournamentId];
  if (!tournament) {
    throw createError({ statusCode: 404, message: "数据不存在" });
  }

  const matches = Object.fromEntries(
    Object.values(matchById)
      .filter(m => m.tournamentId === tournamentId)
      .map<[string, MatchInfo]>((match) => {
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
      .map<[string, GameInfo]>((game) => {
        const { id, playerACharacters, playerBCharacters, playerADeckId, playerBDeckId, starter, winner } = game;
        return [id, { playerACharacters, playerBCharacters, playerADeckId, playerBDeckId, starter, winner }];
      }),
  );

  return { statusCode: 200, tournament, matches, games };
});
