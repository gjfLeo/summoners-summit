import { mirrorPlayer } from "../utils/player";
import { getMatch } from "./match";
import { getTournament } from "./tournament";
import { ZGame } from "~/types";
import type { Game, GameDetail, GameId } from "~/types";

export function getGame(gameId: GameId): Game | undefined {
  return ZGame.optional().parse(readData(`games/${gameId}`));
}

export function getGameList() {
  return ZGame.array().parse(readDataList("games"));
}

export function getGameDetail(gameId: GameId): GameDetail | undefined {
  const game = getGame(gameId);
  if (!game) return;
  const match = getMatch(game.matchId)!;
  const tournament = getTournament(match.tournamentId)!;
  const stage = tournament.stages[match.stageIndex];
  const part = stage.parts[match.partIndex];

  return {
    ...game,

    tournamentId: match.tournamentId,
    tournamentName: tournament.name,
    gameVersion: tournament.gameVersion,

    stageIndex: match.stageIndex,
    stageName: stage.name,

    partIndex: match.partIndex,
    partName: part.name,
    date: part.date,

    matchIndex: match.matchIndex,

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

export function fillGameDetail(game: Game) {
  const match = getMatch(game.matchId)!;
  const tournament = getTournament(match.tournamentId)!;
  const stage = tournament.stages[match.stageIndex];
  const part = stage.parts[match.partIndex];

  return {
    ...game,
    tournamentId: match.tournamentId,
    tournamentName: tournament.name,
    gameVersion: tournament.gameVersion,

    stageIndex: match.stageIndex,
    stageName: stage.name,

    partIndex: match.partIndex,
    partName: part.name,
    date: part.date,

    matchIndex: match.matchIndex,
    matchVideo: match.video,
    playerA: match.playerA,
    playerB: match.playerB,
  } satisfies GameDetail;
}

export function mirrorGame(game: Game) {
  return {
    ...game,
    playerADeck: game.playerBDeck,
    playerBDeck: game.playerADeck,
    winner: mirrorPlayer(game.winner),
    starter: mirrorPlayer(game.starter),
  } satisfies Game;
}
