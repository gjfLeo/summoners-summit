<template>
  <div grid="~ lg:cols-3 md:cols-2 justify-center justify-items-center" class="col-gap-4 row-gap-4">
    <template v-for="game in games" :key="`${game.id}-${game.winner}`">
      <div class="grid items-center" style="grid-template-columns: 1fr 2rem 1fr;">
        <div class="justify-self-center text-xs grid-col-1/4">{{ game.tournamentName }}{{ game.stageName }}{{ game.matchName }}{{ game.gameName }}</div>

        <div class="self-center justify-self-end">{{ game.playerA }}</div>
        <div />
        <div class="self-center justify-self-start">{{ game.playerB }}</div>

        <div class="self-center justify-self-end"><TeamAvatars :team="game.playerACharacters" /></div>
        <div class="self-center justify-self-center text-sm">VS</div>
        <div class="self-center justify-self-start"><TeamAvatars :team="game.playerBCharacters" /></div>

        <div class="flex justify-end gap-1 text-sm">
          <n-tooltip v-if="game.playerADeckId">
            <template #trigger>
              <NuxtLink :to="`/deck/${game.playerADeckId}`"><IconDeck class="opacity-75" /></NuxtLink>
            </template>
            <span>查看套牌</span>
          </n-tooltip>
          <div>{{ game.starter === 'A' ? '先手' : '后手' }}</div>
          <div :class="{ 'text-orange-500': game.winner === 'A' }">{{ game.winner === 'A' ? '胜' : '负' }}</div>
        </div>
        <div />
        <div class="flex justify-start gap-1 text-sm">
          <div :class="{ 'text-orange-500': game.winner === 'B' }">{{ game.winner === 'B' ? '胜' : '负' }}</div>
          <div>{{ game.starter === 'B' ? '先手' : '后手' }}</div>
          <n-tooltip v-if="game.playerBDeckId">
            <template #trigger>
              <NuxtLink :to="`/deck/${game.playerBDeckId}`"><IconDeck class="opacity-75" /></NuxtLink>
            </template>
            <span>查看套牌</span>
          </n-tooltip>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { Game } from "~/utils/types";

const props = defineProps<{
  games: Game[];
}>();
</script>
