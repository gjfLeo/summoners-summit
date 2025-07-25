import z from "zod";
import { getStorageGameList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Teams"],
    summary: "阵容对阵数据查询",
    description: "查询指定阵容对战其他阵容的统计数据。",
    parameters: [
      {
        name: "teamId",
        in: "path",
        required: true,
        description: "阵容ID：角色牌ID以`-`拼接。",
        example: "1306-1401-1703",
      },
      {
        name: "gameVersion",
        in: "query",
        required: false,
        description: "游戏版本",
        example: "3.8",
      },
    ],
  },
});

const ZRouteParams = z.object({
  teamId: ZDeckTeamId,
});

const ZQuery = z.object({
  gameVersion: ZGameVersionId.optional(),
});

const getTeamMatchupStats = defineCachedFunction(
  async ({ teamId, gameVersion }: {
    teamId: DeckTeamId;
    gameVersion?: GameVersionId;
  }) => {
    let games = await getStorageGameList();
    if (gameVersion) {
      games = games.filter(g => g.gameVersion === gameVersion);
    }
    games = games.flatMap((g) => {
      const r: MaybeMirrored<Game>[] = [];
      if (g.playerADeck.teamId === teamId) {
        r.push(g);
      }
      if (g.playerBDeck.teamId === teamId) {
        r.push(getMirroredGame(g));
      }
      return r;
    });

    const record: Record<DeckTeamId, {
      opponentTeamId: DeckTeamId;
      numGames: number;
      numGamesWin: number;
      numGamesStarter: number;
      numGamesStarterWin: number;
    }> = {};
    function getRecordItem(opponentTeamId: DeckTeamId) {
      if (record[opponentTeamId]) {
        return record[opponentTeamId];
      }
      return record[opponentTeamId] = {
        opponentTeamId,
        numGames: 0,
        numGamesWin: 0,
        numGamesStarter: 0,
        numGamesStarterWin: 0,
      };
    }

    games.forEach((g) => {
      const opponentTeamId = g.playerBDeck.teamId;
      const recordItem = getRecordItem(opponentTeamId);
      recordItem.numGames++;
      if (g.winner === "A") {
        recordItem.numGamesWin++;
      }
      if (g.starter === "A") {
        recordItem.numGamesStarter++;
        if (g.winner === "A") {
          recordItem.numGamesStarterWin++;
        }
      }
    });
    return Object.values(record)
      .sort(sortBy(
        { field: "numGames", order: "desc" },
        { field: "numGamesWin", order: "desc" },
        { field: "opponentTeamId" },
      ));
  },
  {
    maxAge: serverMaxAge,
    name: "getTeamMatchupStats",
    getKey: ({ teamId, gameVersion }) => getKey(teamId, gameVersion),
  },
);

export default defineEventHandler(async (event) => {
  const { teamId } = await getValidatedRouterParams(event, ZRouteParams.parse);
  const { gameVersion } = await getValidatedQuery(event, ZQuery.parse);

  const matchupStats = await getTeamMatchupStats({ teamId, gameVersion });
  return matchupStats;
});
