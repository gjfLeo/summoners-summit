<template>
  <div flex flex-wrap gap-4>
    <n-statistic label="选取数" :value="pick" />
    <n-statistic label="获胜数" :value="win" />
    <n-statistic label="胜率" :value="winRate" />
    <n-statistic label="净胜场" :value="winDifferential" />
  </div>

  <h1 mt text-xl font-bold>单卡使用率</h1>
  <TeamCardUsages :games="teamGameList" />
  <!-- <div class="grid items-center justify-start grid-cols-4-auto col-gap-2 row-gap-1">
    <div />
    <div />
    <button class="flex items-center outline-none" @click="sortByCount = !sortByCount">
      <div>平均携带张数</div>
      <div ml-1 :class="sortByCount ? 'i-carbon:sort-remove' : 'i-carbon:sort-descending'" />
    </button>
    <button class="flex items-center outline-none" @click="sortByCount = !sortByCount">
      <div>胜场平均携带张数</div>
      <div ml-1 :class="sortByCount ? 'i-carbon:sort-remove' : 'i-carbon:sort-descending'" />
    </button>
    <TransitionGroup>
      <template v-for="item in cardUsages" :key="item.card">
        <CardImage :card="item.card" h-8 />
        <div>{{ item.card }}</div>
        <div>{{ item.pick }}</div>
        <div>{{ item.win }}</div>
      </template>
    </TransitionGroup>
  </div> -->

  <h1 mt text-xl font-bold>队伍</h1>
  <TeamTeamStatistics :games="teamGameList" />

  <h1 mt text-xl font-bold>对局记录</h1>
  <GameRecordList :list="teamGameList" />
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
