<template>
  <NH2>{{ t('main.team.decks') }}</NH2>
  <div un-grid="~ md:cols-15 sm:cols-10 cols-6 gap-2">
    <CardImage
      v-for="(card, index) in deckCards.actionCards"
      :key="card + (deckCards.actionCards[index - 1] === card ? '-2' : '')"
      :card="card"
    />
  </div>
  <div un-flex="~ items-center" class="mt-2">
    <div un-flex="~ items-center gap-2">
      <CommonIconButton
        icon="i-mingcute:left-line"
        :disabled="currentDeckIndex <= 0"
        @click="() => currentDeckIndex--"
      />
      <span>{{ currentDeckIndex + 1 }} / {{ decks.length }}</span>
      <CommonIconButton
        icon="i-mingcute:right-line"
        :disabled="currentDeckIndex >= decks.length - 1"
        @click="() => currentDeckIndex++"
      />
    </div>

    <div un-flex="~ items-center gap-4" class="ml-auto">
      <NuxtLinkLocale :to="`/deck/${deckCode}`">
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

<script lang="ts" setup>
const route = useRoute("team-teamId-gameVersion___zh");
const teamId = route.params.teamId;
const { gameVersion } = useGameVersion();

const { t } = useLocales();
const { decodeDeck } = useDeckEncoder();

const { decks } = await useApiGetTeamDecks({
  teamId,
  gameVersion: gameVersion.value,
});

const currentDeckIndex = ref(0);
const deckCode = computed(() => decks.value[currentDeckIndex.value].deckCode);
const deckCards = computed(() => decodeDeck(deckCode.value));

const { copy: copyShareCode } = useCopyDeckCode(deckCode);
</script>
