<template>
  <div class="flex flex-wrap gap-2">
    <TeamCharacterSelector v-model="opponentCharacters" :placeholder="t('main.team.gameList.opponentCharacters')" />
  </div>
  <GameList class="mt" :games="gameListFiltered" />
</template>

<script lang="ts" setup>
import type { CardId, DeckTeamId, GameDetail } from "~/types";

const props = defineProps<{
  games: GameDetail[];
}>();
const { games: gameList } = toRefs(props);

const { t } = useLocales();

const opponentCharacters = ref<CardId[]>([]);

const gameListFiltered = computed(() => {
  return gameList.value
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
