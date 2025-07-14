import z from "zod";
import { fillStorageGameDetail, fillStorageMatchDetail, getGameBatch, getGameVersionList, getStorageMatchList } from "~~/server/service";

const ZRouteParams = z.object({
  playerId: ZPlayerId,
});

export default defineEventHandler(async (event) => {
  const { playerId } = await getValidatedRouterParams(event, ZRouteParams.parse);

  const record: Record<GameVersionId, ApiGetPlayerStatsByVersionItem>
    = Object.fromEntries(
      (await getGameVersionList()).map(gameVersion => [gameVersion.id, {
        gameVersion: gameVersion.id,
        numMatches: 0,
        numMatchesWin: 0,
        numGames: 0,
        numGamesWin: 0,
      }]),
    );

  const games: GameDetail[] = [];

  const matches: MatchDetail[] = [];
  for (const match of await getStorageMatchList()) {
    if (match.isPrePatch) continue;
    if (match.playerA.playerId === playerId) {
      matches.push((await fillStorageMatchDetail(match.id))!);
    };
    if (match.playerB.playerId === playerId) {
      matches.push(getMirroredMatchDetail((await fillStorageMatchDetail(match.id))!));
    };
  }
  for (const match of matches) {
    record[match.gameVersion].numMatches++;
    if (match.winner === "A") {
      record[match.gameVersion].numMatchesWin++;
    };
    for (const game of await getGameBatch(match.gameIds)) {
      games.push(await fillStorageGameDetail(game));
    }
  }

  games
    .filter(game => !game.isPrePatch)
    .flatMap((game) => {
      if (game.playerA.playerId === playerId) return [game];
      if (game.playerB.playerId === playerId) return [getMirroredGameDetail(game)];
      return [];
    })
    .forEach((game) => {
      record[game.gameVersion].numGames++;
      if (game.winner === "A") record[game.gameVersion].numGamesWin++;
    });

  const statsByVersion = Object.values(record)
    .sort((a, b) => a.gameVersion.localeCompare(b.gameVersion));
  while (statsByVersion.length >= 2 && statsByVersion[0].numMatches === 0 && statsByVersion.at(1)!.numGames === 0) {
    statsByVersion.shift();
  }
  while (statsByVersion.length >= 2 && statsByVersion.at(-1)!.numMatches === 0 && statsByVersion.at(-2)!.numGames === 0) {
    statsByVersion.pop();
  }

  return statsByVersion;
});
