export interface ActionCardUsages {
  cardId: CardId;
  numGameDecks: number;
  numGameDecksWin: number;
  numUsages: number;
  numUsagesWin: number;
}

export interface CharacterCardUsages {
  cardId: CardId;
  numGames: number;
  numGamesWin: number;
  numMatches: number;
  numBanned: number;
}

export interface TeamDeckStats {
  deckCode: DeckCode;
  numGames: number;
  numGamesWin: number;
  distanceToAverage: number;
}

export interface TeamGameVersionStats {
  gameVersion: GameVersionId;
  numGames: number;
  numGamesWin: number;
  numGamesStarter: number;
  numGamesStarterWin: number;
  numBanned: number;
}
