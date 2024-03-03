import type { ApiTournamentListData, R } from "~/utils/types";
import { tournamentById } from "~/server/data";

export default defineEventHandler<R & ApiTournamentListData>((event) => {
  const { gameVersion } = getQuery(event);

  let list = Object.values(tournamentById);
  if (gameVersion) {
    list = list.filter(t => t.gameVersion === gameVersion);
  }
  const tournamentList = list.map((tournament) => {
    const { id, gameVersion, name, type, dateRange, championId, championNickname } = tournament;
    return { id, gameVersion, name, type, dateRange, championId, championNickname };
  });
  return { statusCode: 200, tournamentList };
});
