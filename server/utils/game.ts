import { ZGame } from "~/types/data";
import type { Game, GameId, GameR } from "~/types/data";

export function getGame(gameId: GameId): Game | undefined {
  return ZGame.optional().parse(readData(`games/${gameId}`));
}

export function getGameR(gameId: GameId): GameR | undefined {
  const game = getGame(gameId);
  if (!game) return;
  const match = getMatch(game.matchId)!;
  const tournament = getTournament(match.tournamentId)!;
  return {
    ...game,
    gameVersion: tournament.gameVersion,
    tournamentId: match.tournamentId,
    playerA: match.playerA,
    playerB: match.playerB,
  };
}
