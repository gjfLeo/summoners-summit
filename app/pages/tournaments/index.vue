<template>
  <div>
    <template v-for="season in seasons" :key="season">
      <NH2 :id="`S${season}`">{{ t('main.tournaments.seasonName', [season]) }}</NH2>
      <template v-for="(list, gameVersionId) in bySeason[season]" :key="gameVersionId">
        <NH2 :id="gameVersionId.replace('.', '-')">{{ getGameVersionName(gameVersionId) }}</NH2>

        <TournamentList>
          <template v-for="tournament in list" :key="tournament.id">
            <NuxtLinkLocale :to="{ path: `/tournament/${tournament.id}` }">
              <TournamentListItem :tournament="tournament" />
            </NuxtLinkLocale>
          </template>
        </TournamentList>
      </template>
    </template>

    <SitePageAnchors>
      <template v-for="season in seasons" :key="season">
        <NAnchorLink
          :title="t('main.tournaments.seasonName', [season])"
          :href="`#S${season}`"
        >
          <template v-for="(list, gameVersionId) in bySeason[season]" :key="gameVersionId">
            <NAnchorLink
              :title="getGameVersionName(gameVersionId)"
              :href="`#${gameVersionId.replace('.', '-')}`"
            />
          </template>
        </NAnchorLink>
      </template>
    </SitePageAnchors>
  </div>
</template>

<script lang="ts" setup>
const { t } = useLocales();
useHead({ title: t("site.titles.main.tournaments") });

const { data: tournaments } = await useFetch("/api/v4/tournaments");
const { gameVersionFullList } = await useAsyncSharedData();

const bySeason = computed(() => {
  const bySeason: Record<SeasonPhraseId, Record<GameVersionId, TournamentDetailBrief[]>> = {};
  tournaments.value?.forEach((tournament) => {
    const gameVersionId = tournament.gameVersion;
    const gameVersion = gameVersionFullList.value.find(v => v.id === gameVersionId);
    if (!gameVersion) {
      return;
    }
    const season = gameVersion.seasonPhrase.split(".")[0];
    if (!bySeason[season]) bySeason[season] = {};
    if (!bySeason[season][gameVersionId]) bySeason[season][gameVersionId] = [];
    bySeason[season][gameVersionId].push(tournament);
  });
  return bySeason;
});
const seasons = computed(() => Object.keys(bySeason.value).sort().reverse());

function getGameVersionName(gameVersionId: GameVersionId) {
  const gameVersion = gameVersionFullList.value.find(v => v.id === gameVersionId);
  return gameVersion?.name ?? gameVersionId;
}
</script>
