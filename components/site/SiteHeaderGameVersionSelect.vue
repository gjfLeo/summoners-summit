<template>
  <GameVersionSelect v-model:value="gameVersion" />
</template>

<script lang="ts" setup>
const { gameVersion } = useGameVersion();
</script>
