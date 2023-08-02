import { deckById } from "../../data";
import type { Deck, R } from "~/utils/types";

export default defineEventHandler<R & { decks: Record<string, Deck> }>((event) => {
  const deckIds = event.context.params?.deckIds ?? "";
  const decks = Object.fromEntries(deckIds.split(",").map((deckId) => {
    const deck = deckById[deckId];
    return [deckId, deck];
  }));
  return { code: 200, decks };
});
