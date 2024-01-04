<template>
  <NElement
    id="team-relations-graph-container"
    ref="containerRef$"
    class="relative border-1"
    style="
      border-color: var(--border-color);
      border-radius: var(--border-radius);
    "
    :style="{ height: LAYOUT_CONTENT_HEIGHT }"
  >
    <RelationGraph
      ref="graphRef$"
      :options="options"
      :on-line-click="handleLineClick"
    >
      <template #node="{ node }">
        <div
          class="h-full cursor-move"
          u-flex="~ items-center justify-center"
          style="
            border-color: var(--border-color);
            border-radius: var(--border-radius);
          "
          :style="{
            background: getBackgroundGradient((node as any).id),
          }"
        >
          <NuxtLink :to="`/team/${(node as any).id}`" no-prefetch class="line-height-0">
            <TeamAvatars :team="(node as any).id" />
          </NuxtLink>
        </div>
      </template>
    </RelationGraph>
    <NText class="absolute bottom-2 right-2 text-sm" :depth="3">根据已收录数据生成，仅供参考</NText>
  </NElement>

  <NDrawer
    v-model:show="drawerVisible"
    to="#team-relations-graph-container"
  />
</template>

<script lang="ts" setup>
import RelationGraph from "relation-graph/vue3";
import type { RGJsonData, RGLine, RGLink, RGOptions, RGUserEvent } from "relation-graph";
import { divide } from "mathjs/number";
import dagre from "@dagrejs/dagre";
import type { ApiTeamRelationsData, TeamId } from "~/utils/types";
import { ALL_CHARACTER_CARDS_INFO, ALL_ELEMENTS_INFO, getCharactersByTeamId } from "~/utils/cards";
import { LAYOUT_CONTENT_HEIGHT } from "~/configs/layout";

const props = defineProps<{
  relations: ApiTeamRelationsData["relations"];
}>();

const nodeWidth = 90;
const nodeHeight = 40;
const nodePadding = 8;

const containerRef$ = ref<HTMLElement>();
const graphRef$ = ref<RelationGraph>();

const { width: containerWidth, height: containerHeight } = useElementSize(containerRef$);

const options = computed<RGOptions>(() => ({
  backgroundColor: "transparent",

  allowShowMiniToolBar: false,
  defaultNodeShape: 1,
  defaultJunctionPoint: "border",
  defaultNodeColor: "",
  defaultNodeWidth: nodeWidth,
  defaultNodeHeight: nodeHeight,
  defaultNodeFontColor: "",
  defaultNodeBorderWidth: 0,

  disableNodeClickEffect: true,
  disableLineClickEffect: true,
  defaultFocusRootNode: false,

  layout: {
    layoutName: "fixed",
  },

}));

onMounted(() => {
  const teams = new Array<TeamId>();
  props.relations.forEach((relation) => {
    if (!teams.includes(relation.teamA)) teams.push(relation.teamA);
    if (!teams.includes(relation.teamB)) teams.push(relation.teamB);
  });

  // Create a new directed graph
  const g = new dagre.graphlib.Graph();
  // Set an object for the graph label
  g.setGraph({
    nodesep: 100,
    edgesep: 50,
  });
  // Default to assigning a new object as a label for each new edge.
  g.setDefaultEdgeLabel(() => {
    return {};
  });
  teams.forEach((team) => {
    g.setNode(team, { label: "", width: nodeWidth + nodePadding * 2, height: nodeHeight + nodePadding * 2 });
  });
  props.relations.forEach((relation) => {
    g.setEdge(relation.teamA, relation.teamB);
  });
  dagre.layout(g);

  const data: RGJsonData = {
    nodes: g.nodes().map((teamId) => {
      const gNode = g.node(teamId);
      return {
        id: teamId,
        text: getCharactersByTeamId(teamId as TeamId).join(" & "),
        x: gNode.x - containerWidth.value / 2,
        y: gNode.y - containerHeight.value / 2,
      };
    }),
    lines: props.relations.map((relation) => {
      const winRate = divide(relation.teamAWin, relation.teamAWin + relation.teamBWin);
      return {
        styleClass: "cursor-pointer",
        showStartArrow: relation.teamAWin < relation.teamBWin,
        showEndArrow: relation.teamAWin > relation.teamBWin,
        from: relation.teamA,
        to: relation.teamB,
        color: `rgb(255, ${196 * (2 - 2 * winRate)}, 0)`,
        text: toPercentageString(winRate),
        arrow: "M0,0 L12,6 L0,12 L6,6 L0,0",
      };
    }),
  };

  graphRef$.value?.setJsonData(data);
});

const drawerVisible = ref(false);

function handleLineClick(line: RGLine, link: RGLink, e: RGUserEvent) {
  // drawerVisible.value = true;
}

function getBackgroundGradient(teamId: TeamId) {
  const characters = getCharactersByTeamId(teamId);
  const colors = characters.map(c => ALL_CHARACTER_CARDS_INFO[c].element)
    .map(e => ALL_ELEMENTS_INFO[e].color);
  if (colors[1] === colors[2]) {
    colors.push(...colors.splice(0, 1));
  }
  else if (colors[0] === colors[2]) {
    colors.push(...colors.splice(1, 1));
  }
  return `linear-gradient(120deg, ${colors[0]}80 25%, ${colors[1]}80 50%, ${colors[2]}80 75%)`;
}
</script>
