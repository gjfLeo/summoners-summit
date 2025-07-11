import { decodeDeck, encodeDeck, getGameList, saveGame } from "~/server/service";

export default defineEventHandler(async () => {
  const games = getGameList();
  for (const game of games) {
    let changed = false;
    for (const deck of [game.playerADeck, game.playerBDeck]) {
      const deckCode = deck.deckCode;
      if (deckCode /* && blockWords.some(word => deckCode.includes(word)) */) {
        deck.deckCode = await encodeDeck(await decodeDeck(deckCode));
        if (deck.deckCode !== deckCode) {
          changed = true;
        }
      }
    }
    if (changed) {
      saveGame(game);
    }
  }
  return responseOk();
});
