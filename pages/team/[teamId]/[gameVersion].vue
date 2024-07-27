<template>
  <div un-grid="~ md:cols-[auto_1fr] items-end gap-8">
    <div un-grid="~ cols-[repeat(3,minmax(0,8rem))] gap-2">
      <div v-for="cardId in characters" :key="cardId">
        <CardImage class="" :card="cardId" />
      </div>
    </div>
    <div class="mt flex flex-wrap gap-8">
      <NStatistic :label="t('main.team.basicStats.games')" :value="teamBasicStats.games" />
      <NStatistic :label="t('main.team.basicStats.gamesWin')" :value="teamBasicStats.gamesWin" />
      <NStatistic :label="t('main.team.basicStats.winRate')" :value="teamBasicStats.winRate" />
      <NStatistic :label="t('main.team.basicStats.gamesNetWin')" :value="teamBasicStats.gamesNetWin" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute("team-teamId-gameVersion___zh");
const teamId = route.params.teamId;
const characters = getCharacterCardsByTeamId(teamId);

const { t, currentLocalized } = useLocales();
const { gameVersion } = useGameVersion();
const { characterCardById } = await useAsyncSharedData();

const teamName = computed(() => characters.map(cardId => currentLocalized(characterCardById.value[cardId].name)).join(" & "));
useHead({ title: t("site.titles.main.team", [teamName.value]) });

const { teamStatsRecords } = await useApiGetTeamStatsRecords({ gameVersion: gameVersion.value });
const teamBasicStats = computed(() => {
  const stats = teamStatsRecords.value[teamId];
  return {
    ...stats,
    winRate: toPercentageString(stats.gamesWin, stats.games),
    gamesNetWin: stats.gamesWin - (stats.games - stats.gamesWin),
  };
});
</script>
