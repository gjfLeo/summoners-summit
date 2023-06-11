/* eslint-disable no-console */
import * as crypto from "node:crypto";
import type { ActionCard, CharacterCard, Deck } from "../../utils/types";
import { actionCardSorter } from "../../utils/card";

export function hashDeck(deck: Pick<Deck, "characterCards" | "actionCards">) {
  const { characterCards, actionCards } = deck;
  const serialized = JSON.stringify({ characterCards, actionCards });
  return crypto.createHash("md5").update(serialized).digest("hex").slice(8, 24);
}

interface BuildDeckParam {
  team: [CharacterCard, CharacterCard, CharacterCard];
  actions: Partial<Record<ActionCard, 1 | 2>>;
}

const deckIds = new Set<string>();

export function buildDeck({ team, actions }: BuildDeckParam): Deck {
  const actionCards: Deck["actionCards"] = {};
  const actionCardNames = (Object.keys(actions) as ActionCard[]).sort(actionCardSorter);
  actionCardNames.forEach((card) => {
    actionCards[card] = actions[card];
  });
  const actionCardCounts = Object.values(actionCards).reduce((a, b) => a + b, 0);
  if (actionCardCounts !== 30) {
    console.warn(`卡组行动牌张数为${actionCardCounts}`);
    console.log({ team, actions });
  }
  if (JSON.stringify(actionCards) !== JSON.stringify(actions)) {
    console.warn("卡组行动牌顺序不对");
    console.log({ team, actions });
    console.log(`正确的顺序为：${actionCardNames.join(",")}`);
  }
  const deck: Omit<Deck, "id"> = {
    characterCards: {
      [team[0]]: 1,
      [team[1]]: 2,
      [team[2]]: 3,
    },
    actionCards,
  };
  const hash = hashDeck(deck);
  if (deckIds.has(hash)) {
    console.warn("卡组重复");
    console.log({ team, actions });
  }
  else {
    deckIds.add(hash);
  }
  return {
    id: hash,
    ...deck,
  };
}
