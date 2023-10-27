import { ALL_CHARACTER_CARDS_INFO, characterCardSorter } from "~/utils/cards";
import { type CharacterCard } from "~/utils/types";

const characterIds = Object.fromEntries(
  Object.entries(ALL_CHARACTER_CARDS_INFO)
    .map(([card, { nameEn }]) => {
      const characterId = nameEn.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("");
      return [card, characterId];
    }),
) as Record<CharacterCard, string>;

const characterById = Object.fromEntries(
  Object.entries(characterIds)
    .map(([character, id]) => ([id, character as CharacterCard])),
);

export type UseTeamSource = string | CharacterCard[] | { team: string | CharacterCard[] };

export function getTeamId(team: CharacterCard[]) {
  return [...team].sort(characterCardSorter).map(character => characterIds[character]).join("-");
}

function sourceToTeam(source: UseTeamSource): CharacterCard[] {
  if (typeof source === "string") {
    return source.split("-").map(id => characterById[id]) as CharacterCard[];
  }
  else if (Array.isArray(source)) {
    return source;
  }
  return sourceToTeam(source.team);
}

export default function useTeam(source: MaybeRef<UseTeamSource>) {
  const team = computed(() => sourceToTeam(unref(source)));
  const teamId = computed(() => getTeamId(team.value));
  const teamDisplayName = computed(() => team.value.join(" & "));
  return { team, teamId, teamDisplayName };
}
