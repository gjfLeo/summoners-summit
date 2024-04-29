import type { GameVersion, TournamentType } from "~/types/data";

export const useSharedData = defineStore("shared", () => {
  const gameVersionList = ref<GameVersion[]>([]);
  const gameVersionLatest = computed(() => {
    return gameVersionList.value.length ? gameVersionList.value[0].id : undefined;
  });

  const tournamentTypeList = ref<TournamentType[]>([]);

  onMounted(async () => {
    $fetch("/api/v3/game-versions/list").then((data) => {
      gameVersionList.value = data.gameVersionList;
    });
    $fetch("/api/v3/tournaments/getTypeList").then((data) => {
      tournamentTypeList.value = data.tournamentTypeList;
    });
  });

  return {
    gameVersionList,
    gameVersionLatest,
    tournamentTypeList,
  };
});
