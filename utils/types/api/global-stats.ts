import type { GameVersion } from "../game-version";

export interface ApiGlobalStatsValue {
  gameVersion: GameVersion;
  total: number;
  totalWithDeck: number;
  totalWithStarter: number;
  starterWin: number;
}

export interface ApiGlobalStatsListByVersionData {
  statsList: ApiGlobalStatsValue[];
}
