export function saveRanks(ranks: Ranks) {
  writeData(`ranks/${ranks.id}`, ranks);
}
