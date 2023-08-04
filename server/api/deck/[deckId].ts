import { deckById } from "../../data";
import type { Deck, R } from "~/utils/types";

interface DeckData {
  deck?: Deck;
}

export default defineEventHandler<R & DeckData>((event) => {
  const deckId = event.context.params!.deckId;

  const deck = deckById[deckId];
  if (!deck) {
    return { statusCode: 204, message: "牌组不存在" };
  }

  return { statusCode: 200, deck };
});
