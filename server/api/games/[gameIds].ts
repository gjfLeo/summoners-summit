import { gameById } from "../../data";
import type { Game, R } from "~/utils/types";

type GameInfo = Pick<Game, "id" | "playerA" | "playerB" | "gameVersion" | "playerACharacters" | "playerADeckId" | "playerBCharacters" | "playerBDeckId" | "starter" | "winner">;

export default defineEventHandler<R & { games: Record<string, GameInfo> }>((event) => {
  const gameIds = event.context.params?.gameIds ?? "";
  const games = Object.fromEntries(gameIds.split(",").map((gameId) => {
    const game = gameById[gameId];
    const { id, gameVersion, playerA, playerB, playerACharacters, playerADeckId, playerBCharacters, playerBDeckId, starter, winner } = game;
    return [gameId, { id, gameVersion, playerA, playerB, playerACharacters, playerADeckId, playerBCharacters, playerBDeckId, starter, winner }];
  }));
  return { statusCode: 200, games };
});
