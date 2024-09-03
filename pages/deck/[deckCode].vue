<template>
  <div id="deck">
    <!-- 角色牌 -->
    <div un-grid="~ gap-4 cols-[1fr_auto_1fr]">
      <div />
      <div un-grid="~ gap-2 cols-[repeat(3,minmax(0,5rem))]">
        <template v-for="(card, i) in deckCards.characterCards" :key="i">
          <CardAvatar :card="card" class="w-5rem!" />
        </template>
      </div>
      <div class="flex flex-col items-start self-end justify-self-start gap-2">
        <CommonIconButton icon="i-mingcute:copy-line" @click="copyDeckCode">
          {{ $t('main.deck.copyDeckShareCode') }}
        </CommonIconButton>
        <NuxtLinkLocale :to="`/team/${teamId}`" prefetch>
          <CommonIconButton icon="i-mingcute:group-3-line">
            {{ $t('main.deck.teamDetail') }}
          </CommonIconButton>
        </NuxtLinkLocale>
      </div>
    </div>
    <!-- 行动牌 -->
    <DeckActionList :cards="deckCards.actionCards" class="mt" />

    <NH2 id="game-list">{{ t('main.deck.gameList') }}</NH2>
    <GameList :games="games" />

    <NH2 id="similar">{{ t('main.deck.similar') }}</NH2>
    <Deck_SimilarDecks v-bind="{ deckCode, deckList }" />

    <SitePageAnchors>
      <NAnchorLink :title="t('main.deck.deckDetail')" href="#deck" />
      <NAnchorLink :title="t('main.deck.gameList')" href="#game-list" />
      <NAnchorLink :title="t('main.deck.similar')" href="#similar" />
    </SitePageAnchors>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute("deck-deckCode___zh");
const deckCode = toBase64(route.params.deckCode);

const { t } = useLocales();
useHead({ title: t("site.titles.main.deck") });

const { awaitData } = useSharedData();
const { decodeDeck } = useDeckEncoder();

await awaitData();
const deckCards = decodeDeck(deckCode);
const teamId = getTeamId(deckCards.characterCards);

const { copy: copyDeckCode } = useCopyDeckCode(deckCode);

const { games } = await useApiGetGameList({ deckCode });

const { deckList } = await useApiGetDeckList({ teamId });
</script>
