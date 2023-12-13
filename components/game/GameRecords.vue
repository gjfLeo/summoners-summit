<template>
  <div grid="~ justify-center" class="gap-4" style="grid-template-columns: repeat(auto-fill, 22rem);">
    <template v-for="game in games" :key="`${game.id}-${game.winner}`">
      <NCard>
        <div class="grid max-w-md" style="grid-template-columns: 1fr 2rem 1fr;">
          <!-- 赛事和对局名称 -->
          <div class="grid-col-1/4">
            <div class="flex items-center justify-between">
              <NuxtLink class="text-sm" :to="`/tournament/${game.tournamentId}`" no-prefetch>
                {{ game.gameVersion }} {{ game.tournamentName }}
              </NuxtLink>
              <NText :depth="3" class="flex gap-2 text-xs">
                <LinkVideo v-if="game.video" :video="game.video" />
                <div>{{ game.date }}</div>
              </NText>
            </div>
          </div>
          <div class="pb-2 text-xs grid-col-1/4">
            {{ game.gameName }}
          </div>

          <div class="self-center justify-self-end"><PlayerName :id="game.playerAId" :nickname="game.playerANickname" /></div>
          <div />
          <div class="self-center justify-self-start"><PlayerName :id="game.playerBId" :nickname="game.playerBNickname" /></div>

          <div class="self-center justify-self-end"><TeamAvatars :team="game.playerACharacters" /></div>
          <div class="self-center justify-self-center text-sm">VS</div>
          <div class="self-center justify-self-start"><TeamAvatars :team="game.playerBCharacters" /></div>

          <div class="flex justify-end gap-1 text-sm">
            <LinkDeck v-if="game.playerADeckId" :deck-id="game.playerADeckId" />
            <div v-if="game.starter">{{ game.starter === 'A' ? '先手' : '后手' }}</div>
            <div :class="{ 'text-orange-500': game.winner === 'A' }">{{ game.winner === 'A' ? '胜' : '负' }}</div>
          </div>
          <div />
          <div class="flex justify-start gap-1 text-sm">
            <div :class="{ 'text-orange-500': game.winner === 'B' }">{{ game.winner === 'B' ? '胜' : '负' }}</div>
            <div v-if="game.starter">{{ game.starter === 'B' ? '先手' : '后手' }}</div>
            <LinkDeck v-if="game.playerBDeckId" :deck-id="game.playerBDeckId" />
          </div>
        </div>
      </NCard>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { Game } from "~/utils/types";

defineProps<{
  games: Game[];
}>();
</script>
