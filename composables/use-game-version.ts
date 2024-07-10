import type { GameVersionId } from "~/types";

export function useGameVersion() {
  const { gameVersionLatest, awaitData } = useSharedData();
  const gameVersion = useLocalStorage<GameVersionId>("gameVersion", gameVersionLatest.value);

  awaitData().then(() => {
    if (gameVersion.value === "") {
      gameVersion.value = gameVersionLatest.value;
    }
  });

  const gameVersionPath = computed(() => getGameVersionPath(gameVersion.value));

  return { gameVersion, gameVersionPath };
}
