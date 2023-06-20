import type { ALL_ACTION_CARDS, ALL_CHARACTER_CARDS, ALL_ELEMENTS } from "../data/shared/utils/card";

export type GElement = typeof ALL_ELEMENTS[number];
export type CharacterCard = typeof ALL_CHARACTER_CARDS[number];
export type ActionCard = typeof ALL_ACTION_CARDS[number];

export interface Tournament {
  id: string;
  name: string;
  gamePatch: string;
  stages: TournamentStage[];
}

export interface TournamentStage {
  name: string;
  rules?: Partial<Rules>;
  parts: TournamentStagePart[];
}

export interface TournamentStagePart {
  name: string;
  date: string;
  rules?: Partial<Rules>;
  matches: TournamentMatch[];
}

export interface TournamentMatch {
  name?: string;
  playerA: string;
  playerB: string;
  games: TournamentMatchGame[];
  winner: "A" | "B";
  video?: string;
}

export interface TournamentMatchGame {
  id: string;
  deckA: string;
  deckB: string;
  startWith: "A" | "B";
  winner: "A" | "B";
  turns?: number;
}

export interface Deck {
  id: string;
  characterCards: Partial<Record<CharacterCard, 1 | 2 | 3>>;
  actionCards: Partial<Record<ActionCard, 1 | 2>>;
}

export interface Game extends TournamentMatchGame {
  id: string;
  tournamentName: string;
  stageName: string;
  partName: string;
  matchName: string;
  gameName: string;
  date: string;
  playerA: string;
  playerB: string;
}

export interface Rules {
  deckRules: ["预组", number];
  stageRules: "单败淘汰" | "双败淘汰";
  matchRules: ["决斗", number] | ["征服", number];
}
