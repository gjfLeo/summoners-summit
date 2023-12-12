import type { Deck, DeckId, PlayerId } from "../output-data";

export interface ApiDeckData {
  deck: Deck;
}

export interface ApiDeckSimilarData {
  similarMap: Record<DeckId, ApiDeckSimilarItem>;
}

export interface ApiDeckSimilarItem {
  deckId: DeckId;
  diffs: Deck["actionCards"];
  diffCount: number;
  pick: number;
  win: number;
  players: { playerId: PlayerId; uniqueName: string }[];
}
