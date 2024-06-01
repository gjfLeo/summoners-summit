<script lang="ts" setup>
const { gameVersionList } = useSharedData();
const { t } = useI18n();

const gameVersion = defineModel<string>("value");

const options = computed<SelectOption[]>(() => {
  return gameVersionList.value.map(v => ({
    label: v.id,
    value: v.id,
  }));
});
</script>

<template>
  <NSelect
    v-model:value="gameVersion"
    :options="options"
    :loading="options.length === 0"
    :fallback-option="false"
    :placeholder="t('terms.gameVersionShort')"
    clearable
    class="min-w-22"
    v-bind="$attrs"
  />
</template>
