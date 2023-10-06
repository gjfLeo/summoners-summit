import type { R } from "~/utils/types";
import { gameById } from "~/server/data";

interface CharacterStats {
  pick: number;
  winPick: number;
}

interface CharacterStatsData {
  characterStatsMap: Record<string, CharacterStats>;
  total: number;
}

const initCharacterStats = (): CharacterStats => ({ pick: 0, winPick: 0 });

export default defineEventHandler<R & CharacterStatsData>((event) => {
  const { gameVersion } = getQuery(event);

  let gameList = Object.values(gameById);
  if (gameVersion) {
    gameList = gameList.filter(game => game.gameVersion === gameVersion);
  }

  const characterStatsMap: Record<string, CharacterStats> = {};
  let total = 0;
  for (const game of gameList) {
    for (const player of (["A", "B"] as const)) {
      const characters = game[`player${player}Characters`];
      total++;
      for (const character of Object.values(characters)) {
        const characterStats = characterStatsMap[character] ?? (characterStatsMap[character] = initCharacterStats());
        characterStats.pick++;
        if (game.winner === player) characterStats.winPick++;
      }
    }
  }

  return { statusCode: 200, characterStatsMap, total };
});
