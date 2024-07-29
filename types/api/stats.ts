import type { CardId } from "../data";

export interface CharacterCardStats {
  cardId: CardId;
  numGames: number;
  numGamesWin: number;
  numMatches: number;
  numBanned: number;
}

export interface ActionCardStats {
  cardId: CardId;
  numGameDecks: number;
  numGameDecksWin: number;
  numUsages: number;
  numUsagesWin: number;
}
