import type { GameVersion } from "~/types/data";

export const useSharedData = defineStore("shared", () => {
  const gameVersionList = ref<GameVersion[]>([]);
  const gameVersionLatest = computed(() => {
    return gameVersionList.value.length ? gameVersionList.value[0].id : undefined;
  });

  onMounted(async () => {
    const data = await $fetch("/api/v3/game-versions/list");
    gameVersionList.value = data.gameVersionList;
  });

  return {
    gameVersionList,
    gameVersionLatest,
  };
});
