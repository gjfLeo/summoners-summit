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
const props = defineProps<{
  limit?: number;
}>();

const { gameVersionList } = useSharedData();
const { t } = useLocales();

const gameVersion = defineModel<string>("value");

const options = computed<SelectOption[]>(() => {
  if (props.limit) {
    return gameVersionList.value.slice(0, props.limit).map(v => ({
      label: v.id,
      value: v.id,
    }));
  }
  return gameVersionList.value.map(v => ({
    label: v.id,
    value: v.id,
  }));
});
</script>
