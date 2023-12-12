import type { ApiTournamentData, R, TournamentId } from "~/utils/types";
import { tournamentById } from "~/server/data";

export default defineEventHandler<R & ApiTournamentData>((event) => {
  const tournamentId = event.context.params!.tournamentId as TournamentId;

  const tournament = tournamentById[tournamentId];
  if (!tournament) {
    throw createError({ statusCode: 404, message: "数据不存在" });
  }

  return { statusCode: 200, tournament };
});
