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
</script>
