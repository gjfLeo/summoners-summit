<template>
  <div un-flex="~ col gap-4">
    <div class="p-4 text-center" v-html="t('main.home.welcome')" />
    <Home_Overview :overview="overview" />
  </div>
</template>

<script setup lang="ts">
const { t } = useLocales();

const { overview } = await useApiGetOverviewStats();
</script>
