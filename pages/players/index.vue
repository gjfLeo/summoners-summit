<template>
  <GameVersionNavigator />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: [
    "game-version-navigator",
  ],
});
</script>
