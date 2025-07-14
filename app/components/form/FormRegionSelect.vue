<template>
  <NSelect
    v-model:value="region"
    :options="options"
    :loading="options.length === 0"
    :fallback-option="false"
    filterable
    :placeholder="t('terms.region')"
    clearable
    class="min-w-22"
    v-bind="$attrs"
  />
</template>

<script lang="ts" setup>
const { regionList } = useSharedData();
const { t, currentLocalized } = useLocales();

const region = defineModel<string>();

const options = computed<SelectOption[]>(() => {
  return regionList.value.map(v => ({
    label: currentLocalized(v.name),
    value: v.key,
  }));
});
</script>
