import { decodeDeck, encodeDeck } from "./card";
import { getStorageGameList, writeGameV2 } from "./game";
import { getStorageMatchList } from "./match";
import { getStorageTournamentList } from "./tournament";

export async function getDeckCodes({ gameVersion }: { gameVersion: GameVersionId }) {
  const tournaments = await getStorageTournamentList();
  const matchIds = tournaments
    .filter(t => t.gameVersion === gameVersion)
    .flatMap(t => t.stages)
    .flatMap(s => s.parts)
    .flatMap(p => p.matchIds);

  const matches = await getStorageMatchList(matchIds);
  const gameIds = matches.flatMap(m => m.gameIds);

  const games = await getStorageGameList(gameIds);
  const decks = games.flatMap(g => [g.playerADeck, g.playerBDeck])
    .filter(d => d.deckCode);

  const deckRecord: Record<DeckCode, number> = {};
  decks.forEach((d) => {
    deckRecord[d.deckCode!] = (deckRecord[d.deckCode!] ?? 0) + 1;
  });

  return Object.entries(deckRecord)
    .sort((a, b) => b[1] - a[1])
    .map(([code]) => code);
}

export async function updateDeckCodes() {
  const games = await getStorageGameList();
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
      writeGameV2(game);
    }
  }
}
