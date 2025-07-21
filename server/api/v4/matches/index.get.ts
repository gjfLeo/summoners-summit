import { z } from "zod";
import { getStorageGameList, getStorageMatchDetail, getStorageMatchList } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Matches"],
    summary: "查询场次列表",
    description: "根据条件查询场次列表，和相应的对局信息。<p>无对局信息的",
    parameters: [
      {
        name: "gameVersion",
        in: "query",
        required: false,
        description: "游戏版本",
        example: "5.0",
      },
      {
        name: "playerId",
        in: "query",
        required: false,
        description: "选手ID",
        example: "6e2707a45bb0d3f3",
      },
    ],
  },
});

const ZQuery = z.object({
  gameVersion: ZGameVersionId.optional(),
  playerId: ZPlayerId.optional(),

  limit: z.coerce.number().int().min(1).max(100).optional().default(20),
  offset: z.coerce.number().int().min(0).optional().default(0),
});

export default defineEventHandler(async (event) => {
  const { gameVersion, playerId, limit, offset } = await getValidatedQuery(event, ZQuery.parse);

  let matches = await getStorageMatchList();
  if (playerId) {
    matches = matches.filter(m => m.playerA.playerId === playerId || m.playerB.playerId === playerId);
  }
  if (gameVersion) {
    matches = matches.filter(m => m.gameVersion === gameVersion);
  }
  matches = matches.filter(m => m.gameIds.length > 0);
  matches = matches.slice(offset, offset + limit);

  const details: (MatchDetail & { games: Record<GameId, Game> })[] = [];
  for (const match of matches) {
    const detail = (await getStorageMatchDetail(match.id))!;
    const games = await getStorageGameList(match.gameIds);
    if (playerId && match.playerB.playerId === playerId) {
      details.push({
        ...getMirroredMatchDetail(detail),
        games: Object.fromEntries(games.map(game => [game.id, game])),
      });
    }
    else {
      details.push({
        ...detail,
        games: Object.fromEntries(games.map(game => [game.id, getMirroredGame(game)])),
      });
    }
  }
  return details;
});
