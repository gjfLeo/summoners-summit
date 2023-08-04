import { tournamentById } from "../../data";
import type { R, Tournament } from "~/utils/types";

type TournamentListItem = Pick<Tournament, "id" | "gameVersion" | "name" | "type">;
interface TournamentsData {
  tournamentList: TournamentListItem[];
}

export default defineEventHandler<R & TournamentsData>((event) => {
  const { gameVersion } = getQuery(event);

  let list = Object.values(tournamentById);
  if (gameVersion) {
    list = list.filter(t => t.gameVersion === gameVersion);
  }
  const tournamentList = list.map((t) => {
    const { stages: _stages, ...remains } = t;
    return remains;
  });
  return { statusCode: 200, tournamentList };
});
