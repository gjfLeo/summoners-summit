type GameSeason = number;

interface GameVersionInfo {
  /** 游戏版本 */
  gameVersion: string;
  /** 赛季 */
  season: GameSeason;
}

function defineGameVersionInfo(info: GameVersionInfo): Readonly<GameVersionInfo> {
  return info;
}

const ALL_GAME_VERSIONS_INFO = {
  "3.7": defineGameVersionInfo({ gameVersion: "3.7", season: 1 }),
  "3.8": defineGameVersionInfo({ gameVersion: "3.8", season: 1 }),
  "4.0": defineGameVersionInfo({ gameVersion: "4.0", season: 1 }),
  "4.1": defineGameVersionInfo({ gameVersion: "4.1", season: 2 }),
  "4.2": defineGameVersionInfo({ gameVersion: "4.2", season: 2 }),
};
export type GameVersion = keyof typeof ALL_GAME_VERSIONS_INFO;
export type GameVersionOptional = GameVersion | "";

const ALL_GAME_VERSIONS = Object.keys(ALL_GAME_VERSIONS_INFO) as Readonly<GameVersion[]>;

/**
 * 获取所有游戏版本的数组，正序排列
 */
export function getAllGameVersions(): GameVersion[] {
  return [...ALL_GAME_VERSIONS];
}
/**
 * 获取所有游戏版本的数组，倒序排列
 */
export function getAllGameVersionsReversed() {
  return getAllGameVersions().reverse();
}

export function initGameVersionMap<T>(valueMapper: (v: GameVersion) => T): Record<GameVersion, T> {
  return Object.fromEntries(ALL_GAME_VERSIONS.map(v => [v, valueMapper(v)])) as Record<GameVersion, T>;
}

/**
 * 获取游戏版本对应的路径。如果没有指定版本，则返回 "all"
 */
export function getGameVersionPath(gameVersion: GameVersionOptional): string {
  if (gameVersion === "") return "all";
  return gameVersion.replace(".", "-");
}
