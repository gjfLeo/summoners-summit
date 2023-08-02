import { type CharacterCard, characterCardSorter } from "./types";

export function getTeamId(team: CharacterCard[]) {
  return [...team].sort(characterCardSorter).join("-");
}
