import { getMatch, getStorageMatch } from "./match";
import { defineRecordStorage } from "./storage";
import { getStorageTournament, getTournament } from "./tournament";

/** @deprecated */
export function getGame(gameId: GameId): Game | undefined {
  return ZGame.optional().parse(readData(`games/${gameId}`));
}

/** @deprecated */
export function getGameList() {
  return ZGame.array().parse(readDataList("games"));
}

const gameStorage = defineRecordStorage("games", ZGame);
export const getStorageGame = gameStorage.get;
export const getStorageGameList = gameStorage.getList;
export const getStorageGameRecord = gameStorage.getRecord;
export const clearGameCache = gameStorage.clearCache;

/** @deprecated */
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
  return clearGameCache([game.id]);
}

export function deleteGame(gameId: GameId) {
  deleteData(`games/${gameId}`);
  return clearGameCache([gameId]);
}

/** @deprecated */
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

export async function getStorageGameDetail(gameId: GameId): Promise<GameDetail | undefined> {
  const game = await getStorageGame(gameId);
  if (!game) return;
  return await fillStorageGameDetail(game);
}

export async function fillStorageGameDetail(game: Game): Promise<GameDetail> {
  const match = (await getStorageMatch(game.matchId))!;
  const tournament = (await getStorageTournament(match.tournamentId))!;

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
