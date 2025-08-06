import z from "zod";
import { getStorageGameList, getStorageMatchList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Teams"],
    summary: "阵容列表统计数据查询",
    description: "查询阵容列表和统计数据",
    parameters: [
      {
        name: "gameVersion",
        in: "query",
        description: "游戏版本",
        required: false,
        example: "5.7",
      },
    ],
  },
});

const ZQuery = z.object({
  gameVersion: ZGameVersionId.optional(),
});

async function getTeamsStats({ gameVersion }: {
  gameVersion?: GameVersionId;
}) {
  const record: Record<DeckTeamId, TeamStats> = {};
  function getRecordItem(teamId: DeckTeamId) {
    record[teamId] ??= {
      teamId,
      numGames: 0,
      numGamesWin: 0,
      numGamesStarter: 0,
      numGamesStarterWin: 0,
      numGamesFollower: 0,
      numGamesFollowerWin: 0,
      numGamesMirror: 0,
      numBanned: 0,
    };
    return record[teamId];
  }

  let games = await getStorageGameList();
  games = games.filter(g => !g.isPrePatch);
  if (gameVersion) {
    games = games.filter(game => game.gameVersion === gameVersion);
  }
  games = games.flatMap(game => [game, getMirroredGame(game)]);

  games.forEach((game) => {
    const recordItem = getRecordItem(game.playerADeck.teamId);
    recordItem.numGames++;
    if (game.winner === "A") {
      recordItem.numGamesWin++;
    }
    if (game.starter === "A") {
      recordItem.numGamesStarter++;
      if (game.winner === "A") {
        recordItem.numGamesStarterWin++;
      }
    }
    if (game.starter === "B") {
      recordItem.numGamesFollower++;
      if (game.winner === "A") {
        recordItem.numGamesFollowerWin++;
      }
    }
    if (game.playerADeck.teamId === game.playerBDeck.teamId) {
      recordItem.numGamesMirror++;
    }
  });

  let matches = await getStorageMatchList();
  matches = matches.filter(m => !m.isPrePatch);
  if (gameVersion) {
    matches = matches.filter(match => match.gameVersion === gameVersion);
  }
  matches.forEach((match) => {
    match.bans
      ?.filter(ban => ban.banType === "team")
      .flatMap(ban => [ban.playerATeamId, ban.playerBTeamId])
      .forEach((teamId) => {
        const recordItem = getRecordItem(teamId);
        recordItem.numBanned++;
      });
  });

  return Object.values(record)
    .toSorted(sortBy(
      { field: "numGames", order: "desc" },
      { field: "numGamesWin", order: "desc" },
      { field: "numBanned", order: "desc" },
      { field: "teamId" },
    ));
}

const getTeamsStatsWithCache = defineCachedFunction(
  getTeamsStats,
  {
    maxAge: serverMaxAge,
    name: "getTeamsStats",
    getKey: ({ gameVersion }) => getKey(gameVersion),
  },
);

export default defineEventHandler(async (event) => {
  const { gameVersion } = await getValidatedQuery(event, ZQuery.parse);
  const teamsStats = await getTeamsStatsWithCache({ gameVersion });
  return teamsStats;
});
