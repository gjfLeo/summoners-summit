import { deckById, gameById } from "../../data";
import type { Deck, Game, R } from "~/utils/types";

type GameInfo = Pick<Game, "id" | "gameVersion" | "playerACharacters" | "playerADeckId" | "playerBCharacters" | "playerBDeckId" | "winner" | "starter">;

interface GameDeckData {
  gameList: GameInfo[];
  decks: Record<string, Deck>;
}

export default defineCachedEventHandler<R & GameDeckData> ((event) => {
  const { gameVersion } = getQuery(event);
  let gameListRaw = Object.values(gameById);
  if (gameVersion) {
    gameListRaw = gameListRaw.filter(game => game.gameVersion === gameVersion);
  }
  const gameList = gameListRaw.map<GameInfo>((game) => {
    const { id, gameVersion, playerACharacters, playerADeckId, playerBCharacters, playerBDeckId, winner, starter } = game;
    return { id, gameVersion, playerACharacters, playerADeckId, playerBCharacters, playerBDeckId, winner, starter };
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
  return { statusCode: 200, gameList, decks };
});
