import type { PlayerAchievement } from "../achievements";
import type { GameVersion } from "../game-version";
import type { Brand } from "./utility-types";
import type { ActionCard, CharacterCard } from "./card";

export type DeckId = Brand<string, "DeckId">;
export type TournamentId = Brand<string, "TournamentId">;
export type MatchId = Brand<string, "MatchId">;
export type GameId = Brand<string, "GameId">;
export type PlayerId = Brand<string, "PlayerId">;

export interface Deck {
  id: DeckId;
  characterCards: CharacterCard[];
  actionCards: Record<ActionCard, number>;
  gameVersion: GameVersion;
}

export interface Tournament {
  id: TournamentId;
  name: string;
  type?: "全民积分赛" | "主播资格赛" | "积分赛试办赛" | "外服赛事";
  gameVersion: GameVersion;
  stages: TournamentStage[];
  dateRange: [string, string | undefined];
  championId: PlayerId | undefined;
  championNickname: string | undefined;
}

export interface TournamentStage {
  name: string;
  rules?: TournamentRules;
  parts: TournamentPart[];
}

export interface TournamentRules {
  numDecks: number;
  numDecksBanned?: number;
  numCharactersBanned?: number;
  numCharactersRequired?: number;
  mode: "Duel" | "Conquest";
  numGames: number;
  extra?: [string, string][];
}

export interface TournamentPart {
  name?: string;
  date: string;
  matchIds: MatchId[];
}

export interface Match {
  id: MatchId;
  tournamentId: TournamentId;
  tournamentName: string;
  partName: string;
  gameVersion: GameVersion;
  name: string;
  date: string;
  video?: string;

  playerAId?: PlayerId;
  playerANickname: string;
  playerBId?: PlayerId;
  playerBNickname: string;
  winner: "A" | "B";
  banned?: BannedData[];
  gameIds: GameId[];
}

export interface BannedData {
  playerACharacters: Deck["characterCards"];
  playerADeckId?: DeckId;
  playerBCharacters: Deck["characterCards"];
  playerBDeckId?: DeckId;
}

export interface Game {
  id: GameId;
  tournamentId: TournamentId;
  matchId: MatchId;
  gameVersion: GameVersion;
  date: string;
  tournamentName: string;
  gameName: string;
  matchVideo?: string;
  gameVideo?: string;

  playerAId?: PlayerId;
  playerANickname: string;
  playerBId?: PlayerId;
  playerBNickname: string;
  playerACharacters: Deck["characterCards"];
  playerADeckId?: DeckId;
  playerBCharacters: Deck["characterCards"];
  playerBDeckId?: DeckId;

  starter: "A" | "B" | "";
  winner: "A" | "B" | "D";
  turns?: number;
}

export interface Player {
  id: PlayerId;
  uniqueName: string;
  aliases?: string[];
  achievements?: PlayerAchievement[];
  awards?: string[];
  score?: number;
  rank?: number;
}
