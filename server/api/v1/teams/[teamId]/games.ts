import { getTeamId } from "~/composables/use-team";
import { gameById } from "~/server/data";
import { getGameMirror } from "~/utils/games";
import type { ApiTeamGamesData, R } from "~/utils/types";

export default defineEventHandler<R & ApiTeamGamesData>((event) => {
  const teamId = event.context.params!.teamId;
  const { gameVersion } = getQuery(event);

  const gameList = Object.values(gameById)
    .filter(g => gameVersion === g.gameVersion)
    .flatMap((g) => {
      const teamIdA = getTeamId(g.playerACharacters);
      const teamIdB = getTeamId(g.playerBCharacters);
      if (teamId === teamIdA) {
        return [g];
      }
      else if (teamId === teamIdB) {
        return [getGameMirror(g)];
      }
      else {
        return [];
      }
    });

  const total = gameList.length;

  return { statusCode: 200, gameList, total };
});
