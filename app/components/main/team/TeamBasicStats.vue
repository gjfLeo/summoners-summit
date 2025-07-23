<template>
  <div v-if="teamBasicStats" class="mt flex flex-wrap gap-8">
    <NStatistic :label="t('main.team.basicStats.games')" :value="teamBasicStats.numGames" />
    <NStatistic :label="t('main.team.basicStats.gamesWin')" :value="teamBasicStats.numGamesWin" />
    <NStatistic :label="t('main.team.basicStats.winRate')" :value="teamBasicStats.winRate" />
    <NStatistic :label="t('main.team.basicStats.gamesNetWin')" :value="teamBasicStats.numGamesNetWin" />
    <NStatistic :label="t('main.team.basicStats.banned')" :value="teamBasicStats.numBanned" />
  </div>
  <div v-else class="mt">
    <NText :depth="3">{{ t('main.team.noData') }}</NText>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  teamId: DeckTeamId;
  gameVersion: GameVersionId;
}>();

const { t } = useLocales();

const { data: gameVersionStats } = await useFetch(`/api/v4/teams/${props.teamId}/game-version-stats`);

const teamBasicStats = computed(() => {
  const stats = gameVersionStats.value?.find(s => s.gameVersion === props.gameVersion) ?? {
    gameVersion: props.gameVersion,
    numGames: 0,
    numGamesWin: 0,
    numGamesStarter: 0,
    numGamesStarterWin: 0,
    numBanned: 0,
  };
  return {
    ...stats,
    winRate: toPercentageString(stats.numGamesWin, stats.numGames),
    numGamesNetWin: stats.numGamesWin - (stats.numGames - stats.numGamesWin),
  };
});
</script>
