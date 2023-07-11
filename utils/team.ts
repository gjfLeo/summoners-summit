import type { CharacterCard } from "./types";
import { characterCardSorter } from "~/data";

export function getTeamId(team: CharacterCard[]) {
  return [...team].sort(characterCardSorter).join("-");
}
