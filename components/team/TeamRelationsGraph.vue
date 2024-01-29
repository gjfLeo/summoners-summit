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
    >
      <template #node="{ node }">
        <div
          class="h-full cursor-pointer active:cursor-move"
          u-flex="~ items-center justify-center"
          style="
            border-color: var(--border-color);
            border-radius: var(--border-radius);
          "
          :style="{
            background: getBackgroundGradient((node as any).id),
          }"
        >
          <TeamAvatars :team="(node as any).id" />
        </div>
      </template>
    </RelationGraph>
    <div class="absolute right-2 top-2">
      <NTooltip>
        <template #trigger>
          <NText class="text-lg" :depth="3">
            <NIcon><div class="i-carbon:help" /></NIcon>
          </NText>
        </template>
        <template #default>
          <span>{{ $t('teams.relationGraph.help') }}</span>
        </template>
      </NTooltip>
    </div>
    <div u-flex="~ col items-end" class="absolute bottom-2 right-2">
      <NText class="text-sm" :depth="3">{{ $t('teams.relationGraph.description') }}</NText>
    </div>
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
    @after-leave="drawerLeaved = true"
  >
    <NDrawerContent
      :closable="!md"
      :native-scrollbar="false"
    >
      <template v-if="inspectTeam">
        <div u-flex="~ col gap-4">
          <!-- 图片 -->
          <div u-grid="~ cols-3 gap-2">
            <div
              v-for="character in getCharactersByTeamId(inspectTeam)"
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
            <NText>{{ $t('common.inlineStatisticFormat', [$t('stats.gamesPlayed'), teamStatsMap[inspectTeam].total]) }}</NText>
            <NText>{{ $t('common.inlineStatisticFormat', [$t('stats.gamesWin'), teamStatsMap[inspectTeam].win]) }}</NText>
            <NText>{{ $t('common.inlineStatisticFormat', [$t('stats.gamesNetWins'), teamStatsMap[inspectTeam].winDiff]) }}</NText>
            <NText>{{ $t('common.inlineStatisticFormat', [$t('stats.gamesBanned'), teamStatsMap[inspectTeam].banned]) }}</NText>
            <div />
            <NText>{{ $t('common.inlineStatisticFormat', [$t('stats.winRate'), toPercentageString(teamStatsMap[inspectTeam].winRate)]) }}</NText>
            <NText>{{ $t('common.inlineStatisticFormat', [$t('stats.winRateExcludeSame'), toPercentageString(teamStatsMap[inspectTeam].winRateExcludeSame)]) }}</NText>
            <NText>{{ $t('common.inlineStatisticFormat', [$t('stats.starterWinRate'), toPercentageString(teamStatsMap[inspectTeam].starterWinRate)]) }}</NText>
            <NText>{{ $t('common.inlineStatisticFormat', [$t('stats.followerWinRate'), toPercentageString(teamStatsMap[inspectTeam].followerWinRate)]) }}</NText>
          </div>
          <!-- 跳转 -->
          <div u-flex="~ wrap gap-2">
            <!-- 跳转 -->
            <NuxtLinkLocale :to="`/team/${inspectTeam}`" no-prefetch>
              <NButton size="small">{{ $t('actions.teamDetail') }}</NButton>
            </NuxtLinkLocale>
            <NButton size="small" @click="hideDrawer(), graphRef$?.getInstance().clearChecked()">{{ $t('actions.close') }}</NButton>
          </div>
        </div>
      </template>
      <template v-else-if="inspectRelation !== undefined">
        <div u-flex="~ col gap-4">
          <div u-grid="~ content-center justify-items-center items-center gap-2" style="grid-template-columns: auto 1fr auto 1fr;">
            <div />
            <div>
              <TeamAvatars :team="relations[inspectRelation].teamA" />
            </div>
            <div class="m--4">→</div>
            <div>
              <TeamAvatars :team="relations[inspectRelation].teamB" />
            </div>

            <NText>{{ $t('stats.gamesWin') }}</NText>
            <div>{{ relations[inspectRelation].teamAWin }}</div>
            <div />
            <div>{{ relations[inspectRelation].teamBWin }}</div>

            <NText>{{ $t('stats.winRate') }}</NText>
            <div>{{ toPercentageString(divide(relations[inspectRelation].teamAWin, relations[inspectRelation].teamAWin + relations[inspectRelation].teamBWin)) }}</div>
            <div />
            <div>{{ toPercentageString(divide(relations[inspectRelation].teamBWin, relations[inspectRelation].teamAWin + relations[inspectRelation].teamBWin)) }}</div>

            <div u-grid="col-1/5" class="mt-2">{{ $t('stats.statsComparisons') }}</div>

            <NText>{{ $t('stats.gamesPlayed') }}</NText>
            <div>{{ teamStatsMap[relations[inspectRelation].teamA].total }}</div>
            <div />
            <div>{{ teamStatsMap[relations[inspectRelation].teamB].total }}</div>
            <NText>{{ $t('stats.gamesWin') }}</NText>
            <div>{{ teamStatsMap[relations[inspectRelation].teamA].win }}</div>
            <div />
            <div>{{ teamStatsMap[relations[inspectRelation].teamB].win }}</div>
            <NText>{{ $t('stats.winRate') }}</NText>
            <div>{{ toPercentageString(teamStatsMap[relations[inspectRelation].teamA].winRate) }}</div>
            <div />
            <div>{{ toPercentageString(teamStatsMap[relations[inspectRelation].teamB].winRate) }}</div>
          </div>

          <div u-flex="~ wrap gap-2">
            <!-- 跳转 -->
            <NuxtLinkLocale no-prefetch @click="toGameRecord(inspectRelation)">
              <NButton size="small">{{ $t('actions.gameList') }}</NButton>
            </NuxtLinkLocale>
            <NButton size="small" @click="hideDrawer(), graphRef$?.getInstance().clearChecked()">{{ $t('actions.close') }}</NButton>
          </div>
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

const relations = props.relations;

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
  relations.forEach((relation) => {
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
  relations.forEach((relation) => {
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
    lines: relations.map((relation, index) => {
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

const inspectTeam = ref<TeamId>();
const inspectRelation = ref<number>();
const drawerVisible = ref(false);
const drawerLeaved = ref(true);

async function hideDrawer() {
  drawerLeaved.value = false;
  drawerVisible.value = false;
  await until(drawerLeaved).toBeTruthy();
  inspectTeam.value = undefined;
  inspectRelation.value = undefined;
}
async function showTeamDrawer(teamId: TeamId) {
  if (inspectTeam.value === teamId) {
    const graphInstance = graphRef$.value?.getInstance();
    graphInstance?.clearChecked();
    return await hideDrawer();
  }
  if (drawerVisible.value) {
    await hideDrawer();
  }
  inspectTeam.value = teamId;
  drawerVisible.value = true;
}
async function showRelationDrawer(relationIndex: number) {
  if (inspectRelation.value === relationIndex) {
    const graphInstance = graphRef$.value?.getInstance();
    graphInstance?.clearChecked();
    return await hideDrawer();
  }
  if (drawerVisible.value) {
    await hideDrawer();
  }
  inspectRelation.value = relationIndex;
  drawerVisible.value = true;
}

function handleNodeClick(node: RGNode, _e: RGUserEvent) {
  showTeamDrawer(node.id as TeamId);
}
function handleLineClick(line: RGLine, _link: RGLink, _e: RGUserEvent) {
  showRelationDrawer(line.data?.index);
}

// whenever(() => drawerVisible.value === false, () => {
// if (drawerLeaved.value) {
//   const graphInstance = graphRef$.value?.getInstance();
//   graphInstance?.clearChecked();
// }
// });

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
  const relation = relations[index];
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

  .rel-link-peel {
    cursor: pointer;
  }

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
