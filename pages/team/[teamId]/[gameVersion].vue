<template>
  <div class="grid justify-center gap-2" style="grid-template-columns: repeat(3, minmax(0, 8rem));">
    <template v-for="(card, i) in team" :key="i">
      <CardImage :card="card" class="w-100%" />
    </template>
  </div>

  <div class="mt flex flex-wrap justify-center gap-8">
    <NStatistic label="选取数" :value="total" />
    <NStatistic label="获胜数" :value="win" />
    <NStatistic label="胜率" :value="winRate" />
    <NStatistic label="净胜场" :value="winDiff" />
  </div>

  <NH3>行动牌选择</NH3>
  <TeamCardUsages :team="teamId" />

  <NH3>典型构筑</NH3>
  <TeamDeck :team="teamId" />

  <NH3>对阵数据</NH3>
  <TeamTeamStatistics :team="teamId" />
</template>

<script lang="ts" setup>
import { NH3, NStatistic } from "naive-ui";

const route = useRoute();
const { teamId, team, teamDisplayName } = useTeam(route.params.teamId as string);

useHead({ title: `${teamDisplayName.value} - 阵容数据 | 召唤之巅` });

// 非标准则跳转
if (route.params.teamId !== teamId.value) {
  await navigateTo(`/team/${encodeURIComponent(teamId.value)}`, { replace: true });
}

const { gameVersion } = useGameVersion({ detect: true });

const { gameList } = await useGameList({ gameVersion: gameVersion.value, characters: team.value });
const { total, win, winRate, winDiff } = useGamesStatistics(gameList);
</script>
