<template>
  <NH1>{{ player.uniqueName }}</NH1>
  <NText v-if="player.aliases?.length" class="mt block" :depth="3">{{ $t('player.otherNicknames', [player.aliases.join("\u2006/\u2006")]) }}</NText>
  <NText v-if="player.awards?.length" class="mt block" :depth="2">{{ player.awards.join("、") }}</NText>

  <div v-if="player.achievements?.length">
    <NCard v-for="achievement in player.achievements" :key="achievement" class="mt">
      <div class="flex items-center gap-4">
        <img
          :src="ALL_ACHIEVEMENTS[achievement].cardBackImage" :alt="ALL_ACHIEVEMENTS[achievement].cardBackName"
          class="inline-block aspect-ratio-200/343 h-30 object-cover"
        />
        <div class="flex flex-col gap-2">
          <NText :depth="1" class="text-120%">{{ ALL_ACHIEVEMENTS[achievement].cardBackName }}</NText>
          <NText :depth="2">{{ ALL_ACHIEVEMENTS[achievement].description }}</NText>
          <NText v-if="ALL_ACHIEVEMENTS[achievement].flavorText" :depth="3">{{ ALL_ACHIEVEMENTS[achievement].flavorText }}</NText>
        </div>
      </div>
    </NCard>
  </div>

  <PlayerStatsByVersionChart :stats-by-version="statsByVersion" />
  <PlayerStatsStatistics :stats-by-version="statsByVersion" />
  <div class="flex justify-end">
    <NText class="flex gap-2 text-sm" :depth="3">
      <span>{{ $t('player.referenceOnly') }}</span>
    </NText>
  </div>

  <NH2>{{ $t('player.gameList') }}</NH2>
  <PlayerMatchList :matches="matches" :games="games" />
</template>

<script lang="ts" setup>
import { ALL_ACHIEVEMENTS } from "~/utils/achievements";

const route = useRoute();
const playerId = route.params.playerId as string;

const { player } = await useApiPlayer(playerId);

const { t } = useI18n();
useHead({ title: t("site.titleFormatWithName", [player.uniqueName, t("menu.playerStats"), t("site.name")]) });

const { matches, games } = await useApiPlayerMatches(playerId);

const { statsByVersion } = await useApiPlayerStatsByVersion(playerId);
</script>
