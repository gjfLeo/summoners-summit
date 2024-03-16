import type { ActionCard, CharacterCard } from "../card";

export interface ApiActionStatsValue {
  game: number;
  pick: number;
  winGame: number;
  winPick: number;
}

export interface ApiActionStatsMapData {
  actionStatsMap: Record<ActionCard, ApiActionStatsValue>;
  totalDeck: number;
}

export interface ApiCharacterStatsValue {
  pick: number;
  winPick: number;
}

export interface ApiCharacterStatsMapData {
  characterStatsMap: Record<CharacterCard, ApiCharacterStatsValue>;
  totalGame: number;
}
