import { actionCardSorter, hashDeck } from "../../shared/utils";
import type { ActionCard, CharacterCard, Deck } from "~/utils/types";

export const deckIdSet = new Set<string>();
export const deckList = new Array<Deck>();

interface RegisterDeckParam {
  team: [CharacterCard, CharacterCard, CharacterCard];
  actions: Partial<Record<ActionCard, 1 | 2>>;
}

export function registerDeck({ team, actions }: RegisterDeckParam): string {
  const actionCards: Deck["actionCards"] = {};
  const actionCardNames = (Object.keys(actions) as ActionCard[]).sort(actionCardSorter);
  actionCardNames.forEach((card) => {
    actionCards[card] = actions[card];
  });
  const actionCardCounts = Object.values(actionCards).reduce((a, b) => a + b, 0);
  if (actionCardCounts !== 30) {
    console.warn(`卡组行动牌张数为${actionCardCounts}`);
    console.warn({ team, actions });
  }
  if (JSON.stringify(actionCards) !== JSON.stringify(actions)) {
    console.warn("卡组行动牌顺序不对");
    console.warn({ team, actions });
    console.warn(`正确的顺序为：${actionCardNames.join(",")}`);
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
  if (deckIdSet.has(hash)) {
    console.warn("卡组重复");
    console.warn({ team, actions });
  }
  else {
    deckIdSet.add(hash);
  }
  deckList.push({
    id: hash,
    ...deck,
  });
  return hash;
}
