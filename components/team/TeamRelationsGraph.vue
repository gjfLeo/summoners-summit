<template>
  <NElement
    class="relative border-1"
    style="
      border-color: var(--border-color);
      border-radius: var(--border-radius);
    "
    :style="{ height: LAYOUT_CONTENT_HEIGHT }"
  >
    <RelationGraph ref="graphRef$" :options="options">
      <template #node="{ node }">
        <div
          class="h-full cursor-move"
          u-flex="~ items-center justify-center"
          style="
            background-color: var(--tag-color);
            border-color: var(--border-color);
            border-radius: var(--border-radius);
          "
        >
          <NuxtLink :to="`/team/${(node as any).id}`" no-prefetch class="line-height-0">
            <TeamAvatars :team="(node as any).id" />
          </NuxtLink>
        </div>
      </template>
    </RelationGraph>
    <NText class="absolute bottom-2 right-2 text-sm" :depth="3">根据已收录数据生成，仅供参考</NText>
  </NElement>
</template>

<script lang="ts" setup>
import RelationGraph from "relation-graph/vue3";
import type { RGJsonData, RGOptions } from "relation-graph";
import { divide } from "mathjs/number";
import type { ApiTeamRelationsData, TeamId } from "~/utils/types";
import { getCharactersByTeamId } from "~/utils/cards";
import { LAYOUT_CONTENT_HEIGHT } from "~/configs/layout";

const props = defineProps<{
  relations: ApiTeamRelationsData["relations"];
}>();

const graphRef$ = ref<RelationGraph>();
const options: RGOptions = {
  backgroundColor: "transparent",

  allowShowMiniToolBar: false,
  defaultNodeShape: 1,
  defaultJunctionPoint: "border",
  defaultNodeColor: "",
  defaultNodeWidth: 90,
  defaultNodeHeight: 40,
  defaultNodeFontColor: "",
  defaultNodeBorderWidth: 0,

  disableNodeClickEffect: true,
  disableLineClickEffect: true,
  defaultFocusRootNode: false,

  layout: {
    layoutName: "force",
    force_node_repulsion: 0.5,
    maxLayoutTimes: 50,
  },

};

onMounted(() => {
  if (import.meta.server) return;

  const teams = new Array<TeamId>();
  props.relations.forEach((relation) => {
    if (!teams.includes(relation.teamA)) teams.push(relation.teamA);
    if (!teams.includes(relation.teamB)) teams.push(relation.teamB);
  });

  const data: RGJsonData = {
    nodes: teams.map(team => ({ id: team, text: getCharactersByTeamId(team).join(" & ") })),
    lines: props.relations.map((relation) => {
      const winRate = divide(relation.teamAWin, relation.teamAWin + relation.teamBWin);
      return {
        showStartArrow: relation.teamAWin < relation.teamBWin,
        showEndArrow: relation.teamAWin > relation.teamBWin,
        from: relation.teamA,
        to: relation.teamB,
        color: `rgb(255, ${232 * (2 - 2 * winRate)}, 0)`,
        text: toPercentageString(winRate),
        // lineWidth: 1,
        // opacity: winRate,
      };
    }),
  };

  graphRef$.value?.setJsonData(data);
});
</script>
