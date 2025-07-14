import { z } from "zod";
import { fillStorageGameDetail, getStorageGameList } from "~~/server/service";

const ZQuery = z.object({
  teamId: ZDeckTeamId.optional(),
  deckCode: ZDeckCode.optional(),
  gameVersion: ZGameVersionId.optional(),

  limit: z.coerce.number().int().min(1).max(100).optional().default(20),
  offset: z.coerce.number().int().min(0).optional().default(0),
});

export default defineEventHandler(async (event) => {
  const { teamId, deckCode, gameVersion, limit, offset } = await getValidatedQuery(event, ZQuery.parse);

  let games = await getStorageGameList();
  if (teamId) {
    games = games.filter(g => g.playerADeck.teamId === teamId || g.playerBDeck.teamId === teamId);
  }
  if (deckCode) {
    games = games.filter(g => g.playerADeck.deckCode === deckCode || g.playerBDeck.deckCode === deckCode);
  }
  if (gameVersion) {
    games = games.filter(g => g.gameVersion === gameVersion);
  }

  const gameDetails = await Promise.all(
    games
      .map(async (game) => {
        const gameDetail = await fillStorageGameDetail(game);
        if ((teamId && game.playerADeck.teamId === teamId)
          || (deckCode && game.playerADeck.deckCode === deckCode)) {
          return gameDetail;
        }
        if ((teamId && game.playerBDeck.teamId === teamId)
          || (deckCode && game.playerBDeck.deckCode === deckCode)) {
          return getMirroredGameDetail(gameDetail);
        }
        return gameDetail;
      }),
  );

  setHeaders(event, {
    "X-Pagination-Total": gameDetails.length,
    "X-Pagination-Limit": limit,
    "X-Pagination-Offset": offset,
  });
  return gameDetails.slice(offset, offset + limit);
});
