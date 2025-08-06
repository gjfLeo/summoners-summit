<template>
  <div>
    <NTabs justify-content="space-evenly" type="line" size="large">
      <NTabPane name="characters" :tab="t('terms.characterCards')">
        <template v-if="characterCardsUsages">
          <CardsCharacterUsageBarChart :usages="characterCardsUsages" :num-matches="numMatches" />
          <CardsCharacterPickRateBarChart :usages="characterCardsUsages" :num-matches="numMatches" />
        </template>
        <template v-else-if="characterCardsUsagesLoading">
          <NSpin size="large" />
        </template>
      </NTabPane>
      <NTabPane name="actions" :tab="t('terms.actionCards')">
        <template v-if="actionCardsUsages">
          <Cards_ActionBarChart :action-card-stats="actionCardsUsages" />
        </template>
        <template v-else-if="actionCardsUsagesLoading">
          <NSpin size="large" />
        </template>
      </NTabPane>
    </NTabs>
  </div>
</template>

<script lang="ts" setup>
const { t } = useLocales();
useHead({ title: t("site.titles.main.cards") });

const { gameVersion } = useGameVersion();

const { data: overviewData } = await useFetch("/api/v4/overview-stats");
const gameVersionOverviewStats = computed(() => {
  return overviewData.value?.find(g => g.gameVersion === gameVersion.value);
});
const numMatches = computed(() => gameVersionOverviewStats.value?.numMatches ?? 0);

const {
  data: characterCardsUsages,
  pending: characterCardsUsagesLoading,
} = await useFetch("/api/v4/character-cards-usages", {
  query: { gameVersion },
});

const {
  data: actionCardsUsages,
  pending: actionCardsUsagesLoading,
} = await useFetch("/api/v4/action-cards-usages", {
  query: { gameVersion },
});
</script>
