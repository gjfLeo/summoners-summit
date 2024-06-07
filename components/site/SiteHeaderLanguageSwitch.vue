<script lang="ts" setup>
const { t, locale, locales, setLocale } = useLocales();
const localeOptions = computed(() => {
  return locales.value
    .map(locale => (
      typeof locale === "string"
        ? { label: locale, value: locale }
        : { label: locale.name, value: locale.code }
    ));
});
watch(
  locale,
  () => {
    useSeoMeta({
      description: t("site.description"),
    });
  },
  { immediate: true },
);
</script>

<template>
  <NPopselect :value="locale" :options="localeOptions" @update:value="setLocale">
    <CommonIconButton icon="i-carbon:translate" />
  </NPopselect>
</template>
