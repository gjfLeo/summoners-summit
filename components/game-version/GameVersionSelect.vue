<script lang="ts" setup>
const props = defineProps<{
  value: string | undefined;
}>();

const emit = defineEmits<{
  (e: "update:value", value: string | undefined): void;
}>();

const shared = useSharedData();
const { t } = useI18n();

const gameVersionList = computed(() => shared.gameVersionList);

const gameVersion = useVModel(props, "value", emit);

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
    class="w-22"
  />
</template>
