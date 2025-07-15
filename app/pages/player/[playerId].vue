<template>
  <div v-if="player">
    <NH1 :id="player.uniqueName">{{ player.uniqueName }}</NH1>
    <NText v-if="player.aliases?.length" class="mt block" :depth="3">
      {{ t('main.player.otherNicknames1', [player.aliases.join("\u2006/\u2006")]) }}
    </NText>
    <NText v-if="championsText || championsLoading" class="mt block" :depth="2">
      <template v-if="!championsLoading">
        {{ t('main.player.championOf', [championsText]) }}
      </template>
      <template v-else>
        <NSkeleton text style="max-width: max(50%, 20em);" />
      </template>
    </NText>

    <div v-if="player.achievements?.length">
      <NCard v-for="achievement in player.achievements" :key="achievement.id" class="mt">
        <div class="flex items-center gap-4">
          <NImage
            :src="achievement.imageUrl" :alt="currentLocalized(achievement.name)"
            class="inline-block aspect-ratio-200/343 h-30 object-cover"
          />
          <div class="flex flex-col gap-2">
            <NText :depth="1">{{ currentLocalized(achievement.name) }}</NText>
            <NText :depth="2" class="text-sm">{{ currentLocalized(achievement.description) }}</NText>
            <NText :depth="3" class="text-sm">{{ currentLocalized(achievement.flavorText) }}</NText>
          </div>
        </div>
      </NCard>
    </div>

    <NH2 id="stats">{{ t('main.player.stats') }}</NH2>
    <ClientOnly>
      <Player_StatsByVersion v-bind="{ statsByVersion }" />
    </ClientOnly>

    <NH2 id="recent">{{ t('main.player.recent') }}</NH2>
    <template v-if="!matchesLoading">
      <Player_Matches :matches="matches" />
    </template>
    <template v-else>
      <NSpin size="large" />
    </template>

    <SitePageAnchors>
      <NAnchorLink :title="t('main.player.playerDetail')" :href="`#${player.uniqueName}`">
        <NAnchorLink :title="t('main.player.stats')" href="#stats" />
        <NAnchorLink :title="t('main.player.recent')" href="#recent" />
      </NAnchorLink>
    </SitePageAnchors>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute("player-playerId___zh");
const playerId = route.params.playerId;

const { t, currentLocalized } = useLocales();

const { data: player } = await useFetch(`/api/v4/players/${playerId}/details`);

useHead({ title: player.value ? player.value.uniqueName : t("site.titles.main.player") });

const { data: statsByVersion } = await useFetch(`/api/v4/players/${playerId}/stats-by-version`);

const { data: matches, pending: matchesLoading } = useLazyFetch("/api/v4/matches", {
  query: { playerId, limit: 10 },
});

const { data: champions, pending: championsLoading } = useLazyFetch(`/api/v4/players/${playerId}/champions`);
const championsText = computed(() => {
  if (!champions.value) return undefined;
  return champions.value
    .map(c => `${c.gameVersion} ${currentLocalized(c.tournamentName)}`)
    .join("\u2006/\u2006");
});
</script>
