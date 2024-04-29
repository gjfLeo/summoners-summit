<script lang="ts" setup>
const shared = useSharedData();
const { t } = useI18n();

const tournamentTypeList = computed(() => shared.tournamentTypeList);

const tournamentType = defineModel<string>("value");

const options = computed<SelectOption[]>(() => {
  return tournamentTypeList.value.map(v => ({
    label: v.value,
    value: v.value,
  }));
});
</script>

<template>
  <NSelect
    v-model:value="tournamentType"
    :options="options"
    :loading="options.length === 0"
    :fallback-option="false"
    :placeholder="t('main.tournament.type')"
    clearable
    v-bind="$attrs"
  />
</template>
