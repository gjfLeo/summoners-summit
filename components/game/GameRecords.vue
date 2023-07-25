<template>
  <div grid="~ justify-center" class="gap-4" style="grid-template-columns: repeat(auto-fill, 22rem);">
    <template v-for="game in games" :key="`${game.id}-${game.winner}`">
      <n-card>
        <div class="grid max-w-md" style="grid-template-columns: 1fr 2rem 1fr;">
          <!-- 赛事和对局名称 -->
          <div class="grid-col-1/4">
            <div class="flex items-center justify-between">
              <NuxtLink class="text-sm" :to="`/tournament/${game.tournamentId}`">
                {{ game.gameVersion }} {{ game.tournamentName }}
              </NuxtLink>
              <n-text :depth="3" class="flex gap-2 text-xs">
                <n-tooltip
                  v-if="game.video"
                  trigger="hover"
                >
                  <template #trigger>
                    <NuxtLink :to="game.video" target="_blank">
                      <n-icon><div class="i-carbon:video" /></n-icon>
                    </NuxtLink>
                  </template>
                  <span>观看录像</span>
                </n-tooltip>
                <div>{{ game.date }}</div>
              </n-text>
            </div>
          </div>
          <div class="pb-2 text-xs grid-col-1/4">
            {{ game.stageName }} {{ game.matchName }}{{ game.gameName }}
          </div>

          <div class="self-center justify-self-end"><PlayerName :player="game.playerA" /></div>
          <div />
          <div class="self-center justify-self-start"><PlayerName :player="game.playerB" /></div>

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
      </n-card>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { Game } from "~/utils/types";

defineProps<{
  games: Game[];
}>();
</script>
