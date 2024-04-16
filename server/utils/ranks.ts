import type { Ranks } from "~/types/data";

export function saveRanks(ranks: Ranks) {
  writeData(`ranks/${ranks.id}`, ranks);
}
