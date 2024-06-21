import { readData, readDataList, writeData } from "~/server/utils";
import type { Ranks } from "~/types";

export function getRanks(id: string) {
  return readData<Ranks>(`ranks/${id}`);
}
export function getRanksList() {
  return readDataList<Ranks>("ranks");
}

export function saveRanks(ranks: Ranks) {
  writeData(`ranks/${ranks.id}`, ranks);
}
