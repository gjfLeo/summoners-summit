import z from "zod";
import { getActionCardCountRecord, getStorageGameList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Teams", "Decks"],
    summary: "阵容牌组数据查询",
    description: "查询特定阵容的牌组和统计数据。",
    parameters: [
      {
        name: "teamId",
        in: "path",
        required: true,
        description: "阵容ID：角色牌ID以`-`拼接。",
        example: "1311-1404-2304",
      },
      {
        name: "gameVersion",
        in: "query",
        required: false,
        description: "游戏版本",
        example: "5.0",
      },
    ],
    responses: {
      200: {
        description: "成功",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  deckCode: { type: "string", description: "牌组分享码" },
                  numGames: { type: "number", description: "上场对局数" },
                  numGamesWin: { type: "number", description: "获胜对局数" },
                  distanceToAverage: { type: "number", description: "与“阵容平均牌组”的“距离”" },
                },
              },
            },
            example: [{
              deckCode: "FtLyN0AUAmHRxVoNF0IiiWMPCkHB5Z0QCkHR9Z4QGWEi94MZGqLhi7URDOJhErcSDDEB",
              numGames: 1,
              numGamesWin: 1,
              distanceToAverage: 9.181058495821725,
            }],
          },
        },
      },
    },
  },
});

const ZRouteParams = z.object({
  teamId: ZDeckTeamId,
});

const ZQuery = z.object({
  gameVersion: ZGameVersionId.optional(),
  sortBy: z.enum(["numGames", "numGamesWin", "distanceToAverage"]).optional(),
});

/**
 * 计算胜率时，平局视为负
 */
const getTeamDecksStats = defineCachedFunction(
  async ({ gameVersion, teamId }: {
    teamId: DeckTeamId;
    gameVersion?: GameVersionId;
  }) => {
    let games = await getStorageGameList();
    games = games.filter(g => !g.isPrePatch);
    if (gameVersion) {
      games = games.filter(g => g.gameVersion === gameVersion);
    }

    const decks: { deckCode: DeckCode; win: boolean }[] = [];
    games.forEach((game) => {
      for (const p of ["A", "B"] as const) {
        const deck = game[`player${p}Deck`];
        if (deck.deckCode && deck.teamId === teamId) {
          decks.push({
            deckCode: deck.deckCode,
            win: game.winner === p,
          });
        }
      }
    });

    const decksRecord: Record<DeckCode, {
      deckCode: DeckCode;
      numGames: number;
      numGamesWin: number;
      cardCountRecord: Record<CardId, number>;
    }> = {};
    async function getRecordItem(deckCode: DeckCode) {
      if (decksRecord[deckCode]) {
        return decksRecord[deckCode];
      }
      return decksRecord[deckCode] = {
        deckCode,
        numGames: 0,
        numGamesWin: 0,
        cardCountRecord: await getActionCardCountRecord(deckCode),
      };
    }
    await runParallel(
      new Set(decks.map(d => d.deckCode)),
      getRecordItem,
      { concurrency: 10 },
    );

    await runParallel(
      new Set(decks),
      async (deck) => {
        const recordItem = await getRecordItem(deck.deckCode);
        recordItem.numGames++;
        if (deck.win) {
          recordItem.numGamesWin++;
        }
      },
      { concurrency: 10 },
    );

    // 胜利对局的额外加权，0表示不考虑
    const winWeight = 1;
    const maxScorePoint = decks.length + decks.filter(d => d.win).length * winWeight;
    // 卡牌的分数，0 ~ 2
    const cardScoreRecord: Record<CardId, number> = {};
    Object.values(decksRecord).forEach((deck) => {
      const cardCountRecord = deck.cardCountRecord;
      Object.entries(cardCountRecord)
        .forEach(([cardId, count]) => {
          cardScoreRecord[cardId] ??= 0;
          cardScoreRecord[cardId] += count * (deck.numGames + (deck.numGamesWin * winWeight)) / maxScorePoint;
        });
    });

    const list = Object.values(decksRecord)
      .map<TeamDeckStats>((deck) => {
        return {
          deckCode: deck.deckCode,
          numGames: deck.numGames,
          numGamesWin: deck.numGamesWin,
          distanceToAverage: Object.entries(cardScoreRecord)
            .map(([cardId, score]) => Math.abs(score - (deck.cardCountRecord[cardId] ?? 0)))
            .reduce((acc, cur) => acc + cur, 0),
        };
      });
    list.sort(sortBy(
      { field: "numGames", order: "desc" },
      { field: "numGamesWin", order: "desc" },
      { field: "distanceToAverage" },
      { field: "deckCode" },
    ));
    return list;
  },
  {
    maxAge: serverMaxAge,
    name: "getTeamDecksStats",
    getKey: ({ teamId, gameVersion }) => getKey(teamId, gameVersion),
  },
);

export default defineEventHandler(async (event) => {
  const { teamId } = await getValidatedRouterParams(event, ZRouteParams.parse);
  const { gameVersion } = await getValidatedQuery(event, ZQuery.parse);

  const deckStats = await getTeamDecksStats({ teamId, gameVersion });

  return deckStats;
});
