import z from "zod";
import { getStorageGameList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Teams"],
    summary: "热门阵容对阵数据查询",
    description: "查询对局数最多的8个阵容之间的对阵数据",
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

async function getTeamsMatchupStats({ gameVersion }: {
  gameVersion?: GameVersionId;
}) {
  const record: Record<DeckTeamId, TeamMatchupStats> = {};
  function getRecord(teamId: DeckTeamId, opponentTeamId: DeckTeamId) {
    record[teamId] ??= {
      teamId,
      opponents: {},
      overall: { numGames: 0, numGamesWin: 0 },
    };
    record[teamId].opponents[opponentTeamId] ??= {
      numGames: 0,
      numGamesWin: 0,
    };
    return record[teamId];
  }
  function addMatchup(winTeam: DeckTeamId, loseTeam: DeckTeamId, draw?: boolean) {
    const winRecord = getRecord(winTeam, loseTeam);
    const loseRecord = getRecord(loseTeam, winTeam);
    winRecord.overall.numGames++;
    winRecord.opponents[loseTeam].numGames++;
    loseRecord.overall.numGames++;
    loseRecord.opponents[winTeam].numGames++;
    if (!draw) {
      winRecord.overall.numGamesWin++;
      winRecord.opponents[loseTeam].numGamesWin++;
    }
  }

  let games = await getStorageGameList();
  games = games.filter(g => !g.isPrePatch);
  if (gameVersion) {
    games = games.filter(g => g.gameVersion === gameVersion);
  }

  const numGamesRecord: Record<DeckTeamId, number> = {};
  games.forEach((game) => {
    for (const deck of [game.playerADeck, game.playerBDeck]) {
      numGamesRecord[deck.teamId] ??= 0;
      numGamesRecord[deck.teamId]++;
    }
  });
  const teams = Object.entries(numGamesRecord)
    .sort(sortBy({ field: ([,numGames]) => numGames, order: "desc" }))
    .slice(0, 8)
    .map(([teamId]) => teamId as DeckTeamId);

  games.forEach((game) => {
    if (game.winner === "A") {
      addMatchup(game.playerADeck.teamId, game.playerBDeck.teamId);
    }
    else if (game.winner === "B") {
      addMatchup(game.playerBDeck.teamId, game.playerADeck.teamId);
    }
    else {
      addMatchup(game.playerADeck.teamId, game.playerBDeck.teamId, true);
    }
  });

  const matchupStats = teams.map(teamId => record[teamId]);
  matchupStats.forEach((item) => {
    Object.keys(item.opponents)
      .filter(team => !teams.includes(team as DeckTeamId))
      .forEach((team) => {
        delete item.opponents[team as DeckTeamId];
      });
  });

  return {
    teams,
    matchupStats,
  };
}

const getTeamsMatchupStatsWithCache = defineCachedFunction(
  getTeamsMatchupStats,
  {
    maxAge: serverMaxAge,
    name: "getTeamsMatchupStats",
    getKey: ({ gameVersion }) => getKey(gameVersion),
  },
);

export default defineEventHandler(async (event) => {
  const { gameVersion } = await getValidatedQuery(event, ZQuery.parse);
  const teamsMatchupStats = await getTeamsMatchupStatsWithCache({ gameVersion });
  return teamsMatchupStats;
});
