<template>
  <template v-for="matchList in matchesByTournament" :key="matchList[0].tournamentId">
    <NCard class="mt">
      <NH3>
        <NuxtLinkLocale :to="`/tournament/${matchList[0].tournamentId}`" no-prefetch>
          {{ matchList[0].gameVersion }}&#x2006;{{ matchList[0].tournamentName }}
        </NuxtLinkLocale>
      </NH3>

      <template v-for="match in matchList" :key="match.id">
        <NH4 class="flex flex-wrap items-baseline gap-2">
          <div>{{ match.partName }}</div>
          <div>{{ match.name }}</div>

          <!-- 小屏幕换行 -->
          <div class="h-0 w-full md:hidden" />
          <div class="text-base" :class="{ 'text-orange-500': match.winner === 'A' }"><PlayerName :id="match.playerAId" :nickname="match.playerANickname" /></div>
          <div class="text-sm">VS</div>
          <div class="text-base" :class="{ 'text-orange-500': match.winner === 'B' }"><PlayerName :id="match.playerBId" :nickname="match.playerBNickname" /></div>

          <!-- 右侧 -->
          <div class="ml-auto flex gap-2 text-sm text-gray">
            <LinkVideo v-if="match.video" :video="match.video" />
            <div>{{ match.date }}</div>
          </div>
        </NH4>
        <TournamentMatchGameList
          :player-a-id="match.playerAId"
          :player-a-nickname="match.playerANickname"
          :player-b-id="match.playerBId"
          :player-b-nickname="match.playerBNickname"
          :banned="match.banned"
          :games="match.gameIds.map(gId => games[gId])"
        />
      </template>
    </NCard>
  </template>
</template>

<script lang="ts" setup>
import type { Game, Match } from "~/utils/types";

const props = defineProps<{
  matches: Record<string, Match>;
  games: Record<string, Game>;
}>();

const matchesByTournament = computed(() => Object.values(groupBy(Object.values(props.matches), m => m.tournamentId)));
</script>
