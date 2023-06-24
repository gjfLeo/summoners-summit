<template>
  <n-h1>{{ tournament.name }}</n-h1>

  <template v-for="(stage, stageIndex) in tournament.stages" :key="stageIndex">
    <n-h2>{{ stage.name }}</n-h2>

    <template v-for="(part, partIndex) in stage.parts" :key="partIndex">
      <template v-for="(match, matchIndex) in part.matches" :key="matchIndex">
        <n-h3 class="flex flex-wrap items-baseline gap-2">
          <div v-if="stage.parts.length > 1">{{ part.name }}</div>
          <div v-if="part.matches.length > 1">第{{ matchIndex + 1 }}场</div>
          <div class="h-0 w-full md:hidden" />
          <div class="text-base" :class="{ 'text-orange-500': match.winner === 'A' }">{{ match.playerA }}</div>
          <div class="text-sm">VS</div>
          <div class="text-base" :class="{ 'text-orange-500': match.winner === 'B' }">{{ match.playerB }}</div>

          <!-- 右侧 -->
          <div class="ml-auto text-sm text-gray">{{ part.date }}</div>
          <n-tooltip
            trigger="hover"
          >
            <template #trigger>
              <NuxtLink class="translate-y-1 text-sm text-gray" :to="match.video" target="_blank">
                <div class="i-carbon:video" />
              </NuxtLink>
            </template>
            <span>观看录像</span>
          </n-tooltip>
        </n-h3>
        <GameList :list="match.games.map(game => game.id)" />
      </template>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { tournamentById } from "~/data";

const route = useRoute();
const tournamentId = computed(() => route.params.tournamentId as string);
const tournament = tournamentById[tournamentId.value];
</script>
