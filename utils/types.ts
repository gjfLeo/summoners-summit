import type { ALL_ACTION_CARDS, ALL_CHARACTER_CARDS, ALL_ELEMENTS } from "../data/shared/utils/card";

export type GElement = typeof ALL_ELEMENTS[number];
export type CharacterCard = typeof ALL_CHARACTER_CARDS[number];
export type ActionCard = typeof ALL_ACTION_CARDS[number];

export interface Tournament {
  name: string;
  stages: TournamentStage[];
}

export interface TournamentStage {
  name: string;
  date: string;
  rules: string[];
  matches: TournamentMatch[];
}

export interface TournamentMatch {
  name?: string;
  playerA: string;
  playerB: string;
  games: TournamentMatchGame[];
  winner: "A" | "B";
}

export interface TournamentMatchGame {
  deckA: string;
  deckB: string;
  startWith: "A" | "B";
  winner: "A" | "B";
  turns?: number;
  video?: string;
}

export interface Deck {
  id: string;
  characterCards: Partial<Record<CharacterCard, 1 | 2 | 3>>;
  actionCards: Partial<Record<ActionCard, 1 | 2>>;
}

export interface Game extends TournamentMatchGame {
  id: string;
  tournamentName: string;
  gameName: string;
  date: string;
  rules: string[];
  playerA: string;
  playerB: string;
}
