<template>
  <div>
    <NTabs justify-content="space-evenly" type="line" size="large">
      <NTabPane name="characters" :tab="t('terms.characterCards')">
        <Cards_CharacterBarChart />
        <Cards_CharacterInMatchesBarChart />
      </NTabPane>
      <NTabPane name="actions" :tab="t('terms.actionCards')">
        <!-- <NText :depth="3" class="mb block text-sm">{{ $t('cards.numDecks', totalDeck) }}</NText>
        <NDataTable
          :columns="actionStatsColumns"
          :data="actionStatsData"
          max-height="calc(100vh - 18rem)"
        /> -->
      </NTabPane>
    </NTabs>
  </div>
</template>

<script lang="ts" setup>
const { t } = useLocales();
</script>
