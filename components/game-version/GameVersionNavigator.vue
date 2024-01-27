<template>
  <div class="hidden">
    <template v-for="link in links" :key="link">
      <div><NuxtLinkLocale :to="link" no-prefetch>{{ link }}</NuxtLinkLocale></div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { getAllGameVersions, getGameVersionPath } from "~/utils/game-version";

const route = useRoute();

const links = ["" as const, ...getAllGameVersions()].map(v => `${route.fullPath}/${getGameVersionPath(v)}`);
</script>
