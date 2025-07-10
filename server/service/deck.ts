import type { DeckCode, GameVersionId } from "~/types";
import { getStorageGameList } from "./game";

export async function getDeckCodes({ gameVersion }: { gameVersion: GameVersionId }) {
  const games = (await getStorageGameList())
    .filter(g => g.gameVersion === gameVersion);
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
