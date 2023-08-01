import { gameById } from "../../data";
import type { Game, R } from "~/utils/types";

type GameBrief = Pick<Game, "id" | "playerA" | "playerB" | "playerACharacters" | "playerADeckId" | "playerBCharacters" | "playerBDeckId" | "starter" | "winner">;

export default defineEventHandler<R & { games: Record<string, GameBrief> }>((event) => {
  const gameIds = event.context.params?.gameIds ?? "";
  const games = Object.fromEntries(gameIds.split(",").map((gameId) => {
    const game = gameById[gameId];
    const { id, playerA, playerB, playerACharacters, playerADeckId, playerBCharacters, playerBDeckId, starter, winner } = game;
    return [gameId, { id, playerA, playerB, playerACharacters, playerADeckId, playerBCharacters, playerBDeckId, starter, winner }];
  }));
  return { code: 200, games };
});
