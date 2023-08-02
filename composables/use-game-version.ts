import type { SelectOption } from "naive-ui";

const normalGameVersion = (n: string) => ({ name: n, value: n, path: n.replaceAll(".", "-") });
export const gameVersionList = [
  { name: "全版本", value: "", path: "all" },
  normalGameVersion("3.8"),
  normalGameVersion("3.7"),
];

const gameVersionOptions: SelectOption[] = gameVersionList.map(version => ({ label: version.name, value: version.value }));

interface UseGameVersionOptions {
  detect?: boolean;
}

function changeGameVersion() {
  const route = useRoute();
  if (route.matched[0].path.endsWith("/:gameVersion()")) {
    return navigateTo(route.matched[0].path.replaceAll("/:gameVersion()", ""));
  }
}

export default function useGameVersion(options?: UseGameVersionOptions) {
  const gameVersion = useLocalStorage<string>("game-version", "");

  if (gameVersionList.find(version => version.value === gameVersion.value) === undefined) {
    gameVersion.value = "";
  }

  const gameVersionPath = computed(() => {
    return gameVersionList.find(version => version.value === gameVersion.value)?.path ?? "all";
  });

  if (options?.detect) {
    const route = useRoute();
    if (typeof route.params?.gameVersion === "string") {
      gameVersion.value = gameVersionList.find(version => version.path === route.params.gameVersion)?.value ?? "";
    }
  }

  return { gameVersion, gameVersionOptions, gameVersionPath, changeGameVersion };
}
