<template>
  <div grid="~ lg:cols-3 md:cols-2 row-gap-4">
    <template v-for="(ban, banIndex) in banned ?? []" :key="banIndex">
      <div class="grid items-center" style="grid-template-columns: 1fr 2rem 1fr;">
        <div class="self-center justify-self-end text-sm">
          <PlayerName :id="playerAId" :nickname="playerANickname" />
        </div>
        <div />
        <div class="self-center justify-self-start text-sm">
          <PlayerName :id="playerBId" :nickname="playerBNickname" />
        </div>

        <div class="flex self-center justify-self-end"><TeamAvatars style="filter: grayscale(0.5)" :team="ban.playerACharacters" /></div>
        <div class="self-center justify-self-center text-sm">VS</div>
        <div class="flex self-center justify-self-start"><TeamAvatars style="filter: grayscale(0.5)" :team="ban.playerBCharacters" /></div>

        <div class="flex justify-end gap-1 text-sm">
          <LinkDeck v-if="ban.playerADeckId" :deck-id="ban.playerADeckId" />
          <div class="text-gray">被禁用</div>
        </div>
        <div />
        <div class="flex justify-start gap-1 text-sm">
          <div class="text-gray">被禁用</div>
          <LinkDeck v-if="ban.playerBDeckId" :deck-id="ban.playerBDeckId" />
        </div>
      </div>
    </template>
    <!-- class="row-gap-4 grid justify-center justify-items-center lg:grid-cols-3 md:grid-cols-2" -->
    <template v-for="game in games" :key="game.id">
      <!-- <div>{{ game }}</div> -->
      <div class="grid items-center" style="grid-template-columns: 1fr 2rem 1fr;">
        <div class="self-center justify-self-end text-sm">
          <PlayerName :id="game.playerAId ?? playerAId" :nickname="game.playerANickname ?? playerANickname" />
        </div>
        <div />
        <div class="self-center justify-self-start text-sm">
          <PlayerName :id="game.playerBId ?? playerBId" :nickname="game.playerBNickname ?? playerBNickname" />
        </div>

        <div class="flex self-center justify-self-end"><TeamAvatars :team="game.playerACharacters" /></div>
        <div class="self-center justify-self-center text-sm">VS</div>
        <div class="flex self-center justify-self-start"><TeamAvatars :team="game.playerBCharacters" /></div>

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
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { Game, Match } from "~/utils/types";

defineProps<{
  playerAId?: string;
  playerANickname: string;
  playerBId?: string;
  playerBNickname: string;
  banned?: Match["banned"];
  games: (Pick<Game, `player${"A" | "B"}${"Characters" | "DeckId"}` | "starter" | "winner"> & Partial<Game>)[];
}>();
</script>
