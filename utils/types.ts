import type { ALL_ACTION_CARDS, ALL_CHARACTER_CARDS, ALL_GAME_ELEMENTS } from "~/data";

export type Element = typeof ALL_GAME_ELEMENTS[number];
export type CharacterCard = typeof ALL_CHARACTER_CARDS[number];
export type ActionCard = typeof ALL_ACTION_CARDS[number];

export interface Tournament {
  id: string;
  name: string;
  gameVersion: string;
  tag?: string;
  image?: string;
  stages: TournamentStage[];
}

export interface TournamentStage {
  name: string;
  rules?: TournamentRule[];
  parts: TournamentStagePart[];
}

export interface TournamentStagePart {
  name: string;
  date: string;
  matches: TournamentMatch[];
}

export interface TournamentMatch {
  playerA: string;
  playerB: string;
  winner: "A" | "B";
  video?: string;
  games: TournamentMatchGame[];
}

export interface TournamentMatchGame {
  id: string;
  playerACharacters: Deck["characterCards"];
  playerBCharacters: Deck["characterCards"];
  playerADeckId?: string;
  playerBDeckId?: string;
  starter: "A" | "B";
  winner: "A" | "B";
  turns?: number;
}

export interface Game extends TournamentMatchGame {
  tournamentId: string;
  tournamentName: string;
  stageName: string;
  partName: string;
  matchName: string;
  gameName: string;

  gameVersion: string;
  date: string;

  playerA: string;
  playerB: string;
}

export interface Deck {
  id: string;
  characterCards: [CharacterCard, CharacterCard, CharacterCard];
  actionCards: Partial<Record<ActionCard, number>>;
}

export type TournamentRule = "征服" | "决斗" | "BO3" | "BO5" | [string, string];
