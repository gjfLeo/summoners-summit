<script lang="ts" setup>
import type { Game, GameId, Match } from "~/types";

defineProps<{
  match: Match;
  games: Record<GameId, Game>;
}>();
</script>

<template>
  <div un-grid="~ lg:cols-3 md:cols-2 row-gap-4 col-gap-4">
    <template v-for="(ban, banIndex) in match.bans ?? []" :key="banIndex">
      <div
        un-grid="~ items-center cols-[1fr_2rem_1fr]"
        un-border="~ not-hover:transparent rd"
        class="box-border cursor-default p-4 transition-200"
      >
        <div class="self-center justify-self-end text-sm">
          <PlayerName :id="match.playerA.playerId" :nickname="match.playerA.nickname" />
        </div>
        <div />
        <div class="self-center justify-self-start text-sm">
          <PlayerName :id="match.playerB.playerId" :nickname="match.playerB.nickname" />
        </div>

        <div class="flex self-center justify-self-end">
          <TeamAvatars v-if="ban.banType === 'character'" style="filter: grayscale(0.5)" :team="ban.playerACardId" />
          <TeamAvatars v-if="ban.banType === 'team'" style="filter: grayscale(0.5)" :team="ban.playerATeamId" />
        </div>
        <div class="self-center justify-self-center text-sm" />
        <div class="flex self-center justify-self-start">
          <TeamAvatars v-if="ban.banType === 'character'" style="filter: grayscale(0.5)" :team="ban.playerBCardId" />
          <TeamAvatars v-if="ban.banType === 'team'" style="filter: grayscale(0.5)" :team="ban.playerBTeamId" />
        </div>

        <div class="flex justify-end gap-1 text-sm">
          <div class="text-gray">{{ $t('main.gameInfo.banned') }}</div>
        </div>
        <div />
        <div class="flex justify-start gap-1 text-sm">
          <div class="text-gray">{{ $t('main.gameInfo.banned') }}</div>
        </div>
      </div>
    </template>
    <template v-for="gameId in match.gameIds" :key="gameId">
      <div
        un-grid="~ items-center cols-[1fr_2rem_1fr]"
        un-border="~ not-hover:transparent rd"
        class="game-card relative box-border cursor-default p-4 transition-200"
      >
        <div class="self-center justify-self-end text-sm">
          <PlayerName :id="match.playerA.playerId" :nickname="match.playerA.nickname" />
        </div>
        <div />
        <div class="self-center justify-self-start text-sm">
          <PlayerName :id="match.playerB.playerId" :nickname="match.playerB.nickname" />
        </div>

        <div class="flex self-center justify-self-end">
          <TeamAvatars :team="games[gameId].playerADeck.characters" />
        </div>
        <div class="self-center justify-self-center text-sm">VS</div>
        <div class="flex self-center justify-self-start">
          <TeamAvatars :team="games[gameId].playerBDeck.characters" />
        </div>

        <div class="flex justify-end gap-1 text-sm">
          <LinkDeck v-if="games[gameId].playerADeck.deckCode" :deck-code="games[gameId].playerADeck.deckCode" />
          <div v-if="games[gameId].starter">{{ games[gameId].starter === 'A' ? $t('main.gameInfo.firstMove') : $t('main.gameInfo.secondMove') }}</div>
          <div :class="{ 'text-orange-500': games[gameId].winner === 'A' }">{{ games[gameId].winner === 'A' ? $t('main.gameInfo.win') : $t('main.gameInfo.lose') }}</div>
        </div>
        <div />
        <div class="flex justify-start gap-1 text-sm">
          <div :class="{ 'text-orange-500': games[gameId].winner === 'B' }">{{ games[gameId].winner === 'B' ? $t('main.gameInfo.win') : $t('main.gameInfo.lose') }}</div>
          <div v-if="games[gameId].starter">{{ games[gameId].starter === 'B' ? $t('main.gameInfo.firstMove') : $t('main.gameInfo.secondMove') }}</div>
          <LinkDeck v-if="games[gameId].playerBDeck.deckCode" :deck-code="games[gameId].playerBDeck.deckCode" />
        </div>

        <div class="video absolute right-2 top-2 transition-200">
          <LinkVideo v-if="games[gameId].gameVideo ?? match.video" :video="games[gameId].gameVideo ?? match.video!" />
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.game-card:not(:hover) .video {
  opacity: 0;
}
</style>
