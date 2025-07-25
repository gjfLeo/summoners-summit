import { z } from "zod";
import { fillStorageGameDetail, getStorageGameList, getStorageMatchRecord, getStorageTournamentRecord } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Games"],
    summary: "对局列表查询",
    description: "根据条件查询对局列表。<p>如果指定`teamId`或`deckCode`，符合筛选条件的一方会放在选手A的位置。<p>即使对局双方均符合筛选条件，对局也只会出现一次。",
    parameters: [
      {
        name: "teamId",
        in: "query",
        required: false,
        description: "阵容ID：角色牌ID以`-`拼接。",
        example: "1311-1404-2304",
      },
      {
        name: "deckCode",
        in: "query",
        required: false,
        description: "上场牌组分享码：特殊字符可能需要转义，也可转为base64Url形式。",
        example: "AtLSN0AUFmHxxVoNF0EiymMOCtHB5J0PCkHR5Z4QGUEi9YMQGmHi958ZDKJhi7cSDBEB",
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
            example: [
              {
                id: "0a1aabeeb10d00fc0301",
                matchId: "0a1aabeeb10d00fc03",
                gameVersion: "5.4",
                playerADeck: {
                  characters: ["2304", "1311", "1404"],
                  teamId: "1311-1404-2304",
                  deckCode: "FtLyN0AUAmHRxVoNF0IiiWMPCkHB5Z0QCkHR9Z4QGWEi94MZGqLhi7URDOJhErcSDDEB",
                },
                playerBDeck: {
                  characters: ["1408", "1312", "2102"],
                  teamId: "1312-1408-2102",
                  deckCode: "BdMU0nAPFPNU33kfGjNk9FoSGBN09ZYSHCMz9rcSDjND+LgSDmNT+cAWDrTTD9ATD8MD",
                },
                winner: "A",
                starter: "B",
                tournamentId: "0a1aabeeb10d00fc",
                tournamentName: { zh: "「逐辉星聚」月话杯" },
                stageIndex: 0,
                stageName: { zh: "8进4" },
                partIndex: 1,
                partName: { zh: "Day2" },
                date: "2025-03-18",
                matchIndex: 0,
                matchVideo: "https://www.bilibili.com/video/BV1FzX7YRE6R",
                playerA: { playerId: "603631b698cde3a0", nickname: "空白" },
                playerB: { playerId: "161c913c3c9475e8", nickname: "叶叁伍" },
              },
            ],
          },
        },
      },
    },
  },
});

const ZQuery = z.object({
  teamId: ZDeckTeamId.optional(),
  deckCode: ZDeckCode.optional(),
  gameVersion: ZGameVersionId.optional(),

  limit: z.coerce.number().int().min(1).max(100).optional().default(20),
  offset: z.coerce.number().int().min(0).optional().default(0),
});

export default defineEventHandler(async (event) => {
  const { teamId, deckCode, gameVersion, limit, offset } = await getValidatedQuery(event, ZQuery.parse);

  let games: MaybeMirrored<Game>[] = await getStorageGameList();
  if (gameVersion) {
    games = games.filter(g => g.gameVersion === gameVersion);
  }
  if (teamId || deckCode) {
    games = games.flatMap((g) => {
      const aValid = (!teamId || g.playerADeck.teamId === teamId)
        && (!deckCode || g.playerADeck.deckCode === deckCode);
      if (aValid) {
        return [g];
      }
      const bValid = (!teamId || g.playerBDeck.teamId === teamId)
        && (!deckCode || g.playerBDeck.deckCode === deckCode);
      if (bValid) {
        return [getMirroredGame(g)];
      }
      return [];
    });
  }

  games.sort(sortBy(
    { field: "gameVersion", order: "desc" },
    { field: "id" },
  ));

  const total = games.length;
  games = games.slice(offset, offset + limit);

  const matches = await getStorageMatchRecord(games.map(g => g.matchId));
  const tournaments = await getStorageTournamentRecord(
    new Set(Object.values(matches).map(m => m.tournamentId)),
  );

  const gameDetails = await Promise.all(
    games.map(async (g) => {
      const match = matches[g.matchId];
      const tournament = tournaments[match.tournamentId];
      return await fillStorageGameDetail(g, { match, tournament });
    }),
  );

  setHeaders(event, {
    "X-Pagination-Total": total,
    "X-Pagination-Limit": limit,
    "X-Pagination-Offset": offset,
  });
  return gameDetails;
});
