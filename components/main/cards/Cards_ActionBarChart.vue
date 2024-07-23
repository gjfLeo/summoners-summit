<template>
  <div />
</template>

<script lang="ts" setup>
const { gameVersion } = useGameVersion();
const { t } = useLocales();
const { actionCardStats, numGameDecks } = await useApiGetActionCardStats({ gameVersion: gameVersion.value });
const { actionCardById } = await useAsyncSharedData();
const themeVars = useThemeVars();
</script>
