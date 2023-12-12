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
}

export interface ApiPlayerStatsMapData {
  playerStatsMap: Record<PlayerId, ApiPlayerStatsValue>;
}

export interface ApiPlayerStatsByVersionData {
  statsByVersion: Record<GameVersion, ApiPlayerStatsByVersionValue>;
}
export interface ApiPlayerStatsByVersionValue {
  matchTotal: number;
  matchWin: number;
  gameTotal: number;
  gameWin: number;
}

export interface ApiPlayerMatchesData {
  matches: Record<MatchId, Match>;
  games: Record<GameId, Game>;
}
