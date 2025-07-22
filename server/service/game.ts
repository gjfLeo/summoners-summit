import { getStorageMatch } from "./match";
import { defineRecordStorage } from "./storage";
import { getStorageTournament } from "./tournament";

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

// ----------------------------------------------------------------------------

export function saveGame(game: Game) {
  writeData(`games/${game.id}`, ZGame.parse(game));
  return clearGameCache([game.id]);
}

export function deleteGame(gameId: GameId) {
  deleteData(`games/${gameId}`);
  return clearGameCache([gameId]);
}

// ----------------------------------------------------------------------------

export async function getStorageGameDetail(gameId: GameId): Promise<GameDetail | undefined> {
  const game = await getStorageGame(gameId);
  if (!game) return;
  return await fillStorageGameDetail(game);
}

export async function fillStorageGameDetail(game: MaybeMirrored<Game>, cache?: { match?: Match; tournament?: Tournament }): Promise<MaybeMirrored<GameDetail>> {
  const { match: cacheMatch, tournament: cacheTournament } = cache ?? {};

  let match: MaybeMirrored<Match> = cacheMatch ?? (await getStorageMatch(game.matchId))!;
  if (isMirrored(game)) {
    match = getMirroredMatch(match);
  }

  const tournament = cacheTournament ?? (await getStorageTournament(match.tournamentId))!;

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
