import type { CardId, CardInfo } from "~/types";
import { getFandomImageUrl } from "~/utils/image";

function toComputed<T>(r: Ref<T>) {
  return computed(() => r.value);
}

const useSharedDataStore = defineStore("shared", () => {
  const { data: gameVersionListData, refresh: fetchGameVersionData, status: gameVersionDataStatus } = useAsyncData(
    "gameVersionList",
    () => $fetch("/api/v3/game-versions/list"),
  );
  const gameVersionList = computed(() => gameVersionListData.value?.gameVersionList ?? []);
  const gameVersionLatest = computed(() => {
    return gameVersionList.value.length ? gameVersionList.value[0].id : "";
  });

  const { data: tournamentTypeListData, refresh: fetchTournamentTypeData, status: tournamentTypeDataStatus } = useAsyncData(
    "tournamentTypeList",
    () => $fetch("/api/v3/tournaments/getTypeList"),
  );
  const tournamentTypeList = computed(() => tournamentTypeListData.value?.tournamentTypeList ?? []);

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

  function getCardImage(cardId: CardId) {
    return `https://gi-tcg-assets.guyutongxue.site/api/v2/images/${cardId}`;
    // let card: CardInfo | undefined;
    // let filename;
    // if ((card = characterCardById.value[cardId])) {
    //   filename = `${card.name.en} Character Card.png`;
    // }
    // else if ((card = actionCardById.value[cardId])) {
    //   filename = `${card.name.en} ${card.actionType.charAt(0).toUpperCase()}${card.actionType.slice(1)} Card.png`;
    // }
    // else {
    //   throw new Error(`Card ${cardId} not found`);
    // }
    // return getFandomImageUrl(filename);
  }
  function getCardAvatar(cardId: CardId) {
    return `https://gi-tcg-assets.guyutongxue.site/api/v2/images/character_icons/${cardId}`;
    // const card = characterCardById.value[cardId];
    // if (!card) {
    //   throw new Error(`Card ${cardId} not found`);
    // }
    // const filename = `${card.name.en} TCG Avatar Icon.png`;
    // return getFandomImageUrl(filename);
  }

  async function awaitData() {
    return await Promise.all([
      until(gameVersionDataStatus).not.toBe("pending"),
      until(tournamentTypeDataStatus).not.toBe("pending"),
      until(cardDataStatus).not.toBe("pending"),
    ]);
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
    getCardImage,
    getCardAvatar,

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