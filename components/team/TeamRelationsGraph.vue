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
      :on-node-click="handleNodeClick"
      :on-line-click="handleLineClick"
      :on-canvas-click="() => drawerVisible = false"
    >
      <template #node="{ node }">
        <div
          class="h-full"
          u-flex="~ items-center justify-center"
          style="
            border-color: var(--border-color);
            border-radius: var(--border-radius);
          "
          :style="{
            background: getBackgroundGradient((node as any).id),
          }"
        >
          <!-- <NuxtLink :to="`/team/${(node as any).id}`" no-prefetch class="line-height-0"> -->
          <TeamAvatars :team="(node as any).id" />
          <!-- </NuxtLink> -->
        </div>
      </template>
    </RelationGraph>
    <NText class="absolute bottom-2 right-2 text-sm" :depth="3">根据已收录数据生成，仅供参考</NText>
  </NElement>

  <NDrawer
    v-model:show="drawerVisible"
    :width="md ? '20rem' : undefined"
    :height="md ? undefined : '60vh'"
    :placement="md ? 'right' : 'bottom'"
    :to="md ? '#team-relations-graph-container' : undefined"
    :show-mask="!md"
    :mask-closable="!md"
    style="--n-body-padding: 1rem"
    @after-leave="checkedChanging = false"
  >
    <NDrawerContent closable :native-scrollbar="false">
      <template v-if="checkedTeam">
        <div u-flex="~ col gap-4">
          <!-- 图片 -->
          <div u-grid="~ cols-3 gap-2">
            <div
              v-for="character in getCharactersByTeamId(checkedTeam)"
              :key="character"
            >
              <CardImage
                :card="character"
                class="w-full"
              />
            </div>
          </div>
          <!-- 数据 -->
          <div u-flex="~ col gap-2">
            <NText>总场数：{{ teamStatsMap[checkedTeam].total }}</NText>
            <NText>胜场数：{{ teamStatsMap[checkedTeam].win }}</NText>
            <NText>净胜场：{{ teamStatsMap[checkedTeam].winDiff }}</NText>
            <NText v-if="teamStatsMap[checkedTeam].banned">被禁用：{{ teamStatsMap[checkedTeam].banned }}</NText>
            <div />
            <NText>胜率：{{ toPercentageString(teamStatsMap[checkedTeam].winRate) }}</NText>
            <NText>排除镜像对局胜率：{{ toPercentageString(teamStatsMap[checkedTeam].winRateExcludeSame) }}</NText>
            <NText>先手胜率：{{ toPercentageString(teamStatsMap[checkedTeam].starterWinRate) }}</NText>
            <NText>后手胜率：{{ toPercentageString(teamStatsMap[checkedTeam].followerWinRate) }}</NText>
          </div>
          <!-- 跳转 -->
          <NuxtLink :to="`/team/${checkedTeam}`" no-prefetch>
            <NButton size="small">查看阵容详情</NButton>
          </NuxtLink>
        </div>
      </template>
      <template v-else-if="checkedRelation !== undefined">
        <div u-flex="~ col gap-4">
          <div u-grid="~ content-center justify-items-center items-center gap-2" style="grid-template-columns: auto 1fr 1fr;">
            <div />
            <div>
              <TeamAvatars :team="relations[checkedRelation].teamA" />
            </div>
            <div>
              <TeamAvatars :team="relations[checkedRelation].teamB" />
            </div>

            <NText>此对阵胜场</NText>
            <div>{{ relations[checkedRelation].teamAWin }}</div>
            <div>{{ relations[checkedRelation].teamBWin }}</div>

            <NText>此对阵胜率</NText>
            <div>{{ toPercentageString(divide(relations[checkedRelation].teamAWin, relations[checkedRelation].teamAWin + relations[checkedRelation].teamBWin)) }}</div>
            <div>{{ toPercentageString(divide(relations[checkedRelation].teamBWin, relations[checkedRelation].teamAWin + relations[checkedRelation].teamBWin)) }}</div>

            <div u-grid="col-1/4" />

            <NText>全部场数</NText>
            <div>{{ teamStatsMap[relations[checkedRelation].teamA].total }}</div>
            <div>{{ teamStatsMap[relations[checkedRelation].teamB].total }}</div>
            <NText>总胜场数</NText>
            <div>{{ teamStatsMap[relations[checkedRelation].teamA].win }}</div>
            <div>{{ teamStatsMap[relations[checkedRelation].teamB].win }}</div>
            <NText>总胜率</NText>
            <div>{{ toPercentageString(teamStatsMap[relations[checkedRelation].teamA].winRate) }}</div>
            <div>{{ toPercentageString(teamStatsMap[relations[checkedRelation].teamB].winRate) }}</div>
          </div>

          <!-- 跳转 -->
          <NuxtLink no-prefetch @click="toGameRecord(checkedRelation)">
            <NButton size="small">查看对局记录</NButton>
          </NuxtLink>
        </div>
      </template>
    </NDrawerContent>
  </NDrawer>
</template>

<script lang="ts" setup>
import RelationGraph from "relation-graph/vue3";
import type { RGJsonData, RGLine, RGLink, RGNode, RGOptions, RGUserEvent } from "relation-graph";
import { divide } from "mathjs/number";
import dagre from "@dagrejs/dagre";
import { breakpointsTailwind } from "@vueuse/core";
import type { ApiTeamRelationsData, TeamId } from "~/utils/types";
import { ALL_CHARACTER_CARDS_INFO, ALL_ELEMENTS_INFO, getCharactersByTeamId } from "~/utils/cards";
import { LAYOUT_CONTENT_HEIGHT } from "~/configs/layout";

const props = defineProps<{
  relations: ApiTeamRelationsData["relations"];
  teamStatsMap: Awaited<ReturnType<typeof useTeamStatsMap>>["teamStatsMap"];
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

  defaultFocusRootNode: false,

  layout: {
    layoutName: "fixed",
  },

}));

interface LineData {
  index: number;
}

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
    lines: props.relations.map((relation, index) => {
      const winRate = divide(relation.teamAWin, relation.teamAWin + relation.teamBWin);
      return {
        showStartArrow: relation.teamAWin < relation.teamBWin,
        showEndArrow: relation.teamAWin > relation.teamBWin,
        from: relation.teamA,
        to: relation.teamB,
        color: `rgb(255, ${196 * (2 - 2 * winRate)}, 0)`,
        text: toPercentageString(winRate),
        arrow: "M0,0 L12,6 L0,12 L6,6 L0,0",
        data: { index } as LineData,
      };
    }),
  };

  graphRef$.value?.setJsonData(data);
});

const checkedTeam = ref<TeamId>();
const checkedRelation = ref<number>();
const checkedChanging = ref(false);

const drawerVisible = computed({
  get: () => !checkedChanging.value && (checkedTeam.value !== undefined || checkedRelation.value !== undefined),
  set: (value) => {
    if (value) {
      throw new Error("Unaccessible");
    }
    else {
      checkedTeam.value = undefined;
      checkedRelation.value = undefined;
      const graphInstance = graphRef$.value?.getInstance();
      graphInstance?.clearChecked();
    }
  },
});
function handleNodeClick(node: RGNode, _e: RGUserEvent) {
  if (checkedTeam.value === node.id) {
    drawerVisible.value = false;
    return;
  }
  checkedChanging.value = drawerVisible.value;
  checkedTeam.value = node.id as TeamId;
  checkedRelation.value = undefined;
}
function handleLineClick(line: RGLine, _link: RGLink, _e: RGUserEvent) {
  if (checkedRelation.value === line.data?.index) {
    drawerVisible.value = false;
    return;
  }
  checkedChanging.value = drawerVisible.value;
  checkedRelation.value = line.data?.index;
  checkedTeam.value = undefined;
}

whenever(() => drawerVisible.value === false, () => {
  if (!checkedChanging.value) {
    const graphInstance = graphRef$.value?.getInstance();
    graphInstance?.clearChecked();
  }
});

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

const router = useRouter();
function toGameRecord(index: number) {
  const relation = props.relations[index];
  return router.push({
    path: `/team/${relation.teamA}`,
    state: {
      tab: "games",
      opponentTeamId: relation.teamB,
    },
  });
}

const { md } = useBreakpoints(breakpointsTailwind);
</script>

<style scoped>
:deep(.relation-graph) {

  .c-rg-line-checked-bg {
    stroke: #18a05818;
  }

  .rel-node-checked {
    box-shadow: 0 0 0 4px #18a05818;
  }

  .c-rg-line, .c-rg-line-text {
    /* cursor: pointer; */
  }
}
</style>
