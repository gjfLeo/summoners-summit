<template>
  <div class="grid justify-center gap-2" style="grid-template-columns: repeat(3, minmax(0, 8rem));">
    <template v-for="(card, i) in team" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
  </div>

  <div class="mt flex flex-wrap justify-center gap-8">
    <n-statistic label="选取数" :value="total" />
    <n-statistic label="获胜数" :value="win" />
    <n-statistic label="胜率" :value="winRate" />
    <n-statistic label="净胜场" :value="winDiff" />
  </div>

  <n-h3>行动牌选择</n-h3>
  <TeamCardUsages :team="teamId" />

  <n-h3>典型构筑</n-h3>
  <TeamDeck :team="teamId" />

  <n-h3>对阵数据</n-h3>
  <TeamTeamStatistics :team="teamId" />
</template>

<script lang="ts" setup>
const route = useRoute();
const { teamId, team, teamDisplayName } = useTeam(route.params.teamId as string);

useHead({ title: `${teamDisplayName.value} - 阵容数据 | 召唤之巅` });

// 非标准则跳转
if (route.params.teamId !== teamId.value) {
  navigateTo(`/team/${encodeURIComponent(teamId.value)}`, { replace: true });
}

const { games } = useGameList({ teamId });
const { total, win, winRate, winDiff } = useGamesStatistics(games);
</script>
