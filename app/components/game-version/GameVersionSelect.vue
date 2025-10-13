<template>
  <NSelect
    v-model:value="gameVersion"
    :options="options"
    :loading="options.length === 0"
    :fallback-option="false"
    filterable
    :placeholder="t('terms.gameVersionShort')"
    clearable
    class="min-w-22"
    v-bind="$attrs"
  />
</template>

<script lang="ts" setup>
const { gameVersionFullList } = useSharedData();
const { t } = useLocales();

const gameVersion = defineModel<string>("value");

const options = computed<SelectOption[]>(() => {
  return gameVersionFullList.value.map(v => ({
    label: v.name ?? v.id,
    value: v.id,
  }));
});
</script>
