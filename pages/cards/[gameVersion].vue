<template>
  <div>
    <NTabs justify-content="space-evenly" type="line" size="large">
      <NTabPane name="characters" :tab="t('terms.characterCards')">
        <Cards_CharacterBarChart />
        <Cards_CharacterPickRateBarChart />
      </NTabPane>
      <NTabPane name="actions" :tab="t('terms.actionCards')">
        <Cards_ActionBarChart />
      </NTabPane>
    </NTabs>
  </div>
</template>

<script lang="ts" setup>
const { t } = useLocales();

const { gameVersion } = useGameVersion();

const { characterCardStats, numMatches, numGames } = await useApiGetCharacterCardStats({ gameVersion: gameVersion.value });
provide("characterCardStats", characterCardStats);
provide("numMatches", numMatches);
provide("numGames", numGames);

const { actionCardStats, numGameDecks } = await useApiGetActionCardStats({ gameVersion: gameVersion.value });
provide("actionCardStats", actionCardStats);
provide("numGameDecks", numGameDecks);
</script>
