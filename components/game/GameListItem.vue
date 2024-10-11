<template>
  <NCard>
    <div class="max-w-md" un-grid="~ cols-[1fr_2rem_1fr]">
      <!-- 赛事和对局名称 -->
      <div class="grid-col-[1/4]">
        <div class="flex items-center justify-between">
          <NuxtLinkLocale class="text-sm" :to="`/tournament/${game.tournamentId}`" no-prefetch>
            {{ game.gameVersion }} {{ currentLocalized(game.tournamentName) }}
          </NuxtLinkLocale>
          <NText :depth="3" class="flex items-center gap-2 text-xs">
            <LinkVideo v-if="game.gameVideo" :video="game.gameVideo" />
            <LinkVideo v-else-if="game.matchVideo" :video="game.matchVideo" />
            <div>{{ game.date }}</div>
          </NText>
        </div>
      </div>
      <div class="grid-col-[1/4] pb-2 text-xs">
        {{ currentLocalized(game.stageName) }} {{ currentLocalized(game.partName) }} {{ t("main.tournament.matchNameDefault", [game.matchIndex + 1]) }}
      </div>

      <div class="self-center justify-self-end"><PlayerName :id="game.playerA.playerId" :nickname="game.playerA.nickname" /></div>
      <div />
      <div class="self-center justify-self-start"><PlayerName :id="game.playerB.playerId" :nickname="game.playerB.nickname" /></div>

      <div class="self-center justify-self-end"><TeamAvatars :team="game.playerADeck.teamId" /></div>
      <div class="self-center justify-self-center text-sm">VS</div>
      <div class="self-center justify-self-start"><TeamAvatars :team="game.playerBDeck.teamId" /></div>

      <div class="flex justify-end gap-1 text-sm">
        <LinkDeck
          v-if="game.playerADeck.deckCode && showDeckLink"
          :team-id="game.playerADeck.teamId"
          :deck-code="game.playerADeck.deckCode"
        />
        <div v-if="game.starter">{{ game.starter === 'A' ? t('main.gameInfo.firstMove') : t('main.gameInfo.secondMove') }}</div>
        <div :class="{ 'text-orange-500': game.winner === 'A' }">{{ game.winner === 'A' ? t('main.gameInfo.win') : t('main.gameInfo.lose') }}</div>
      </div>
      <div />
      <div class="flex justify-start gap-1 text-sm">
        <div :class="{ 'text-orange-500': game.winner === 'B' }">{{ game.winner === 'B' ? t('main.gameInfo.win') : t('main.gameInfo.lose') }}</div>
        <div v-if="game.starter">{{ game.starter === 'B' ? t('main.gameInfo.firstMove') : t('main.gameInfo.secondMove') }}</div>
        <LinkDeck
          v-if="game.playerBDeck.deckCode && showDeckLink"
          :team-id="game.playerBDeck.teamId"
          :deck-code="game.playerBDeck.deckCode"
        />
      </div>
    </div>
  </NCard>
</template>

<script lang="ts" setup>
import type { GameDetail } from "~/types";

const props = defineProps<{
  game: GameDetail;
}>();

const { t, currentLocalized } = useLocales();
const { gameVersionList } = await useAsyncSharedData();

const showDeckLink = computed(() => {
  return gameVersionList.value.map(v => v.id).includes(props.game.gameVersion);
});
</script>
