import { deckList } from "./deck-store";

export { deckList };

export function findDeck(id: string) {
  return deckList.find(deck => deck.id === id);
}
