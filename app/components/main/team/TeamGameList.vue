<template>
  <div class="flex flex-wrap gap-2">
    <TeamCharacterSelector v-model="opponentCharacters" :placeholder="t('main.team.gameList.opponentCharacters')" />
  </div>
  <template v-if="data">
    <GameList class="mt" :games="gameListFiltered" />
  </template>
  <template v-else-if="pending">
    <NSpin size="large" />
  </template>
</template>

<script lang="ts" setup>
const props = defineProps<{
  teamId: DeckTeamId;
  gameVersion: GameVersionId;
}>();
const { teamId, gameVersion } = toRefs(props);

const { t } = useLocales();

const opponentCharacters = ref<CardId[]>([]);

const { data, pending } = useLazyFetch("/api/v4/games", {
  query: {
    gameVersion: gameVersion.value,
    teamId: teamId.value,
  },
});

const gameListFiltered = computed(() => {
  return (data.value ?? [])
    .filter((game) => {
      const characters = getCharacterCardsByTeamId(game.playerBDeck.teamId);
      return opponentCharacters.value.every(character => characters.includes(character));
    });
});

function setOpponentTeamId(teamId: DeckTeamId) {
  opponentCharacters.value = getCharacterCardsByTeamId(teamId);
}
defineExpose({
  setOpponentTeamId,
});
</script>
