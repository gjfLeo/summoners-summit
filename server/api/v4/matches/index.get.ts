import { z } from "zod";
import { fillStorageMatchDetail, getStorageGameRecord, getStorageMatchList, getStorageTournamentRecord } from "~~/server/service";

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
    matches = matches.flatMap((m) => {
      if (m.playerA.playerId === playerId) return [m];
      if (m.playerB.playerId === playerId) return [getMirroredMatch(m)];
      return [];
    });
  }
  if (gameVersion) {
    matches = matches.filter(m => m.gameVersion === gameVersion);
  }
  matches = matches.filter(m => m.gameIds.length > 0);
  matches = matches.sort((a, b) => {
    if (a.gameVersion !== b.gameVersion) {
      return b.gameVersion.localeCompare(a.gameVersion);
    }
    return a.id.localeCompare(b.id);
  });
  matches = matches.slice(offset, offset + limit);

  const tournaments = await getStorageTournamentRecord([...new Set(matches.map(m => m.tournamentId))]);
  const games = await getStorageGameRecord([...new Set(matches.flatMap(m => m.gameIds))]);

  const details = await Promise.all(
    matches.map(async (match) => {
      const matchDetail = await fillStorageMatchDetail(match, {
        tournament: tournaments[match.tournamentId],
        games,
      });
      return {
        ...matchDetail,
        games: Object.fromEntries(
          matchDetail.gameIds.map((gameId) => {
            const game = games[gameId];
            return [gameId, isMirrored(match) ? getMirroredGame(game) : game];
          }),
        ),
      };
    }),
  );

  return details;
});
