import type { Game, Match } from "../output-data";

export interface ApiMatchData {
  match: Match;
}

export interface ApiMatchListData {
  matchList: Match[];
}

export interface ApiGameListData {
  gameList: Game[];
}
