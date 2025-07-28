import { getStorageGameRecord } from "./game";
import { defineRecordStorage } from "./storage";
import { getStorageTournament } from "./tournament";

/** @deprecated */
export function getMatchList(): Match[] {
  return ZMatch.array().parse(readDataList<Match>("matches"));
}

const matchStorage = defineRecordStorage("matches", ZMatch);
export const getStorageMatch = matchStorage.get;
export const getStorageMatchList = matchStorage.getList;
export const getStorageMatchRecord = matchStorage.getRecord;
export const clearMatchCache = matchStorage.clearCache;

// ----------------------------------------------------------------------------

export async function writeMatchV2(match: Match) {
  const data = ZMatch.parse(match);
  await writeDataV2(`matches/${match.id}`, data);
}

// ----------------------------------------------------------------------------

export async function getStorageMatchDetail(matchId: MatchId): Promise<MatchDetail | undefined> {
  const match = await getStorageMatch(matchId);
  if (!match) return;
  return await fillStorageMatchDetail(match);
}

export async function fillStorageMatchDetail(
  match: MaybeMirrored<Match>,
  cache?: {
    tournament?: Tournament;
    games?: Record<GameId, Game>;
  },
): Promise<MaybeMirrored<MatchDetail>> {
  const tournament = cache?.tournament ?? (await getStorageTournament(match.tournamentId))!;
  const stage = tournament.stages[match.stageIndex];
  const part = stage.parts[match.partIndex];

  const games = cache?.games ?? (await getStorageGameRecord(match.gameIds));
  const winner = getMatchWinner(match, games);

  return {
    ...match,

    tournamentName: tournament.name,
    gameVersion: tournament.gameVersion,
    stageName: stage.name,
    partName: part.name,
    date: part.date,

    winner,
  };
}

export async function fillStorageMatchDetailWithGames(
  match: MaybeMirrored<Match>,
  cache?: {
    tournament?: Tournament;
    games?: Record<GameId, Game>;
  },
): Promise<MaybeMirrored<MatchDetail> & { games: Record<GameId, MaybeMirrored<Game>> }> {
  const matchDetail = await fillStorageMatchDetail(match, cache);
  const games = cache?.games ?? (await getStorageGameRecord(match.gameIds));
  return {
    ...matchDetail,
    games: Object.fromEntries(
      matchDetail.gameIds.map((gameId) => {
        const game = games[gameId];
        return [gameId, isMirrored(matchDetail) ? getMirroredGame(game) : game];
      }),
    ),
  };
}
