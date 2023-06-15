import type { Game } from "~/utils/types";

export function swapGamePlayers(game: Game): Game {
  return {
    ...game,
    playerA: game.playerB,
    playerB: game.playerA,
    deckA: game.deckB,
    deckB: game.deckA,
    winner: game.winner === "A" ? "B" : "A",
    startWith: game.startWith === "A" ? "B" : "A",
  };
}
