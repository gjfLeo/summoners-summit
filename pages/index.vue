<template>
  <div>{{ gameVersionList }}</div>
</template>

<script setup lang="ts">
const { gameVersionList } = await useSharedData();
</script>
