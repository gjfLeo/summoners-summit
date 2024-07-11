import type { RouteLocationRaw } from "vue-router";
import type { GameVersionId } from "~/types";

// interface UseGameVersionOptions {
//   detect: boolean;
// }

export function useGameVersion(/* options?: UseGameVersionOptions */) {
  const { gameVersionLatest, awaitData } = useSharedData();
  const gameVersion = useLocalStorage<GameVersionId>("gameVersion", gameVersionLatest.value);

  awaitData().then(() => {
    if (gameVersion.value === "") {
      gameVersion.value = gameVersionLatest.value;
    }
  });

  const gameVersionPath = computed(() => getGameVersionPath(gameVersion.value));

  const route = useRoute();
  if ("gameVersion" in route.params && typeof route.params.gameVersion === "string") {
    gameVersion.value = getGameVersionIdByPath(route.params.gameVersion);
  }

  watch(gameVersion, (gameVersion) => {
    // 当前路由包含gameVersion参数
    if ("gameVersion" in route.params && typeof route.params.gameVersion === "string") {
      // 根据路由修改gameVersion
      if (route.params.gameVersion !== gameVersion) {
        return navigateTo({
          name: route.name,
          params: {
            ...route.params,
            gameVersion: getGameVersionPath(gameVersion),
          },
        } as RouteLocationRaw);
      }
    }
  });

  return { gameVersion, gameVersionPath };
}
