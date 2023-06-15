import type { ActionCard, CharacterCard, Deck } from "./types";

export {
  actionCardFilter,
  actionCardSorter,
  characterCardFilter,
  characterCardSorter,
  getTeamId,
  teamSorter,
} from "../data/shared/utils";

export function getCharacterCardsInDeck(deck: Deck): CharacterCard[] {
  return (Object.keys(deck.characterCards) as CharacterCard[])
    .sort((card1, card2) => deck.characterCards[card1]! - deck.characterCards[card2]!);
}

export function getActionCardsInDeck(deck: Deck): ActionCard[] {
  return Object.entries(deck!.actionCards)
    .flatMap(([card, count]) =>
      Array.from({ length: count }, () => (card as ActionCard)),
    );
}
