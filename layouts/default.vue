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
    matches: [
      /^\/tournament\//,
    ],
  },
  {
    label: "teams",
    to: "/teams",
    // icon: "i-mingcute:group-3-line",
    matches: [
      /^\/team\//,
    ],
  },
  {
    label: "cards",
    to: "/cards",
  },
  {
    label: "players",
    to: "/players",
    // icon: "i-mingcute:user-4-line",
    matches: [
      /^\/player\//,
    ],
  },
  {
    label: "tools",
    children: [
      {
        label: "decodeDeckCode",
        to: "/tools/decode-deck-code",
      },
    ],
  },
];
</script>
