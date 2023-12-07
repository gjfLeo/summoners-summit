import type { Deck } from "../output-data";

export interface ApiDeckData {
  deck: Deck;
}

export interface ApiDeckSimilarData {
  similarMap: Record<string, ApiDeckSimilarItem>;
}

export interface ApiDeckSimilarItem {
  deckId: string;
  diffs: Deck["actionCards"];
  diffCount: number;
  pick: number;
  win: number;
  players: { playerId: string; uniqueName: string }[];
}
