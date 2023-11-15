import type { ApiCharacterStatsMapData, ApiCharacterStatsValue, R } from "~/utils/types";
import { gameById } from "~/server/data";

const initCharacterStats = (): ApiCharacterStatsValue => ({ pick: 0, winPick: 0 });

export default defineEventHandler<R & ApiCharacterStatsMapData>((event) => {
  const { gameVersion, preferredGameVersion, sort } = getQuery(event);

  let gameList = Object.values(gameById);
  if (gameVersion) {
    gameList = gameList.filter(game => game.gameVersion === gameVersion);
  }

  let characterStatsMap: Record<string, ApiCharacterStatsValue> = {};
  let totalGame = 0;
  for (const game of gameList) {
    const weight = (preferredGameVersion && preferredGameVersion !== game.gameVersion) ? 0.1 : 1;
    totalGame += weight;
    for (const player of (["A", "B"] as const)) {
      const characters = game[`player${player}Characters`];
      for (const character of Object.values(characters)) {
        const characterStats = characterStatsMap[character] ?? (characterStatsMap[character] = initCharacterStats());
        characterStats.pick += weight;
        if (game.winner === player) characterStats.winPick += weight;
      }
    }
  }
  if (sort) {
    characterStatsMap = Object.fromEntries(Object.entries(characterStatsMap).sort((a, b) => b[1].pick - a[1].pick));
  }

  return { statusCode: 200, characterStatsMap, totalGame };
});
