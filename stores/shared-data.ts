import type { ActionCardInfo, CardId, CharacterCardInfo, GameVersion, TournamentType } from "~/types/data";

function toComputed<T>(r: Ref<T>) {
  return computed(() => r.value);
}

const useSharedDataStore = defineStore("shared", () => {
  const gameVersionList = ref<GameVersion[]>([]);
  const gameVersionLatest = computed(() => {
    return gameVersionList.value.length ? gameVersionList.value[0].id : undefined;
  });
  async function fetchGameVersionData() {
    const data = await $fetch("/api/v3/game-versions/list");
    gameVersionList.value = data.gameVersionList;
  }
  onMounted(fetchGameVersionData);

  const tournamentTypeList = ref<TournamentType[]>([]);
  async function fetchTournamentTypeData() {
    const data = await $fetch("/api/v3/tournaments/getTypeList");
    tournamentTypeList.value = data.tournamentTypeList;
  }
  onMounted(fetchTournamentTypeData);

  const characterCardById = ref<Record<CardId, CharacterCardInfo>>({});
  const actionCardById = ref<Record<CardId, ActionCardInfo>>({});
  const characterCardIds = computed(() => {
    return Object.keys(characterCardById.value);
  });
  const actionCardIds = computed(() => {
    return Object.keys(actionCardById.value);
  });
  async function fetchCardData() {
    const data = await $fetch("/api/v3/cards/getCards");
    characterCardById.value = data.characterCards;
    actionCardById.value = data.actionCards;
  }
  onMounted(fetchCardData);

  return {
    gameVersionList: toComputed(gameVersionList),
    gameVersionLatest: toComputed(gameVersionLatest),
    fetchGameVersionData,

    tournamentTypeList: toComputed(tournamentTypeList),
    fetchTournamentTypeData,

    characterCardById: toComputed(characterCardById),
    actionCardById: toComputed(actionCardById),
    characterCardIds,
    actionCardIds,
    fetchCardData,
  };
});

export function useSharedData() {
  const store = useSharedDataStore();
  const refs = storeToRefs(store);
  return {
    ...store,
    ...refs,
  };
}
