<template>
  <NH3 flex="~ wrap items-baseline gap-2">
    <div v-if="partName">{{ partName }}</div>
    <div v-if="match.name">{{ match.name }}</div>

    <!-- 小屏幕换行 -->
    <div class="h-0 w-full md:hidden" />
    <div class="text-base" :class="{ 'text-orange-500': match.winner === 'A' }"><PlayerName :player="match.playerA " /></div>
    <div class="text-sm">VS</div>
    <div class="text-base" :class="{ 'text-orange-500': match.winner === 'B' }"><PlayerName :player="match.playerB " /></div>

    <!-- 右侧 -->
    <div class="ml-auto flex gap-2 text-sm text-gray">
      <LinkVideo v-if="match.video" :video="match.video" />
      <div>{{ match.date }}</div>
    </div>
  </NH3>

  <div grid="~ lg:cols-3 md:cols-2 row-gap-4">
    <!-- class="row-gap-4 grid justify-center justify-items-center lg:grid-cols-3 md:grid-cols-2" -->
    <template v-for="game in games" :key="game.id">
      <!-- <div>{{ game }}</div> -->
      <div class="grid items-center" style="grid-template-columns: 1fr 2rem 1fr;">
        <div class="self-center justify-self-end text-sm"><PlayerName :player="match.playerA" /></div>
        <div />
        <div class="self-center justify-self-start text-sm"><PlayerName :player="match.playerB" /></div>

        <div class="flex self-center justify-self-end"><TeamAvatars :team="game.playerACharacters" /></div>
        <div class="self-center justify-self-center text-sm">VS</div>
        <div class="flex self-center justify-self-start"><TeamAvatars :team="game.playerBCharacters" /></div>

        <div class="flex justify-end gap-1 text-sm">
          <LinkDeck v-if="game.playerADeckId" :deck-id="game.playerADeckId" />
          <div>{{ game.starter === 'A' ? '先手' : '后手' }}</div>
          <div :class="{ 'text-orange-500': game.winner === 'A' }">{{ game.winner === 'A' ? '胜' : '负' }}</div>
        </div>
        <div />
        <div class="flex justify-start gap-1 text-sm">
          <div :class="{ 'text-orange-500': game.winner === 'B' }">{{ game.winner === 'B' ? '胜' : '负' }}</div>
          <div>{{ game.starter === 'B' ? '先手' : '后手' }}</div>
          <LinkDeck v-if="game.playerBDeckId" :deck-id="game.playerBDeckId" />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { NH3 } from "naive-ui";
import type { ApiTournamentDetails } from "~/composables/use-api-tournament-detail";

defineProps<{
  partName?: string;
  match: ApiTournamentDetails["matches"][string];
  games: ApiTournamentDetails["games"];
}>();
</script>
