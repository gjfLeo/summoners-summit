import { getPlayer } from "./player";
import type { GameVersionId, Ranks } from "~/types";

export function getRanks(id: string) {
  return readData<Ranks>(`ranks/${id}`);
}
export function getRanksList() {
  return readDataList<Ranks>("ranks");
}

export function saveRanks(ranks: Ranks) {
  writeData(`ranks/${ranks.id}`, ranks);
}

export function getPlayerRank(options: { playerId: string; gameVersion?: GameVersionId }) {
  const { playerId, gameVersion } = options;
  const player = getPlayer(playerId);
  if (!player) {
    throw new Error(errorCodes.PLAYER_NOT_FOUND);
  }

  const ranks = gameVersion ? getRanks(gameVersion) : getRanksList().at(-1);
  if (!ranks) return undefined;

  const rank = ranks?.ranks.find(rank => player.uids.includes(rank.uid));
  return rank;
}
