<template>
  <SiteLayout :routes="routes">
    <NuxtPage />
  </SiteLayout>
</template>

<script lang="ts" setup>
import type { SiteRoute } from "../composables/use-site-menu";

const routes: SiteRoute[] = [
  {
    label: "tournaments",
    to: "/tournaments",
  },
  {
    label: "teams",
    to: "/teams",
  },
  {
    label: "cards",
    to: "/cards",
  },
  {
    label: "players",
    to: "/players",
  },
];
</script>
