import type { Player } from "../output-data";

export interface ApiPlayerData {
  player: Player;
}

export interface ApiPlayerStatsValue {
  playerId: string;
  uniqueName: string;
  aliases?: string[];
  matchTotal: number;
  matchWin: number;
  gameTotal: number;
  gameWin: number;
}

export interface ApiPlayerStatsMapData {
  playerStatsMap: Record<string, ApiPlayerStatsValue>;
}
