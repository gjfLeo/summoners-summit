import type { CharacterCard } from "~/utils/types";

export default function useTeamProp(props: { team: CharacterCard[] | string }) {
  const team = computed(() => {
    if (typeof props.team === "string") {
      return props.team.split("-") as CharacterCard[];
    }
    else {
      return props.team;
    }
  });
  const teamId = computed(() => getTeamId(team.value));

  return { team, teamId };
}
