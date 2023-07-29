import { deckById } from "../../data";

export default defineEventHandler((event) => {
  const deckId = event.context.params!.deckId;

  const deck = deckById[deckId];
  if (!deck) {
    return { code: 204, message: "牌组不存在" };
  }

  return { code: 200, deck };
});
