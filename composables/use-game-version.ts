import { ALL_GAME_VERSIONS, type GameVersion, getGameVersionPath } from "~/utils/game-versions";

interface UseGameVersionOptions {
  detect?: boolean;
}

export default function useGameVersion(options?: UseGameVersionOptions) {
  const gameVersion = useLocalStorage<GameVersion | "">("game-version", "");

  if (gameVersion.value !== "" && !ALL_GAME_VERSIONS.includes(gameVersion.value)) {
    gameVersion.value = "";
  }

  const gameVersionPath = computed(() => {
    return getGameVersionPath(gameVersion.value);
  });

  if (options?.detect) {
    const route = useRoute();
    if (typeof route.params?.gameVersion === "string") {
      gameVersion.value = ALL_GAME_VERSIONS.find(version => getGameVersionPath(version) === route.params.gameVersion) ?? "";
    }
  }

  return { gameVersion, gameVersionPath };
}
