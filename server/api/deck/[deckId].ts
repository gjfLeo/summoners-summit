import { deckById } from "../../data";
import type { Deck } from "../../data/utils/types";
import type { R } from "../../utils/types";

export default defineEventHandler<R & { deck?: Deck }>((event) => {
  const deckId = event.context.params!.deckId;

  const deck = deckById[deckId];
  if (!deck) {
    return { code: 204, message: "牌组不存在" };
  }

  return { code: 200, deck };
});
