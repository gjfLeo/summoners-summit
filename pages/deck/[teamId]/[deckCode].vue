<template>
  <div id="deck">
    <!-- 角色牌 -->
    <div un-grid="~ gap-4 cols-[1fr_auto_1fr]">
      <div />
      <div un-grid="~ gap-2 cols-[repeat(3,minmax(0,5rem))]">
        <template v-for="(card, i) in characterCards" :key="i">
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
    <DeckActionList :cards="actionCards" class="mt" />

    <NH2 id="game-list">{{ t('main.deck.gameList') }}</NH2>
    <GameList :games="games" />

    <NH2 id="similar">{{ t('main.deck.similar') }}</NH2>
    <ClientOnly>
      <Deck_SimilarDecks v-bind="{ teamId, deckCode, deckList }" />
    </ClientOnly>

    <SitePageAnchors>
      <NAnchorLink :title="t('main.deck.deckDetail')" href="#deck" />
      <NAnchorLink :title="t('main.deck.gameList')" href="#game-list" />
      <NAnchorLink :title="t('main.deck.similar')" href="#similar" />
    </SitePageAnchors>
  </div>
</template>

<script lang="ts" setup>
import type { CardId } from "~/types";

const route = useRoute("deck-teamId-deckCode___zh");
const teamId = route.params.teamId;
const deckCode = toBase64(route.params.deckCode);

const { t } = useLocales();
useHead({ title: t("site.titles.main.deck") });

// const { awaitData } = useSharedData();
const { decodeDeck } = useDeckEncoder();

const characterCards = ref<CardId[]>([]);
const actionCards = ref<CardId[]>([]);
onMounted(() => {
  if (!import.meta.client) return;
  const cards = decodeDeck(deckCode);
  characterCards.value = cards.characterCards;
  actionCards.value = cards.actionCards;
});

const { copy: copyDeckCode } = useCopyDeckCode(deckCode);

const { games } = await useApiGetGameList({ deckCode });
const { deckList } = await useApiGetDeckList({ teamId });
</script>
