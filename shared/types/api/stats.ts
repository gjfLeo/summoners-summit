import type { CardId } from "../data";

export interface CharacterCardStats {
  cardId: CardId;
  numGames: number;
  numGamesWin: number;
  numMatches: number;
  numBanned: number;
}

export interface TeamStats {
  teamId: DeckTeamId;
  numGames: number;
  numGamesWin: number;
  numGamesStarter: number;
  numGamesStarterWin: number;
  numGamesFollower: number;
  numGamesFollowerWin: number;
  numGamesMirror: number;
  numBanned: number;
}
