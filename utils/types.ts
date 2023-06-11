import type { ALL_ACTION_CARDS, ALL_CHARACTER_CARDS } from "./card";

export interface Tournament {
  name: string;
  sections: Section[];
}

export interface Section {
  name: string;
  date: string;
  matches: Match[];
}

export interface Match {
  playerA: string;
  playerB: string;
  games: Game[];
  winner: "A" | "B" | "pending";
}

export interface Game {
  deckA: Deck;
  deckB: Deck;
  startWith: "A" | "B" | "pending";
  winner: "A" | "B" | "pending";
  turns: number | null;
  video: string | null;
}

export interface Deck {
  id: string;
  characterCards: Partial<Record<CharacterCard, 1 | 2 | 3>>;
  actionCards: Partial<Record<ActionCard, 1 | 2>>;
}

export type CharacterCard = typeof ALL_CHARACTER_CARDS[number];
export type ActionCard = typeof ALL_ACTION_CARDS[number];
