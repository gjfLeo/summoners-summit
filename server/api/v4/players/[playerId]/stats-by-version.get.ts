import z from "zod";
import { fillStorageGameDetail, fillStorageMatchDetail, getGameVersionList, getStorageGameList, getStorageMatchList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Players"],
    summary: "查询选手统计数据",
    description: "查询选手的赛事统计数据，按游戏版本为维度。<p>若选手在某个版本之前或某个版本之后没有参赛记录，多个无数据的版本会被截取（每侧保留一个版本）。中间的空白版本不会省略。</p>",
    parameters: [
      {
        name: "playerId",
        in: "path",
        required: true,
        description: "选手ID",
        example: "d2b084af89a32bf5",
      },
    ],
  },
});

const ZRouteParams = z.object({
  playerId: ZPlayerId,
});

export default defineEventHandler(async (event) => {
  const { playerId } = await getValidatedRouterParams(event, ZRouteParams.parse);

  const gameVersions = await getGameVersionList();
  const record: Record<GameVersionId, ApiGetPlayerStatsByVersionItem>
    = Object.fromEntries(
      gameVersions.map(gameVersion => [gameVersion.id, {
        gameVersion: gameVersion.id,
        numMatches: 0,
        numMatchesWin: 0,
        numGames: 0,
        numGamesWin: 0,
      }]),
    );

  const games: GameDetail[] = [];

  console.time("getStorageMatchList");
  const matches = await getStorageMatchList();
  console.timeEnd("getStorageMatchList");

  const matchDetails: MatchDetail[] = [];
  for (const match of matches) {
    if (match.isPrePatch) continue;
    if (match.playerA.playerId === playerId) {
      const detail = await fillStorageMatchDetail(match);
      matchDetails.push(detail);
    };
    if (match.playerB.playerId === playerId) {
      const detail = await fillStorageMatchDetail(match);
      matchDetails.push(getMirroredMatchDetail(detail));
    };
  }
  for (const match of matchDetails) {
    record[match.gameVersion].numMatches++;
    if (match.winner === "A") {
      record[match.gameVersion].numMatchesWin++;
    };
    for (const game of await getStorageGameList(match.gameIds)) {
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
