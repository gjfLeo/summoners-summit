import type { ApiDeckData, R } from "~/utils/types";
import { deckById } from "~/server/data";

export default defineEventHandler<R & ApiDeckData>((event) => {
  const deckId = event.context.params!.deckId;

  const deck = deckById[deckId];
  if (!deck) {
    throw createError({ statusCode: 404, message: "数据不存在" });
  }

  return { statusCode: 200, deck };
});
