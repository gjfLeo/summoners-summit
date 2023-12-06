import { gameById } from "~/server/data";
import type { ApiGameListData, R } from "~/utils/types";
import { getGameMirror } from "~/utils/games";

const mirrorOverrideMap: Record<string, boolean> = {
  1: true,
  0: false,
};

export default defineEventHandler<R & ApiGameListData>((event) => {
  const {
    gameVersion,
    matchId,
    playerId,
    deckId,
    opponentCharacters,
    characters,
    mirror: mirrorOverride,
    limit: limitOverride,
    offset: offsetOverride,
  } = getQuery(event);

  let list = Object.values(gameById);
  if (gameVersion) {
    list = list.filter(game => game.gameVersion === gameVersion);
  }
  if (matchId) {
    list = list.filter(game => game.matchId === matchId);
  }
  const mirror = mirrorOverrideMap[mirrorOverride as string] ?? Boolean(playerId || deckId || characters);
  if (mirror) {
    list = list.flatMap(game => [game, getGameMirror(game)]);
  }
  if (playerId) {
    list = list.filter(game => game.playerAId === playerId);
  }
  if (deckId) {
    list = list.filter(game => game.playerADeckId === deckId);
  }
  if (characters) {
    for (const character of (characters as string).split(",")) {
      list = list.filter(game => (game.playerACharacters as string[]).includes(character));
    }
  }
  if (opponentCharacters) {
    for (const character of (opponentCharacters as string).split(",")) {
      list = list.filter(game => (game.playerBCharacters as string[]).includes(character));
    }
  }

  const limit = limitOverride ? Number(limitOverride) : 50;
  const offset = offsetOverride ? Number(offsetOverride) : 0;
  if (limit) {
    list = list.slice(offset, offset + limit);
  }
  return { statusCode: 200, gameList: list };
});
