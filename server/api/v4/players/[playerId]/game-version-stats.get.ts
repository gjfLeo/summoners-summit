import z from "zod";
import { fillStorageGameDetail, fillStorageMatchDetail, getGameVersionList, getStorageGameRecord, getStorageMatchList, getStoragePlayer, getStorageTournamentRecord } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Players"],
    summary: "选手统计数据查询",
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

const getPlayerGameVersionStats = defineCachedFunction(
  async ({ playerId }: { playerId: PlayerId }) => {
    const gameVersions = await getGameVersionList();
    const record: Record<GameVersionId, {
      gameVersion: GameVersionId;
      numMatches: number;
      numMatchesWin: number;
      numGames: number;
      numGamesWin: number;
    }> = Object.fromEntries(
      gameVersions
        .map(gameVersion => [gameVersion.id, {
          gameVersion: gameVersion.id,
          numMatches: 0,
          numMatchesWin: 0,
          numGames: 0,
          numGamesWin: 0,
        }]),
    );

    let matches: MaybeMirrored<Match>[] = await getStorageMatchList();
    matches = matches.filter(m => !m.isPrePatch);
    matches = matches.flatMap((m) => {
      if (m.playerA.playerId === playerId) {
        return [m];
      }
      if (m.playerB.playerId === playerId) {
        return [getMirroredMatch(m)];
      }
      return [];
    });

    const tournaments = await getStorageTournamentRecord([...new Set(matches.map(m => m.tournamentId))]);
    const games = await getStorageGameRecord([...new Set(matches.flatMap(m => m.gameIds))]);

    const matchDetails = await Promise.all(
      matches.map((match) => {
        return fillStorageMatchDetail(match, {
          tournament: tournaments[match.tournamentId],
          games,
        });
      }),
    );

    matchDetails.forEach((match) => {
      const recordItem = record[match.gameVersion];
      recordItem.numMatches++;
      if (match.winner === "A") {
        recordItem.numMatchesWin++;
      };
    });

    const gameDetails = await Promise.all(
      matches.flatMap(match => match.gameIds.map((gameId) => {
        const game = games[gameId];
        return fillStorageGameDetail(
          isMirrored(match) ? getMirroredGame(game) : game,
          {
            match,
            tournament: tournaments[match.tournamentId],
          },
        );
      })),
    );

    gameDetails
      .filter(game => !game.isPrePatch)
      .forEach((game) => {
        record[game.gameVersion].numGames++;
        if (game.winner === "A") record[game.gameVersion].numGamesWin++;
      });

    const list = Object.values(record)
      .sort((a, b) => a.gameVersion.localeCompare(b.gameVersion));
    while (list.length > 0 && list.at(0)?.numMatches === 0) {
      list.shift();
    }
    while (list.length > 0 && list.at(-1)?.numMatches === 0) {
      list.pop();
    }
    return list;
  },
  {
    maxAge: serverMaxAge,
    name: "getPlayerGameVersionStats",
    getKey: ({ playerId }) => getKey(playerId),
  },
);

const ZRouteParams = z.object({
  playerId: ZPlayerId,
});

export default defineEventHandler(async (event) => {
  const { playerId } = await getValidatedRouterParams(event, ZRouteParams.parse);
  const player = await getStoragePlayer(playerId);
  if (!player) {
    throw createError({ statusCode: 404, message: "Player not found" });
  }
  const gameVersionStats = await getPlayerGameVersionStats({ playerId });
  return gameVersionStats;
});
