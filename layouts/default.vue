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
    // icon: "i-mingcute:medal-line",
  },
  {
    label: "teams",
    to: "/teams",
    // icon: "i-mingcute:group-3-line",
  },
  {
    label: "cards",
    to: "/cards",
  },
  {
    label: "players",
    to: "/players",
    // icon: "i-mingcute:user-4-line",
  },
];
</script>
