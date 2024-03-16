import gdb from "@genshin-db/tcg";
import type { Brand } from "../types/utility-types";

interface ActionCardInfo {
  readonly id: number;
  readonly name: string;
  readonly nameEn: string;
  readonly shareId: number;
  readonly type: "Equipment" | "Support" | "Event";
}

function getCardType(cardType: string): ActionCardInfo["type"] {
  switch (cardType) {
    case "GCG_CARD_MODIFY":
      return "Equipment";
    case "GCG_CARD_ASSIST":
      return "Support";
    case "GCG_CARD_EVENT":
      return "Event";
    default:
      throw new Error(`Invalid cardType: ${cardType}`);
  }
}

function defineActionCardInfo(info: ActionCardInfo) {
  return info;
}

export type ActionCard = Brand<string, "ActionCard">;

const actionCards = gdb.tcgactioncards("names", { matchCategories: true })
  .flatMap((nameEn) => {
    const info = gdb.tcgactioncards(nameEn, { resultLanguage: gdb.Language.ChineseSimplified });
    // console.log(nameEn, info);
    if (!info) return [];
    if (!info.storytitle) return [];
    const { id, name, shareid: shareId, cardtype } = info;
    const type = getCardType(cardtype);
    return [defineActionCardInfo({ id, name, nameEn, shareId, type })];
  })
  .sort((a, b) => a.id - b.id);
export const ALL_ACTION_CARDS_INFO: Record<ActionCard, ActionCardInfo> = Object.fromEntries(actionCards.map(card => [card.name, card]));
export const ALL_ACTION_CARDS = Object.keys(ALL_ACTION_CARDS_INFO) as ActionCard[];

export const actionCardOrder = Object.fromEntries(ALL_ACTION_CARDS.map((card, i) => [card, i])) as Record<ActionCard, number>;
export const actionCardSorter = (a: ActionCard, b: ActionCard) => actionCardOrder[a] - actionCardOrder[b];
