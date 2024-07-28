<template>
  <div>{{ gameVersionList }}</div>
</template>

<script setup lang="ts">
const { gameVersionList } = await useAsyncSharedData();
</script>
