<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2">
    <n-statistic label="已统计对局" :value="total" />
    <n-statistic label="含牌组对局" :value="totalWithActions" />
  </div>
  <n-hr />
  <div class="grid lg:grid-cols-3 md:grid-cols-2">
    <n-statistic label="先手胜率" :value="starterWinRate" />
    <n-statistic label="后手胜率" :value="followerWinRate" />
  </div>
</template>

<script lang="ts" setup>
useHead({ title: "统计 | 召唤之巅" });

const { games } = useGameList({ mirror: false });
const { total, totalWithActions, starterWinRate, followerWinRate } = useGamesStatistics(games);
</script>
