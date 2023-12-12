type GameSeason = number;

interface GameVersionInfo {
  gameVersion: string;
  season: GameSeason;
}

function defineGameVersionInfo(info: GameVersionInfo): GameVersionInfo {
  return info;
}

export const ALL_GAME_VERSIONS_INFO = {
  "3.7": defineGameVersionInfo({
    gameVersion: "3.7",
    season: 1,
  }),
  "3.8": defineGameVersionInfo({
    gameVersion: "3.8",
    season: 1,
  }),
  "4.0": defineGameVersionInfo({
    gameVersion: "4.0",
    season: 1,
  }),
  "4.1": defineGameVersionInfo({
    gameVersion: "4.1",
    season: 2,
  }),
  "4.2": defineGameVersionInfo({
    gameVersion: "4.2",
    season: 2,
  }),
};
export type GameVersion = keyof typeof ALL_GAME_VERSIONS_INFO;

export const ALL_GAME_VERSIONS = Object.keys(ALL_GAME_VERSIONS_INFO) as GameVersion[];

export function initGameVersionMap<T>(valueMapper: (v: GameVersion) => T): Record<GameVersion, T> {
  return Object.fromEntries(ALL_GAME_VERSIONS.map(v => [v, valueMapper(v)])) as Record<GameVersion, T>;
}
export function gameVersionSorter<T>(gameVersionExtractor: (item: T) => GameVersion) {
  return (a: T, b: T) => gameVersionExtractor(a).localeCompare(gameVersionExtractor(b));
}
export function gameVersionSorterReversed<T>(gameVersionExtractor: (item: T) => GameVersion) {
  return (a: T, b: T) => gameVersionExtractor(b).localeCompare(gameVersionExtractor(a));
}

export function getGameVersionPath(gameVersion: GameVersion | "") {
  if (gameVersion === "") return "all";
  return gameVersion.replace(".", "-");
}
