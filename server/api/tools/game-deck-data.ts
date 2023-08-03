import { deckById, gameById } from "../../data";
import type { Deck, Game, R } from "~/utils/types";

type GameInfo = Pick<Game, "id" | "gameVersion" | "playerACharacters" | "playerADeckId" | "playerBCharacters" | "playerBDeckId">;

export default defineCachedEventHandler<R & { gameList: GameInfo[]; decks: Record<string, Deck> }> ((event) => {
  const { gameVersion } = getQuery(event);
  let gameListRaw = Object.values(gameById);
  if (gameVersion) {
    gameListRaw = gameListRaw.filter(game => game.gameVersion === gameVersion);
  }
  const gameList = gameListRaw.map<GameInfo>((game) => {
    const { id, gameVersion, playerACharacters, playerADeckId, playerBCharacters, playerBDeckId } = game;
    return { id, gameVersion, playerACharacters, playerADeckId, playerBCharacters, playerBDeckId };
  });
  const decks: Record<string, Deck> = {};
  gameList.forEach((game) => {
    if (game.playerADeckId) {
      decks[game.playerADeckId] = deckById[game.playerADeckId];
    }
    if (game.playerBDeckId) {
      decks[game.playerBDeckId] = deckById[game.playerBDeckId];
    }
  });
  return { code: 200, gameList, decks };
});
