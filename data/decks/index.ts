import { deckList } from "./deck-store";

export { deckList };

export function findDeck(id: string) {
  return deckList.find(deck => deck.id === id);
}

export function findDecksByTeam(teamId: string) {
  return deckList.filter(deck => getTeamId(deck) === teamId);
}
