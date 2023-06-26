import md5 from "crypto-js/md5";
import { characterCardSorter } from "../character-cards";
import { actionCardSorter } from "../action-cards";
import type { ActionCard, Deck } from "~/utils/types";

export const decks: Record<string, Deck> = {};

export function registerDeck(characters: Deck["characterCards"], actions: Deck["actionCards"]) {
  const characterCards = [...characters].sort(characterCardSorter) as Deck["characterCards"];
  const actionCards = Object.fromEntries(
    ([...Object.entries(actions)] as [ActionCard, number][])
      .sort((a, b) => actionCardSorter(a[0], b[0])),
  ) as Deck["actionCards"];
  const id = md5(JSON.stringify({ characterCards, actionCards })).toString().slice(8, 24);
  decks[id] = { id, characterCards, actionCards };
  return id;
}

export function defineActions(actions: Deck["actionCards"]) {
  return actions;
}
