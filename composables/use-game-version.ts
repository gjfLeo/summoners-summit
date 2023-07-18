export default function useGameVersion() {
  const gameVersion = useLocalStorage<string>("game-version", "");
  return gameVersion;
}
