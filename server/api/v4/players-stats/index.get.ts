import z from "zod";
import { getPlayerRank, getRanksByGameVersion, getStorageGameRecord, getStorageMatchList, getStoragePlayer } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Players"],
    summary: "查询选手列表和统计数据",
    description: "查询选手列表和统计数据。<p>若不指定游戏版本，其中的积分榜信息取最新记录的一次积分榜数据。",
    parameters: [
      {
        name: "gameVersion",
        in: "query",
        required: false,
        description: "游戏版本",
        example: "3.7",
      },
    ],
  },
});

const ZQuery = z.object({
  gameVersion: ZGameVersionId.optional(),
});

export default defineEventHandler(async (event) => {
  const { gameVersion } = await getValidatedQuery(event, ZQuery.parse);

  const ranks = await getRanksByGameVersion(gameVersion);

  const playerStatsRecord: Record<PlayerId, PlayerStats> = {};
  async function getRecordItem(playerId: PlayerId) {
    const item = playerStatsRecord[playerId];
    if (item) {
      return item;
    }
    const player = await getStoragePlayer(playerId);
    if (!player) {
      throw createError({
        statusCode: 500,
        message: `Player ${playerId} not found`,
      });
    }
    if (player.ignored) {
      return null;
    }
    const rank = await getPlayerRank(player, { ranks });
    return playerStatsRecord[playerId] = {
      playerId,
      uniqueName: player.uniqueName,
      aliases: player.aliases,

      numMatches: 0,
      numMatchesWin: 0,
      numGames: 0,
      numGamesWin: 0,

      rank: rank?.rank,
      score: rank?.score,
    };
  }

  let matches = await getStorageMatchList();
  matches = matches.filter(match => !match.isPrePatch);
  if (gameVersion) {
    matches = matches.filter(match => match.gameVersion === gameVersion);
  }

  const games = await getStorageGameRecord(matches.flatMap(m => m.gameIds));

  await runParallel(
    new Set(matches.flatMap(m => [m.playerA.playerId, m.playerB.playerId])),
    getRecordItem,
    { concurrency: 10 },
  );

  await runParallel(
    new Set(matches),
    async (match) => {
      const winner = getMatchWinner(match, games);
      for (const p of ["A", "B"] as const) {
        const playerId = match[`player${p}`].playerId;
        const recordItem = await getRecordItem(playerId);
        if (!recordItem) {
          continue;
        }
        recordItem.numMatches++;
        if (winner === p) {
          recordItem.numMatchesWin++;
        }
        match.gameIds.forEach((gameId) => {
          recordItem.numGames++;
          if (games[gameId].winner === p) {
            recordItem.numGamesWin++;
          }
        });
      }
    },
    { concurrency: 10 },
  );
  const playersStats = Object.values(playerStatsRecord)
    .sort((a, b) => {
      if (b.numMatchesWin !== a.numMatchesWin) {
        return b.numMatchesWin - a.numMatchesWin;
      }
      return a.playerId.localeCompare(b.playerId);
    });

  return playersStats;
});
