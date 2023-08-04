import { deckById } from "../../data";
import type { Deck, R } from "~/utils/types";

interface DeckMapData {
  decks: Record<string, Deck>;
}

export default defineEventHandler<R & DeckMapData>((event) => {
  const deckIds = event.context.params?.deckIds ?? "";
  const decks = Object.fromEntries(deckIds.split(",").map((deckId) => {
    const deck = deckById[deckId];
    return [deckId, deck];
  }));
  return { statusCode: 200, decks };
});
