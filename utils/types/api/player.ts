import type { Game, GameId, Match, MatchId, Player, PlayerId } from "../output-data";
import type { GameVersion } from "../game-version";

export interface ApiPlayerData {
  player: Player;
}

export interface ApiPlayerStatsValue {
  playerId: PlayerId;
  uniqueName: string;
  aliases?: string[];
  matchTotal: number;
  matchWin: number;
  gameTotal: number;
  gameWin: number;
  score?: number;
  rank?: number;
}

export interface ApiPlayerStatsMapData {
  playerStatsMap: Record<PlayerId, ApiPlayerStatsValue>;
}

export interface ApiPlayerStatsByVersionData {
  statsByVersion: ApiPlayerStatsByVersionValue[];
}
export interface ApiPlayerStatsByVersionValue {
  gameVersion: GameVersion;
  matchTotal: number;
  matchWin: number;
  gameTotal: number;
  gameWin: number;
}

export interface ApiPlayerMatchesData {
  matches: Record<MatchId, Match>;
  games: Record<GameId, Game>;
}
