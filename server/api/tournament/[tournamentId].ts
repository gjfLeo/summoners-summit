import { tournamentById } from "../../data";
import type { R, Tournament } from "~/utils/types";

interface TournamentData {
  tournament?: Tournament;
}

export default defineEventHandler<R & TournamentData>((event) => {
  const tournamentId = event.context.params!.tournamentId;

  const tournament = tournamentById[tournamentId];
  if (!tournament) {
    return { statusCode: 204, message: "赛事不存在" };
  }

  return { statusCode: 200, tournament };
});
