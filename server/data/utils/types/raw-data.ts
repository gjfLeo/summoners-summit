import type { Deck } from "./output-data";

export interface TournamentRawData {
  name: string;
  gameVersion: string;
  stages: StageRawData[];
}

export interface StageRawData {
  name: string;
  rules?: RulesRawData;
  parts: PartRawData[];
}

export type RulesRawData = ("BO3" | "BO5" | "征服" | [string, string])[];

export interface PartRawData {
  name?: string;
  date: string;
  matches: MatchRawData[];
}

export interface MatchRawData {
  playerA: string;
  playerB: string;
  video?: string;
  games: GameRawData[];
}

export interface GameRawData {
  playerACharacters: Deck["characterCards"];
  playerAActions?: Deck["actionCards"];
  playerBCharacters: Deck["characterCards"];
  playerBActions?: Deck["actionCards"];
  starter: "A" | "B";
  winner: "A" | "B";
  turns?: number;
}

export function defineTournament(tournament: TournamentRawData) {
  return tournament;
}

export function defineActions(actions: Deck["actionCards"]) {
  return actions;
}
