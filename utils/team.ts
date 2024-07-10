import type { CardId, DeckTeamId } from "~/types";

export function getTeamId(characterCards: CardId[]): DeckTeamId {
  return characterCards.toSorted().join("-");
}

export function getCharacterCardsByTeamId(teamId: DeckTeamId): CardId[] {
  return teamId.split("-") as CardId[];
}
