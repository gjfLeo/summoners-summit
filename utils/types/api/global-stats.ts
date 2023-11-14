export interface ApiGlobalStatsValue {
  total: number;
  totalWithDeck: number;
  totalWithStarter: number;
  starterWin: number;
}

export interface ApiGlobalStatsMapData {
  stats: Record<string, ApiGlobalStatsValue>;
}
