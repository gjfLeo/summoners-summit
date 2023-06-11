// import { pyroDecks } from "../../../data/decks";
// import { hashDeck } from "../../../utils/deck";

import { allDecks } from "../../data/decks";

export default defineEventHandler(() => {
  return allDecks.map(deck => deck.id);
});
