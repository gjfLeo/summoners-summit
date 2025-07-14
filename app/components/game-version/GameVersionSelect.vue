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
const props = withDefaults(defineProps<{
  full?: boolean;
}>(), {
  full: true,
});

const { gameVersionList, gameVersionFullList } = useSharedData();
const { t } = useLocales();

const gameVersion = defineModel<string>("value");

const options = computed<SelectOption[]>(() => {
  return (props.full ? gameVersionFullList : gameVersionList).value.map(v => ({
    label: v.id,
    value: v.id,
  }));
});
</script>
