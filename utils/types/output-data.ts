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
  stages: TournamentStage[];
}

export interface TournamentStage {
  name: string;
  rules?: TournamentRules;
  parts: TournamentPart[];
}

export type TournamentRules = ("BO3" | "BO5" | "BO7" | "征服" | "决斗" | [string, string])[];

export interface TournamentPart {
  name?: string;
  date: string;
  matchIds: string[];
}

export interface Match {
  id: string;
  tournamentId: string;
  tournamentName: string;
  partName: string;
  gameVersion: string;
  name: string;
  date: string;
  video?: string;

  playerAId?: string;
  playerANickname: string;
  playerBId?: string;
  playerBNickname: string;
  winner: "A" | "B";
  banned?: BannedData[];
  gameIds: string[];
}

export interface BannedData {
  playerACharacters: Deck["characterCards"];
  playerADeckId?: string;
  playerBCharacters: Deck["characterCards"];
  playerBDeckId?: string;
}

export interface Game {
  id: string;
  tournamentId: string;
  matchId: string;
  gameVersion: string;
  date: string;
  tournamentName: string;
  gameName: string;
  video?: string;

  playerAId?: string;
  playerANickname: string;
  playerBId?: string;
  playerBNickname: string;
  playerACharacters: Deck["characterCards"];
  playerADeckId?: string;
  playerBCharacters: Deck["characterCards"];
  playerBDeckId?: string;

  starter: "A" | "B" | "";
  winner: "A" | "B";
  turns?: number;
}

export interface Player {
  id: string;
  uniqueName: string;
  aliases?: string[];
}

export interface R {
  statusCode: number;
  message?: string;
}
