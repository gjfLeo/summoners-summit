import { deckById } from "../../data";
import type { Deck, R } from "~/utils/types";

interface DeckListData {
  deckList: Deck[];
}

export default defineEventHandler<R & DeckListData>(() => {
  const deckList = Object.values(deckById);
  return { statusCode: 200, deckList };
});
