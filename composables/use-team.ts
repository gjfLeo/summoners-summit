import type { CharacterCard } from "~/utils/types";

export type UseTeamSource = string | CharacterCard[] | { team: string | CharacterCard[] };

function sourceToTeam(source: UseTeamSource): CharacterCard[] {
  if (typeof source === "string") {
    return source.split("-") as CharacterCard[];
  }
  else if (Array.isArray(source)) {
    return source;
  }
  return sourceToTeam(source.team);
}

export default function useTeam(source: MaybeRef<UseTeamSource>) {
  const team = computed(() => sourceToTeam(unref(source)));
  const teamId = computed(() => getTeamId(team.value));
  return { team, teamId };
}
