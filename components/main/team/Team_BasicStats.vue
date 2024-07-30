<template>
  <div v-if="teamBasicStats" class="mt flex flex-wrap gap-8">
    <NStatistic :label="t('main.team.basicStats.games')" :value="teamBasicStats.games" />
    <NStatistic :label="t('main.team.basicStats.gamesWin')" :value="teamBasicStats.gamesWin" />
    <NStatistic :label="t('main.team.basicStats.winRate')" :value="teamBasicStats.winRate" />
    <NStatistic :label="t('main.team.basicStats.gamesNetWin')" :value="teamBasicStats.gamesNetWin" />
    <NStatistic :label="t('main.team.basicStats.banned')" :value="teamBasicStats.banned" />
  </div>
  <div v-else class="mt">
    <NText :depth="3">{{ t('main.team.noData') }}</NText>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute("team-teamId-gameVersion___zh");
const teamId = route.params.teamId;
const { gameVersion } = useGameVersion();

const { t } = useLocales();

const { teamStatsRecords } = await useApiGetTeamStatsRecords({
  gameVersion: gameVersion.value,
});
const teamBasicStats = computed(() => {
  const stats = teamStatsRecords.value[teamId];
  if (!stats) return null;
  return {
    ...stats,
    winRate: toPercentageString(stats.gamesWin, stats.games),
    gamesNetWin: stats.gamesWin - (stats.games - stats.gamesWin),
  };
});
</script>
