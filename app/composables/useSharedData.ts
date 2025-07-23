interface CardsData {
  characterCards: Record<CardId, CharacterCardInfo>;
  actionCards: Record<CardId, ActionCardInfo>;
}

interface SharedData {
  gameVersionList: GameVersion[];
  cardsData: CardsData;
  tournamentTypeList: TournamentType[];
  regionList: { key: Region; name: Record<Locales, string> }[];
}

export default function useSharedData() {
  const sharedData = useState<SharedData>("sharedDataV2", () => ({
    gameVersionList: [],
    cardsData: {
      characterCards: {},
      actionCards: {},
    },
    tournamentTypeList: [],
    regionList: [],
  }));

  async function fetchGameVersionData() {
    sharedData.value.gameVersionList = await $fetch<GameVersion[]>("/api/v4/game-versions");
  }

  async function fetchCardsData() {
    sharedData.value.cardsData = await $fetch<CardsData>("/api/v4/cards-data");
  }

  async function fetchConstants() {
    const constants = await $fetch("/api/v4/constants");
    sharedData.value.tournamentTypeList = constants.tournamentTypeList;
    sharedData.value.regionList = constants.regionList;
  }

  const init = callOnce(() => {
    return Promise.all([
      fetchGameVersionData(),
      fetchCardsData(),
      fetchConstants(),
    ]);
  });

  return {
    gameVersionFullList: computed(() => sharedData.value.gameVersionList),
    gameVersionList: computed(() => sharedData.value.gameVersionList.slice(0, 4)),
    gameVersionLatest: computed(() => sharedData.value.gameVersionList.at(0)?.id ?? ""),
    fetchGameVersionData,

    characterCardById: computed(() => sharedData.value.cardsData.characterCards),
    characterCardIds: computed(() => Object.keys(sharedData.value.cardsData.characterCards).sort()),
    characterCardList: computed(() => Object.values(sharedData.value.cardsData.characterCards).sort((a, b) => a.id.localeCompare(b.id))),
    actionCardById: computed(() => sharedData.value.cardsData.actionCards),
    actionCardIds: computed(() => Object.keys(sharedData.value.cardsData.actionCards).sort()),
    actionCardList: computed(() => Object.values(sharedData.value.cardsData.actionCards).sort((a, b) => a.id.localeCompare(b.id))),
    fetchCardsData,

    tournamentTypeList: computed(() => sharedData.value.tournamentTypeList),
    regionList: computed(() => sharedData.value.regionList),
    regionByKey: computed(() => Object.fromEntries(sharedData.value.regionList.map(region => [region.key, region]))),

    initData: async () => {
      await init;
    },
  };
}

export async function useAsyncSharedData() {
  const sharedData = useSharedData();
  await sharedData.initData();
  return sharedData;
}
