import type { ALL_ACTION_CARDS, ALL_CHARACTER_CARDS } from "../data/shared/utils/card";

export type CharacterCard = typeof ALL_CHARACTER_CARDS[number];
export type ActionCard = typeof ALL_ACTION_CARDS[number];

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
  deckA: string;
  deckB: string;
  startWith: "A" | "B" | "pending";
  winner: "A" | "B" | "pending";
  turns?: number;
  video?: string;
}

export interface Deck {
  id: string;
  characterCards: Partial<Record<CharacterCard, 1 | 2 | 3>>;
  actionCards: Partial<Record<ActionCard, 1 | 2>>;
}

export interface DeckGameRecord {
  deckId: string;
  player: string;
  opponentDeckId: string;
  opponentPlayer: string;
  startWith: boolean;
  win: boolean;
}
