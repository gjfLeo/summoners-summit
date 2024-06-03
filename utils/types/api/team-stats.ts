import type { ActionCard, TeamId } from "../card";
import type { GameVersion } from "../game-version";
import type { Game } from "../output-data";

export interface ApiTeamStatsMapValue {
  total: number;
  win: number;
  starterTotal: number;
  starterWin: number;
  followerTotal: number;
  followerWin: number;
  banned: number;
  vsSame: number;
}

export interface ApiTeamStatsMapData {
  teamStatsMap: Record<TeamId, ApiTeamStatsMapValue>;
}

export interface ApiTeamStatsBasicStats {
  total: number;
  win: number;
  totalWithDeck: number;
  winWithDeck: number;
}

export interface ApiTeamStatsCardUsageValue {
  totalCount: number;
  winCount: number;
  totalAverage: number;
  winAverage: number;
  deckPick: number;
}

export interface ApiTeamStatsVsTeamStatsValue {
  total: number;
  win: number;
  starterTotal: number;
  starterWin: number;
  followerTotal: number;
  followerWin: number;
}

export interface ApiTeamStatsData {
  basicStats: ApiTeamStatsBasicStats;
  cardUsageMap: Record<ActionCard, ApiTeamStatsCardUsageValue>;
  typicalDeckId?: string;
  vsTeamStatsMap: Record<TeamId, ApiTeamStatsVsTeamStatsValue>;
}

export interface ApiTeamGamesData {
  gameList: Game[];
  total: number;
}

export interface ApiTeamActionCardUsageData {
  actionCardUsageMap: Record<ActionCard, ApiTeamActionCardUsageValue>;
  totalNumDecks: number;
  totalNumDecksWin: number;
}
export interface ApiTeamActionCardUsageValue {
  numDecksWith1: number;
  numDecksWith2: number;
  numDecksWith1Win: number;
  numDecksWith2Win: number;
}

export interface ApiTeamStatsByVersionData {
  statsByVersion: ApiTeamStatsByVersionItem[];
}
export interface ApiTeamStatsByVersionItem {
  gameVersion: GameVersion;
  ban: number;
  pick: number;
  win: number;
}

export interface ApiTeamRelationsData {
  relations: ApiTeamRelationItem[];
}
export interface ApiTeamRelationItem {
  teamA: TeamId;
  teamB: TeamId;
  teamAWin: number;
  teamBWin: number;
}

export interface ApiTeamMatchupsData {
  teams: TeamId[];
  matchups: ApiTeamMatchupItem[];
}
export interface ApiTeamMatchupItem {
  teamId: TeamId;
  [teamId: TeamId]: {
    win: number;
    total: number;
  };
  overall: {
    win: number;
    total: number;
  };
}
