import type { R, Tournament } from "~/utils/types";
import { tournamentById } from "~/server/data";

interface TournamentData {
  tournament: Tournament;
}

export default defineEventHandler<R & TournamentData>((event) => {
  const tournamentId = event.context.params!.tournamentId;

  const tournament = tournamentById[tournamentId];
  if (!tournament) {
    throw createError({ statusCode: 404, message: "数据不存在" });
  }

  return { statusCode: 200, tournament };
});
