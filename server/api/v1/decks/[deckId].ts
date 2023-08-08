import type { Deck, R } from "~/utils/types";
import { deckById } from "~/server/data";

interface DeckData {
  deck: Deck;
}

export default defineEventHandler<R & DeckData>((event) => {
  const deckId = event.context.params!.deckId;

  const deck = deckById[deckId];
  if (!deck) {
    throw createError({ statusCode: 404, message: "数据不存在" });
  }

  return { statusCode: 200, deck };
});
