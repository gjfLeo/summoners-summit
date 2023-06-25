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
          <div class="ml-auto flex gap-2 text-sm text-gray">
            <n-tooltip
              v-if="match.video"
              trigger="hover"
            >
              <template #trigger>
                <NuxtLink :to="match.video" target="_blank">
                  <n-icon><div class="i-carbon:video" /></n-icon>
                </NuxtLink>
              </template>
              <span>观看录像</span>
            </n-tooltip>
            <div>{{ part.date }}</div>
          </div>
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

useHead({ title: `${tournament.name} - 赛事记录 | 召唤之巅` });
</script>
