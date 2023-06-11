import { allDecks } from "../../data/decks";

export default defineEventHandler((event) => {
  return allDecks.find(deck => deck.id === event.context.params?.id);
});
