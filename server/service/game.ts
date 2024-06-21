import { getMatch } from "./match";
import { getTournament } from "./tournament";
import { ZGame } from "~/types/data";
import type { Game, GameDetail, GameId } from "~/types/data";
import { deleteData, readData, writeData } from "~/server/utils";

export function getGame(gameId: GameId): Game | undefined {
  return ZGame.optional().parse(readData(`games/${gameId}`));
}

export function getGameR(gameId: GameId): GameDetail | undefined {
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
    matchVideo: match.video,
  };
}

export function saveGame(game: Game) {
  writeData(`games/${game.id}`, ZGame.parse(game));
}

export function deleteGame(gameId: GameId) {
  deleteData(`games/${gameId}`);
}
