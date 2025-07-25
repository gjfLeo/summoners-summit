<template>
  <div>
    <NTabs justify-content="space-evenly" type="line" size="large">
      <NTabPane name="characters" :tab="t('terms.characterCards')">
        <Cards_CharacterBarChart />
        <Cards_CharacterPickRateBarChart />
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

const { characterCardStats, numMatches, numGames } = await useApiGetCharacterCardStats({ gameVersion: gameVersion.value });
provide("characterCardStats", characterCardStats);
provide("numMatches", numMatches);
provide("numGames", numGames);

const {
  data: actionCardsUsages,
  pending: actionCardsUsagesLoading,
} = await useFetch("/api/v4/action-cards-usages", {
  query: { gameVersion },
});
</script>
