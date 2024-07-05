<template>
  <SiteLayout :routes="routes" :style="{ '--g-header-color': adminColor }">
    <slot />
  </SiteLayout>
</template>

<script lang="ts" setup>
import type { SiteRoute } from "~/composables/use-site-menu";

const { t } = useLocales();
const route = useRoute();

useHead({
  title: computed(() => {
    const pageTitle = typeof route.meta.title === "string" ? t(route.meta.title as string) : null;
    return pageTitle
      ? t("site.titles.format", {
        pageTitle,
        siteTitle: t("site.name"),
      })
      : t("site.name");
  }),
});

const routes: SiteRoute[] = [
  {
    label: "tournament",
    to: "/admin/tournaments",
    matches: [
      /^\/admin\/tournament\/\w{16}$/,
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
    label: "player",
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
