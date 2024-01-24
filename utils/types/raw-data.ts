import type { PlayerAchievement } from "../achievements";
import type { GameVersion } from "../game-version";
import type { Deck, TournamentRules } from "./output-data";

export interface TournamentRawData {
  name: string;
  type?: "全民积分赛" | "主播资格赛" | "积分赛试办赛" | "外服赛事";
  gameVersion: GameVersion;
  stages: StageRawData[];
}

export interface StageRawData {
  name: string;
  rules?: TournamentRules;
  parts: PartRawData[];
  achievements?: PlayerAchievement[];
}

export interface PartRawData {
  name?: string;
  date: string;
  matches: MatchRawData[];
}

export interface MatchRawData {
  playerA: string;
  playerB: string;
  winner?: "A" | "B";
  video?: string;
  banned?: BannedRawData[];
  games: GameRawData[];
}

export interface BannedRawData {
  playerACharacters: Deck["characterCards"];
  playerAActions?: Deck["actionCards"];
  playerBCharacters: Deck["characterCards"];
  playerBActions?: Deck["actionCards"];
}

export interface GameRawData {
  playerACharacters: Deck["characterCards"];
  playerAActions?: Deck["actionCards"];
  playerBCharacters: Deck["characterCards"];
  playerBActions?: Deck["actionCards"];
  starter: "A" | "B" | "";
  winner: "A" | "B";
  turns?: number;
  video?: string;
}

export function defineTournament(tournament: TournamentRawData) {
  return tournament;
}

export function defineActions(actions: Deck["actionCards"]) {
  return actions;
}
