<template>
  {{ relations }}
  <!-- <RelationGraph ref="graphRef$" :options="options" /> -->
</template>

<script lang="ts" setup>
import type RelationGraph from "relation-graph/vue3";
import type { RGJsonData, RGOptions } from "relation-graph";
import type { TeamId } from "~/utils/types";
import { getCharactersByTeamId } from "~/utils/cards";

const { gameVersion } = useGameVersion({ detect: true });

const graphRef$ = ref<RelationGraph>();
const options: RGOptions = {};

const { relations } = await useApiTeamRelations(gameVersion.value);

const teams = new Array<TeamId>();
relations.forEach((relation) => {
  if (!teams.includes(relation.teamA)) teams.push(relation.teamA);
  if (!teams.includes(relation.teamB)) teams.push(relation.teamB);
});

const data: RGJsonData = {
  nodes: teams.map(team => ({ id: team, text: getCharactersByTeamId(team).join(" & ") })),
  lines: relations.map(relation => ({ from: relation.teamA, to: relation.teamB })),
};
graphRef$.value?.setJsonData(data);
</script>
