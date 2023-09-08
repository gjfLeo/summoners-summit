import type { Game } from "~/utils/types";
import { gameById } from "~/server/data";

function getGameMirror(game: Game): Game {
  const { playerA, playerB, playerACharacters, playerBCharacters, playerADeckId, playerBDeckId, starter, winner } = game;
  return {
    ...game,
    playerA: playerB,
    playerB: playerA,
    playerACharacters: playerBCharacters,
    playerBCharacters: playerACharacters,
    playerADeckId: playerBDeckId,
    playerBDeckId: playerADeckId,
    starter: starter ? (starter === "A" ? "B" : "A") : "",
    winner: winner === "A" ? "B" : "A",
  };
}

const mirrorOverrideMap: Record<string, boolean> = {
  1: true,
  0: false,
};

export default defineEventHandler((event) => {
  const {
    gameVersion,
    matchId,
    player,
    deckId,
    opponentCharacters,
    characters,
    mirror: mirrorOverride,
    limit: limitOverride,
    offset: offsetOverride,
  } = getQuery(event);

  let list = Object.values(gameById);
  if (gameVersion) {
    list = list.filter(game => game.gameVersion === gameVersion);
  }
  if (matchId) {
    list = list.filter(game => game.matchId === matchId);
  }
  const mirror = mirrorOverrideMap[mirrorOverride as string] ?? (player || deckId || characters);
  if (mirror) {
    list = list.flatMap(game => [game, getGameMirror(game)]);
  }
  if (player) {
    list = list.filter(game => game.playerA === player);
  }
  if (deckId) {
    list = list.filter(game => game.playerADeckId === deckId);
  }
  if (characters) {
    for (const character of (characters as string).split(",")) {
      list = list.filter(game => (game.playerACharacters as string[]).includes(character));
    }
  }
  if (opponentCharacters) {
    for (const character of (opponentCharacters as string).split(",")) {
      list = list.filter(game => (game.playerBCharacters as string[]).includes(character));
    }
  }

  const limit = limitOverride ? Number(limitOverride) : 50;
  const offset = offsetOverride ? Number(offsetOverride) : 0;
  if (limit) {
    list = list.slice(offset, offset + limit);
  }
  return { code: 200, gameList: list };
});
