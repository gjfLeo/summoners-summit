import { getAllGameVersions, getGameVersionPath } from "~/utils/game-version";
import type { GameVersionOptional } from "~/utils/types";

interface UseGameVersionOptions {
  detect?: boolean;
}

export default function useGameVersion(options?: UseGameVersionOptions) {
  const gameVersion = useLocalStorage<GameVersionOptional>("game-version", "");

  const allGameVersions = getAllGameVersions();

  if (gameVersion.value !== "" && !allGameVersions.includes(gameVersion.value)) {
    gameVersion.value = "";
  }

  const gameVersionPath = computed(() => {
    return getGameVersionPath(gameVersion.value);
  });

  if (options?.detect) {
    const route = useRoute();
    if (typeof route.params?.gameVersion === "string") {
      gameVersion.value = allGameVersions.find(version => getGameVersionPath(version) === route.params.gameVersion) ?? "";
    }
  }

  return { gameVersion, gameVersionPath };
}
