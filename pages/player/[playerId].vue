<template>
  <div v-if="player">
    <NH1 :id="player.uniqueName">{{ player.uniqueName }}</NH1>
    <NText v-if="player.aliases?.length" class="mt block" :depth="3">
      {{ t('main.player.otherNicknames1', [player.aliases.join("\u2006/\u2006")]) }}
    </NText>
    <NText v-if="player.champions?.length" class="mt block" :depth="2">
      {{ t('main.player.championOf', [player.champions.map(tournament => `${tournament.gameVersion} ${currentLocalized(tournament.name)}`).join("\u2006/\u2006")]) }}
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
    <Player_StatsByVersion v-bind="{ statsByVersion }" />

    <NH2 id="recent">{{ t('main.player.recent') }}</NH2>
    <Player_Matches v-bind="{ matchList, games }" />

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

const { player } = await useApiGetPlayerDetail(playerId);

useHead({ title: player.value ? player.value.uniqueName : t("site.titles.main.player") });

const { statsByVersion } = await useApiGetPlayerStatsByVersion(playerId);
const { matchList, games } = await useApiGetPlayerMatches(playerId);
</script>
