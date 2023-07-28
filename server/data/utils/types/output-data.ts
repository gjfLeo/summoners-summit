import type { ActionCard, CharacterCard } from "./card";

export interface Deck {
  id: string;
  characterCards: [CharacterCard, CharacterCard, CharacterCard];
  actionCards: Partial<Record<ActionCard, number>>;
}
