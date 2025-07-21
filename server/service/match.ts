import { z } from "zod";
import { deleteGame, getGame, getStorageGameRecord, saveGame } from "./game";
import { bindPlayerNickname } from "./player";
import { defineRecordStorage } from "./storage";
import { getStorageTournament, getTournament, saveTournament } from "./tournament";

const matchStorage = defineRecordStorage("matches", ZMatch);
export const getStorageMatch = matchStorage.get;
export const getStorageMatchList = matchStorage.getList;
export const clearMatchCache = matchStorage.clearCache;

export async function getStorageMatchDetail(matchId: MatchId): Promise<MatchDetail | undefined> {
  const match = await getStorageMatch(matchId);
  if (!match) return;
  return await fillStorageMatchDetail(match);
}
export async function fillStorageMatchDetail(match: Match): Promise<MatchDetail> {
  const tournament = (await getStorageTournament(match.tournamentId))!;
  const stage = tournament.stages[match.stageIndex];
  const part = stage.parts[match.partIndex];

  const games = await getStorageGameRecord(match.gameIds);
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

// ----------------------------------------------------------------------------

/** @deprecated */
export function getMatch(matchId: MatchId): Match | undefined {
  return ZMatch.parse(readData<Match>(`matches/${matchId}`));
}

/** @deprecated */
export function getMatchList(): Match[] {
  return ZMatch.array().parse(readDataList<Match>("matches"));
}

/** @deprecated */
export function getMatchDetail(matchId: MatchId): MatchDetail | undefined {
  const match = getMatch(matchId);
  if (!match) return;
  const tournament = getTournament(match.tournamentId)!;
  const games = match.gameIds.map(gameId => getGame(gameId)!);
  const aWinDiff = games.reduce((value, game) => {
    if (game.winner === "A") return value + 1;
    if (game.winner === "B") return value - 1;
    return value;
  }, 0);
  return {
    ...match,

    tournamentName: tournament.name,
    gameVersion: tournament.gameVersion,

    stageName: tournament.stages[match.stageIndex].name,
    partName: tournament.stages[match.stageIndex].parts[match.partIndex].name,
    date: tournament.stages[match.stageIndex].parts[match.partIndex].date,

    winner: match.winnerOverride ?? (aWinDiff > 0 ? "A" : aWinDiff < 0 ? "B" : "DRAW"),
  };
}

// ----------------------------------------------------------------------------

export const ZMatchSaveParams = ZMatch.partial({
  id: true,
}).omit({
  gameVersion: true,
  gameIds: true,
  bans: true,
  playerA: true,
  playerB: true,
}).extend({
  playerA: z.object({
    playerId: ZNullToUndefined(ZPlayerId.optional()),
    nickname: ZPlayerNickname,
  }),
  playerB: z.object({
    playerId: ZNullToUndefined(ZPlayerId.optional()),
    nickname: ZPlayerNickname,
  }),

  bans: z.object({
    _key: z.number(),
    playerACardIds: z.union([ZCardId.array().length(1), ZCardId.array().length(3)]),
    playerBCardIds: z.union([ZCardId.array().length(1), ZCardId.array().length(3)]),
  }).array(),
  games: ZGame.omit({
    id: true,
    matchId: true,
    gameVersion: true,
  }).extend({
    _key: z.number(),
    playerADeck: z.object({
      characters: z.array(ZCardId).length(3),
      deckCode: ZDeckCode.optional(),
    }),
    playerBDeck: z.object({
      characters: z.array(ZCardId).length(3),
      deckCode: ZDeckCode.optional(),
    }),
  }).array(),
}).strip();
export type MatchSaveParams = z.infer<typeof ZMatchSaveParams>;
export function saveMatch(params: MatchSaveParams) {
  const tournament = getTournament(params.tournamentId);
  const matchIds = tournament?.stages[params.stageIndex]?.parts[params.partIndex]?.matchIds;
  if (!matchIds) {
    throw new Error("TOURNAMENT_STAGE_OR_PART_NOT_FOUND");
  }
  let matchId: MatchId;
  if (params.id) {
    if (!matchIds.includes(params.id)) {
      throw new Error("MATCH_NOT_FOUND");
    }
    matchId = params.id;
  }
  else {
    const maxMatchIndex = tournament.stages
      .flatMap(s => s.parts.flatMap(p => p.matchIds))
      .map(mId => Number(mId.substring(16)))
      .reduce((value, id) => Math.max(value, id), 0);
    matchId = `${tournament.id}${String(maxMatchIndex + 1).padStart(2, "0")}`;
    params.id = matchId;
    matchIds.push(matchId);
    saveTournament(tournament);
  }

  const playerA = {
    nickname: params.playerA.nickname,
    playerId: bindPlayerNickname(params.playerA),
  };
  const playerB = {
    nickname: params.playerB.nickname,
    playerId: bindPlayerNickname(params.playerB),
  };

  const games = params.games.map((gameParam, index) => {
    const gameId = `${matchId}${String(index + 1).padStart(2, "0")}`;
    const game: Game = {
      ...gameParam,
      gameVersion: tournament.gameVersion,
      playerADeck: {
        ...gameParam.playerADeck,
        teamId: getTeamId(gameParam.playerADeck.characters),
      },
      playerBDeck: {
        ...gameParam.playerBDeck,
        teamId: getTeamId(gameParam.playerBDeck.characters),
      },
      id: gameId,
      matchId,
      isPrePatch: params.isPrePatch ? true : undefined,
    };
    return game;
  });

  const bans = params.bans.map<Ban>((banRaw) => {
    if (banRaw.playerACardIds.length === 1) {
      return {
        banType: "character",
        playerACardId: banRaw.playerACardIds[0],
        playerBCardId: banRaw.playerBCardIds[0],
      };
    }
    else {
      return {
        banType: "team",
        playerATeamId: getTeamId(banRaw.playerACardIds),
        playerBTeamId: getTeamId(banRaw.playerBCardIds),
      };
    }
  });

  const match: Match = {
    ...params,
    id: matchId,
    gameVersion: tournament.gameVersion,
    playerA,
    playerB,
    bans: bans.length ? bans : undefined,
    gameIds: games.map(g => g.id),
    isFinal: params.isFinal ? true : undefined,
    isPrePatch: params.isPrePatch ? true : undefined,
  };

  writeData(`matches/${matchId}`, ZMatch.parse(match));
  getMatch(matchId)?.gameIds.forEach(gId => deleteGame(gId));
  games.forEach(saveGame);

  // await
  clearMatchCache();
  return matchId;
}
