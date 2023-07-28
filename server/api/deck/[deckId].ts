import { deckById } from "../../data";

export default defineEventHandler((event) => {
  const deckId = event.context.params?.deckId as string;
  return deckById[deckId];
});
