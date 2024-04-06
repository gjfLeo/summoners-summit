import { z } from "zod";

export function getCharacterCards() {
  return z.record(ZCardId, ZCharacterCardInfo).parse(readData("misc/character-cards"));
}
export function getActionCards() {
  return z.record(ZCardId, ZActionCardInfo).parse(readData("misc/action-cards"));
}
