<template>
  <div class="hidden">
    <template v-for="version in gameVersionList" :key="version.id">
      <div><NuxtLinkLocale :to="getLink(version)" no-prefetch>{{ version.id }}</NuxtLinkLocale></div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { GameVersion } from "~/types";

const { gameVersionList } = await useAsyncSharedData();
const route = useRoute();

function getLink(version: GameVersion) {
  return `${route.fullPath}/${getGameVersionPath(version)}`;
}
</script>
