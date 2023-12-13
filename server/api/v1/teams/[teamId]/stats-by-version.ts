import { gameById, matchById } from "~/server/data";
import { getTeamIdByCharacters } from "~/utils/cards";
import { getAllGameVersions, initGameVersionMap } from "~/utils/game-version";
import { getGameMirror } from "~/utils/games";
import type { ApiTeamStatsByVersionData, GameVersion, R, TeamId } from "~/utils/types";

export default defineEventHandler<R & ApiTeamStatsByVersionData>((event) => {
  const teamId = event.context.params!.teamId as TeamId;

  const statsByVersionMap: Record<GameVersion, ApiTeamStatsByVersionData["statsByVersion"][number]> = initGameVersionMap(gameVersion => ({
    gameVersion,
    ban: 0,
    pick: 0,
    win: 0,
  }));

  Object.values(gameById)
    .flatMap(g => [g, getGameMirror(g)])
    .filter(g => teamId === getTeamIdByCharacters(g.playerACharacters))
    .forEach((g) => {
      statsByVersionMap[g.gameVersion].pick++;
      statsByVersionMap[g.gameVersion].win += g.winner === "A" ? 1 : 0;
    });

  Object.values(matchById)
    .filter(m => m.banned?.length)
    .forEach((m) => {
      m.banned?.forEach((b) => {
        if (teamId === getTeamIdByCharacters(b.playerACharacters)) statsByVersionMap[m.gameVersion].ban++;
        if (teamId === getTeamIdByCharacters(b.playerBCharacters)) statsByVersionMap[m.gameVersion].ban++;
      });
    });

  const statsByVersion = getAllGameVersions().map(v => statsByVersionMap[v]);

  return { statusCode: 200, statsByVersion };
});
