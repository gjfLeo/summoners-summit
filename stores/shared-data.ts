const useSharedDataStore = defineStore("shared", () => {
  const { data: gameVersionListData, refresh: fetchGameVersionData, status: gameVersionDataStatus } = useAsyncData(
    "gameVersionList",
    () => $fetch("/api/v3/game-versions/list"),
  );
  const gameVersionFullList = computed(() => gameVersionListData.value?.gameVersionList ?? []);
  const gameVersionList = computed(() => gameVersionFullList.value.slice(0, 4));
  const gameVersionLatest = computed(() => {
    return gameVersionList.value.length ? gameVersionList.value[0].id : "";
  });

  const { data: tournamentTypeListData, refresh: fetchTournamentTypeData, status: tournamentTypeDataStatus } = useAsyncData(
    "tournamentTypeList",
    () => $fetch("/api/v3/tournaments/getTypeList"),
  );
  const tournamentTypeList = computed(() => tournamentTypeListData.value?.tournamentTypeList ?? []);

  const { data: regionListData, refresh: fetchRegionData, status: regionDataStatus } = useAsyncData(
    "regionList",
    () => $fetch("/api/v3/regions"),
  );
  const regionList = computed(() => regionListData.value?.regionList ?? []);
  const regionByKey = computed(() => Object.fromEntries(regionList.value.map(region => [region.key, region])));

  const { data: cardData, refresh: fetchCardData, status: cardDataStatus } = useAsyncData(
    "cards",
    () => $fetch("/api/v3/cards/getCards"),
  );

  const characterCardById = computed(() => cardData.value?.characterCards ?? {});
  const characterCardIds = computed(() => Object.keys(characterCardById.value).sort());
  const characterCardList = computed(() => characterCardIds.value.map(id => characterCardById.value[id]));
  const actionCardById = computed(() => cardData.value?.actionCards ?? {});
  const actionCardIds = computed(() => Object.keys(actionCardById.value).sort());
  const actionCardList = computed(() => actionCardIds.value.map(id => actionCardById.value[id]));

  async function awaitData() {
    return await Promise.all([
      until(gameVersionDataStatus).not.toBe("pending"),
      until(tournamentTypeDataStatus).not.toBe("pending"),
      until(regionDataStatus).not.toBe("pending"),
      until(cardDataStatus).not.toBe("pending"),
    ]);
  }

  return {
    gameVersionFullList,
    gameVersionList,
    gameVersionLatest,
    fetchGameVersionData,

    tournamentTypeList,
    fetchTournamentTypeData,

    regionList,
    regionByKey,
    fetchRegionData,

    characterCardById,
    characterCardIds,
    characterCardList,
    actionCardById,
    actionCardIds,
    actionCardList,
    fetchCardData,

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

export async function useAsyncSharedData() {
  const sharedData = useSharedData();
  await sharedData.awaitData();
  return sharedData;
}
