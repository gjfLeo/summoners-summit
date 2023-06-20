<template>
  <TeamAvatars :team="teamId" :size="20" />

  <div flex flex-wrap gap-4>
    <n-statistic label="选取数" :value="pick" />
    <n-statistic label="获胜数" :value="win" />
    <n-statistic label="胜率" :value="winRate" />
    <n-statistic label="净胜场" :value="winDifferential" />
  </div>

  <h1 mt text-xl font-bold>行动牌选择</h1>
  <TeamCardUsages :games="teamGameList" />

  <h1 mt text-xl font-bold>对阵数据</h1>
  <TeamTeamStatistics :games="teamGameList" />
</template>

<script lang="ts" setup>
import { divide, subtract } from "mathjs/number";
import { findGamesByTeam } from "~/data";

const route = useRoute();
const teamId = route.params.teamId as string;
const team = teamId.split("-").filter(characterCardFilter).sort(characterCardSorter);

useHead({
  title: `${team.join(" & ")} - 阵容数据 | 召唤之颠`,
});

// 非标准则跳转
const normalizedTeamId = team.join("-");
if (normalizedTeamId !== teamId) {
  navigateTo(`/team/${encodeURIComponent(normalizedTeamId)}`, { replace: true });
}

// const decks = findDecksByTeam(teamId);
const teamGameList = findGamesByTeam(teamId);

const pick = computed(() => teamGameList.length);
const win = computed(() => teamGameList.filter(game => game.winner === "A").length);
const winRate = computed(() => toPercentageString(divide(win.value, pick.value)));
const winDifferential = computed(() => subtract(win.value, subtract(pick.value, win.value)));
</script>
