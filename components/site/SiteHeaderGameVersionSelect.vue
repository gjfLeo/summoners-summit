<template>
  <GameVersionSelect
    v-model:value="gameVersion"
    :clearable="false"
    class="w-6.25rem"
  />
</template>

<script lang="ts" setup>
const { gameVersion } = useGameVersion();
</script>
