import type { CharacterCard, Deck } from "~/utils/types";

export function getTeamId(deck: Pick<Deck, "characterCards">) {
  const characterCards = Object.keys(deck.characterCards) as CharacterCard[];
  return characterCards.sort(characterCardSorter).join("-");
}

export function teamSorter(teamId1: string, teamId2: string) {
  const team1 = teamId1.split("-") as CharacterCard[];
  const team2 = teamId2.split("-") as CharacterCard[];
  return characterCardSorter(team1[0], team2[0])
      || characterCardSorter(team1[1], team2[1])
      || characterCardSorter(team1[2], team2[2]);
}
