<template>
  <template v-if="decksData && decksData.length > 0 && deck">
    <DeckActionList :cards="deckCards.actionCards" />

    <div un-flex="~ items-center wrap gap-x-4 gap-y-2" class="mt-2">
      <div un-flex="~ items-center gap-2">
        <CommonIconButton
          icon="i-mingcute:left-line"
          :disabled="currentDeckIndex <= 0"
          @click="() => currentDeckIndex--"
        />
        <span>{{ currentDeckIndex + 1 }} / {{ decksData.length }}</span>
        <CommonIconButton
          icon="i-mingcute:right-line"
          :disabled="currentDeckIndex >= decksData.length - 1"
          @click="() => currentDeckIndex++"
        />
        <div un-flex="~ items-center">
          <TransitionGroup name="common-transition-group">
            <CardAvatar
              v-for="(card) in deckCards.characterCards" :key="card"
              class="mr--1 h-8 last-mr-0"
              :card="card"
            />
          </TransitionGroup>
        </div>
      </div>

      <div un-flex="~ items-center gap-4" class="md:ml-auto">
        <NuxtLinkLocale :to="{ path: `/deck/${teamId}/${toBase64Url(deckCode)}` }">
          <CommonIconButton
            :scale="0.9"
            icon-data-url="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE5IDBIOUM3LjkgMCA3IC45IDcgMnYxNmMwIDEuMS45IDIgMiAyaDEwYzEuMSAwIDItLjkgMi0yVjJjMC0xLjEtLjktMi0yLTJtMCAxOEg5VjJoMTB6TTMgNHYxOGMwIDEuMS45IDIgMiAyaDEydi0ySDVWNHptMTEgMWwtMyA1bDMgNWwzLTV6Ii8+PC9zdmc+"
          >
            {{ t('main.team.viewDeckDetails') }}
          </CommonIconButton>
        </NuxtLinkLocale>
        <CommonIconButton
          icon="i-mingcute:copy-line"
          @click="copyShareCode"
        >
          {{ t('main.deck.copyDeckShareCode') }}
        </CommonIconButton>
      </div>
    </div>
  </template>
  <template v-else-if="decksLoading">
    <NSpin size="large" />
  </template>
</template>

<script lang="ts" setup>
await useAsyncSharedData();

const route = useRoute("team-teamId-gameVersion___zh");
const teamId = route.params.teamId;
const { gameVersion } = useGameVersion();

const { t } = useLocales();
const { decodeDeck } = useDeckEncoder();

const { data: decksData, pending: decksLoading } = await useFetch(`/api/v4/teams/${teamId}/decks-stats`, {
  query: {
    gameVersion: gameVersion.value,
    sortBy: "distanceToAverage",
  },
});

const currentDeckIndex = ref(0);
const deck = computed(() => decksData.value?.[currentDeckIndex.value]);
const deckCode = computed(() => deck.value?.deckCode ?? "");
const deckCards = computed(() => deckCode.value ? decodeDeck(deckCode.value) : { actionCards: [], characterCards: [] });

const { copy: copyShareCode } = useCopyDeckCode(deckCode);
</script>
