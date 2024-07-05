<template>
  <div id="deck">
    <!-- 角色牌 -->
    <div un-grid="~ gap-2 cols-[1fr_repeat(3,minmax(0,8rem))_1fr]">
      <div />
      <template v-for="(card, i) in deckCards.characterCards" :key="i">
        <CardImage :card="card" class="w-100%" />
      </template>
      <div class="flex flex-col self-end justify-self-start gap-2">
        <NButton @click="copyDeckCode">{{ $t('main.deck.copyDeckShareCode') }}</NButton>
        <NuxtLinkLocale :to="`/team/${teamId}`" prefetch>
          <NButton>{{ $t('main.deck.teamDetail') }}</NButton>
        </NuxtLinkLocale>
      </div>
    </div>
    <!-- 行动牌 -->
    <div un-grid="~ gap-2 cols-6 md:cols-10" class="mt">
      <template v-for="(card, i) in deckCards.actionCards" :key="i">
        <CardImage :card="card" class="w-100%" />
      </template>
    </div>

    <NH2 id="game-list">{{ t('main.deck.gameList') }}</NH2>
    <GameList :games="games" />

    <SitePageAnchors>
      <NAnchorLink :title="t('main.deck.deckDetail')" href="#deck" />
      <NAnchorLink :title="t('main.deck.gameList')" href="#game-list" />
    </SitePageAnchors>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute("deck-deckCode___zh");
const deckCode = toBase64(route.params.deckCode);

const { t } = useLocales();
const { awaitData } = useSharedData();
const { decodeDeck } = useDeckEncoder();

await awaitData();
const deckCards = decodeDeck(deckCode);
const teamId = deckCards.characterCards.toSorted().join("-");

const { copy: copyDeckCode } = useCopyDeckCode(deckCards);

const { games } = await useApiGetGameList({ deckCode });
</script>
