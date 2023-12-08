import { gameVersionList } from "~/composables/use-game-version";
import { gameById, matchById } from "~/server/data";
import { getTeamIdByCharacters } from "~/utils/cards";
import { getGameMirror } from "~/utils/games";
import type { ApiTeamStatsByVersionData, ApiTeamStatsByVersionValue, R } from "~/utils/types";

export default defineEventHandler<R & ApiTeamStatsByVersionData>((event) => {
  const teamId = event.context.params!.teamId;

  const statsByVersion: Record<string, ApiTeamStatsByVersionValue> = Object.fromEntries(
    gameVersionList.filter(version => version.value)
      .map((version) => {
        return [version.value, {
          ban: 0,
          pick: 0,
          win: 0,
        }];
      }),
  );

  Object.values(gameById)
    .flatMap(g => [g, getGameMirror(g)])
    .filter(g => teamId === getTeamIdByCharacters(g.playerACharacters))
    .forEach((g) => {
      statsByVersion[g.gameVersion].pick++;
      statsByVersion[g.gameVersion].win += g.winner === "A" ? 1 : 0;
    });

  Object.values(matchById)
    .filter(m => m.banned?.length)
    .forEach((m) => {
      m.banned?.forEach((b) => {
        if (teamId === getTeamIdByCharacters(b.playerACharacters)) statsByVersion[m.gameVersion].ban++;
        if (teamId === getTeamIdByCharacters(b.playerBCharacters)) statsByVersion[m.gameVersion].ban++;
      });
    });

  return { statusCode: 200, statsByVersion };
});
