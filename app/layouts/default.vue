<template>
  <SiteLayout v-if="!needRedirect" :routes="routes">
    <NuxtPage />
  </SiteLayout>
</template>

<script lang="ts" setup>
import type { SiteRoute } from "../composables/use-site-menu";

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const needRedirect = runtimeConfig.public.needRedirect;
const { setNotificationReadVersion, showNotification } = useSiteNotification();
const urlSearch = useUrlSearchParams();
if (needRedirect && import.meta.client && !import.meta.dev) {
  window.location.href = "https://summoners.top?fromOldDomain=1";
}
onMounted(() => {
  if (route.query.fromOldDomain || (import.meta.dev && needRedirect)) {
    delete urlSearch.fromOldDomain;
    setNotificationReadVersion("changeDomain", 0);
    showNotification("changeDomain");
  }
});

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
