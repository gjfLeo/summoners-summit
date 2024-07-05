<template>
  <SiteLayout :routes="routes">
    <NuxtPage />
  </SiteLayout>
</template>

<script lang="ts" setup>
import type { SiteRoute } from "../composables/use-site-menu";

const routes: SiteRoute[] = [
  {
    label: "tournament",
    to: "/tournaments",
  },
  {
    label: "team",
    to: "/teams",
  },
  {
    label: "cards",
    to: "/cards",
  },
  {
    label: "player",
    to: "/players",
  },
];
</script>
