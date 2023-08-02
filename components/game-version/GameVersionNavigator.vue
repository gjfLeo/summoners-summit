<template>
  <div class="hidden">
    <template v-for="link in links" :key="link">
      <div><NuxtLink :to="link" no-prefetch>{{ link }}</NuxtLink></div>
    </template>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const links = gameVersionList.map(item => `${route.fullPath}/${item.path}`);
</script>
