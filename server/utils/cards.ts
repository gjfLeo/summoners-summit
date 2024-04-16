import { z } from "zod";
import { ZActionCardInfo, ZCardId, ZCharacterCardInfo } from "~/types/data";

export function getCharacterCards() {
  return z.record(ZCardId, ZCharacterCardInfo).parse(readData("misc/character-cards"));
}
export function getActionCards() {
  return z.record(ZCardId, ZActionCardInfo).parse(readData("misc/action-cards"));
}
