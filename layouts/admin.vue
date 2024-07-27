<template>
  <SiteLayout :routes="routes" :style="{ '--g-header-color': adminColor }">
    <slot />
  </SiteLayout>
</template>

<script lang="ts" setup>
import type { SiteRoute } from "~/composables/use-site-menu";

const routes: SiteRoute[] = [
  {
    label: "tournaments",
    to: "/admin/tournaments",
    matches: [
      /^\/admin\/tournament\//,
    ],
    children: [
      {
        label: "tournamentList",
        to: "/admin/tournaments",
      },
      {
        label: "tournamentTemplate",
        to: "/admin/tournaments/templates",
      },
    ],
  },
  {
    label: "players",
    to: "/admin/players",
    children: [
      {
        label: "playerList",
        to: "/admin/players",
      },
      {
        label: "playerRanks",
        to: "/admin/players/ranks",
      },
    ],
  },
  {
    label: "others",
    children: [
      {
        label: "cards",
        to: "/admin/misc/cards",
      },
    ],
  },
];

const themeVars = useThemeVars();
const adminColor = computed(() => `color-mix(in oklch, transparent, ${themeVars.value.primaryColor} 16%)`);
</script>
