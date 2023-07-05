import type { Game } from "~/utils/types";

export function invertGame(game: Game): Game {
  const { playerA, playerB, playerACharacters, playerBCharacters, playerADeckId, playerBDeckId, starter, winner } = game;
  return {
    ...game,
    playerA: playerB,
    playerB: playerA,
    playerACharacters: playerBCharacters,
    playerBCharacters: playerACharacters,
    playerADeckId: playerBDeckId,
    playerBDeckId: playerADeckId,
    starter: starter === "A" ? "B" : "A",
    winner: winner === "A" ? "B" : "A",
  };
}
