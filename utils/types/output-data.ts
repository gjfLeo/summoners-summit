import type { ActionCard, CharacterCard } from "./card";

export interface Deck {
  id: string;
  characterCards: [CharacterCard, CharacterCard, CharacterCard];
  actionCards: Partial<Record<ActionCard, number>>;
}

export interface Tournament {
  id: string;
  name: string;
  type?: "全民积分赛" | "主播资格赛" | "积分赛试办赛";
  gameVersion: string;
  image?: string;
  stages: TournamentStage[];
}

export interface TournamentStage {
  name: string;
  rules?: TournamentRules;
  parts: TournamentPart[];
}

export type TournamentRules = ("BO3" | "BO5" | "征服" | "决斗" | [string, string])[];

export interface TournamentPart {
  name?: string;
  date: string;
  matchIds: string[];
}

export interface Match {
  id: string;
  name: string;
  date: string;
  playerA: string | number;
  playerB: string | number;
  video?: string;
  winner: "A" | "B";
  gameIds: string[];
}

export interface Game {
  id: string;
  gameVersion: string;
  date: string;
  tournamentName: string;
  gameName: string;
  video?: string;

  playerA: string | number;
  playerB: string | number;
  playerACharacters: Deck["characterCards"];
  playerADeckId?: string;
  playerBCharacters: Deck["characterCards"];
  playerBDeckId?: string;

  starter: "A" | "B";
  winner: "A" | "B";
  turns?: number;
}

export interface R {
  code: number;
  message?: string;
}
