import type { Deck } from "../types";

export { encodeDeckCode, decodeDeckCode } from "./share-code";

export function countActionCards(actionCards: Deck["actionCards"]) {
  return Object.values(actionCards).reduce<number>((totalCount, count) => totalCount + (count ?? 0), 0);
}
