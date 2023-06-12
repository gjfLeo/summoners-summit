import md5 from "crypto-js/md5";
import { characterCardSorter } from "./card";
import type { CharacterCard, Deck } from "~/utils/types";

export function hashDeck(deck: Pick<Deck, "characterCards" | "actionCards">) {
  const { characterCards, actionCards } = deck;
  const serialized = JSON.stringify({ characterCards, actionCards });
  return md5(serialized).toString().slice(8, 24);
}

export function getTeamId(deck: Pick<Deck, "characterCards">) {
  const characterCards = Object.keys(deck.characterCards) as CharacterCard[];
  return characterCards.sort(characterCardSorter).join("/");
}

export * from "./card";
