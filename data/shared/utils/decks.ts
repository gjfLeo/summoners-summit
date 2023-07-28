// import md5 from "crypto-js/md5";
import CryptoJS from "crypto-js";
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
  const id = CryptoJS.MD5(JSON.stringify({ characterCards, actionCards })).toString().slice(8, 24);
  if (!decks[id]) {
    decks[id] = { id, characterCards, actionCards };

    const actionCardCount = Object.values(actionCards).reduce((a, b) => a + b);
    if (actionCardCount !== 30) {
      console.error(`行动牌数量≠30：http://localhost:4000/deck/${id}`);
      // console.error(JSON.stringify(decks[id]));
    }
  }

  return id;
}

export function defineActions(actions: Deck["actionCards"]) {
  return actions;
}
