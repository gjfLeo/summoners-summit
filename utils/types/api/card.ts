export interface ApiActionStatsValue {
  game: number;
  pick: number;
  winGame: number;
  winPick: number;
}

export interface ApiActionStatsMapData {
  actionStatsMap: Record<string, ApiActionStatsValue>;
  totalGame: number;
}

export interface ApiCharacterStatsValue {
  pick: number;
  winPick: number;
}

export interface ApiCharacterStatsMapData {
  characterStatsMap: Record<string, ApiCharacterStatsValue>;
  totalGame: number;
}
