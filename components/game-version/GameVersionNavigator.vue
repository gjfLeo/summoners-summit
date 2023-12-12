<template>
  <div class="hidden">
    <template v-for="link in links" :key="link">
      <div><NuxtLink :to="link" no-prefetch>{{ link }}</NuxtLink></div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ALL_GAME_VERSIONS, getGameVersionPath } from "~/utils/game-versions";

const route = useRoute();

const links = ALL_GAME_VERSIONS.map(v => `${route.fullPath}/${getGameVersionPath(v)}`);
</script>
