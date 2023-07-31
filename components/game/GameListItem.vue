<template>
  <div class="grid items-center" style="grid-template-columns: 1fr 2rem 1fr;">
    <div class="self-center justify-self-end"><PlayerName :player="game.playerA" /></div>
    <div />
    <div class="self-center justify-self-start"><PlayerName :player="game.playerB" /></div>

    <div class="self-center justify-self-end"><TeamAvatars :team="game.playerACharacters" /></div>
    <div class="self-center justify-self-center text-sm">VS</div>
    <div class="self-center justify-self-start"><TeamAvatars :team="game.playerBCharacters" /></div>

    <div class="flex justify-end gap-1 text-sm">
      <n-tooltip v-if="game.playerADeckId">
        <template #trigger>
          <NuxtLink :to="`/deck/${game.playerADeckId}`" no-prefetch><IconDeck class="opacity-75" /></NuxtLink>
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
          <NuxtLink :to="`/deck/${game.playerBDeckId}`" no-prefetch><IconDeck class="opacity-75" /></NuxtLink>
        </template>
        <span>查看套牌</span>
      </n-tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gameById } from "~/data";

const props = defineProps<{
  id: string;
}>();

const game = computed(() => gameById[props.id]);
</script>
