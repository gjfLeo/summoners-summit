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

  const tournamentTypeList = ref<TournamentType[]>([]);
  async function fetchTournamentTypeData() {
    const data = await $fetch("/api/v3/tournaments/getTypeList");
    tournamentTypeList.value = data.tournamentTypeList;
  }

  const characterCardById = ref<Record<CardId, CharacterCardInfo>>({});
  const characterCardIds = computed(() => Object.keys(characterCardById.value).sort());
  const characterCardList = computed(() => characterCardIds.value.map(id => characterCardById.value[id]));
  const actionCardById = ref<Record<CardId, ActionCardInfo>>({});
  const actionCardIds = computed(() => Object.keys(actionCardById.value).sort());
  const actionCardList = computed(() => actionCardIds.value.map(id => actionCardById.value[id]));
  async function fetchCardData() {
    const data = await $fetch("/api/v3/cards/getCards");
    characterCardById.value = data.characterCards;
    actionCardById.value = data.actionCards;
  }

  const dataInitialized = ref(false);
  Promise.all([
    fetchGameVersionData(),
    fetchTournamentTypeData(),
    fetchCardData(),
  ]).then(() => {
    dataInitialized.value = true;
  });

  async function awaitData() {
    return await until(dataInitialized).toBe(true);
  }

  return {
    gameVersionList: toComputed(gameVersionList),
    gameVersionLatest: toComputed(gameVersionLatest),
    fetchGameVersionData,

    tournamentTypeList: toComputed(tournamentTypeList),
    fetchTournamentTypeData,

    characterCardById: toComputed(characterCardById),
    characterCardIds,
    characterCardList,
    actionCardById: toComputed(actionCardById),
    actionCardIds,
    actionCardList,
    fetchCardData,

    dataInitialized: toComputed(dataInitialized),
    awaitData,
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
