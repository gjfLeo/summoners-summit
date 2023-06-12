import md5 from "crypto-js/md5";
import type { Deck } from "~/utils/types";

export function hashDeck(deck: Pick<Deck, "characterCards" | "actionCards">) {
  const { characterCards, actionCards } = deck;
  const serialized = JSON.stringify({ characterCards, actionCards });
  return md5(serialized).toString().slice(8, 24);
}
