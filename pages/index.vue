<template>
  <div class="p-8 text-center">
    {{ $t("home.text") }}
  </div>
  <GlobalStatsByVersionTable :stats-list="statsList" />
</template>

<script lang="ts" setup>
const { t } = useI18n();
useHead({ title: t("site.name") });

const { statsList } = await useApiGlobalStatsListByVersion();
</script>
