import { clearGameCache, clearMatchCache, clearPlayerCache, clearTournamentCache, deleteGameV2, getStorageMatch, getStoragePlayer, getStorageTournament, savePlayerV2, writeGameV2, writeMatchV2, writeTournamentV2 } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Matches"],
    summary: "场次数据修改",
    description: "添加或删除场次数据",
  },
});

async function saveMatch(params: SaveMatchParams) {
  const tournament = await getStorageTournament(params.tournamentId);
  if (!tournament) {
    throw createError({ statusCode: 400, message: "tournament not found" });
  }
  const todos: (Promise<any> | null)[] = [];

  const { matchId, todo: tournamentTodo } = await saveMatchTournament(tournament, params);
  todos.push(tournamentTodo);

  const playerIds = await Promise.all([
    savePlayerNickname(params.playerA),
    savePlayerNickname(params.playerB),
  ]);
  todos.push(clearPlayerCache(playerIds));

  const playerA = { nickname: params.playerA.nickname, playerId: playerIds[0] };
  const playerB = { nickname: params.playerB.nickname, playerId: playerIds[1] };

  const { gameIds, todo: gamesTodo } = await saveMatchGames(matchId, params, tournament);
  todos.push(gamesTodo);

  const match: Match = {
    ...params,
    id: matchId,
    gameVersion: tournament.gameVersion,
    playerA,
    playerB,
    bans: params.bans.length ? params.bans.map(getMatchBan) : undefined,
    gameIds,
    isFinal: params.isFinal ? true : undefined,
    isPrePatch: params.isPrePatch ? true : undefined,
  };
  todos.push((async function () {
    await writeMatchV2(match);
    await clearMatchCache([matchId]);
  })());

  await Promise.all(todos);
  return match;
}

/**
 * 在赛事数据中保存matchId
 */
async function saveMatchTournament(
  tournament: Tournament,
  params: SaveMatchParams,
) {
  const stage = tournament.stages[params.stageIndex];
  if (!stage) {
    throw createError({ statusCode: 400, message: "stage not found" });
  }
  const part = stage.parts[params.partIndex];
  if (!part) {
    throw createError({ statusCode: 400, message: "part not found" });
  }

  if (params.id) {
    if (!part.matchIds.includes(params.id)) {
      throw createError({ statusCode: 400, message: "match not found" });
    }
    const matchId = params.id;
    return {
      matchId,
      todo: null,
    };
  }
  else {
    const maxMatchIndex = tournament.stages
      .flatMap(s => s.parts)
      .flatMap(p => p.matchIds)
      .map(id => Number(id.substring(16)))
      .reduce((max, v) => Math.max(max, v), 0);
    const matchId = `${tournament.id}${String(maxMatchIndex + 1).padStart(2, "0")}`;
    params.id = matchId;
    part.matchIds.push(matchId);
    return {
      matchId,
      todo: (async function () {
        await writeTournamentV2(tournament);
        await clearTournamentCache([tournament.id]);
      })(),
    };
  }
}

async function savePlayerNickname({ playerId, nickname }: {
  playerId?: PlayerId;
  nickname: string;
}) {
  if (playerId) {
    const player = await getStoragePlayer(playerId);
    if (!player) {
      throw createError({ statusCode: 400, message: "player not found" });
    }
    if (player.uniqueName !== nickname && !player.aliases.includes(nickname)) {
      player.aliases.push(nickname);
      return await savePlayerV2(player, { clearCache: false });
    }
    return player.id;
  }
  else {
    return await savePlayerV2({
      uniqueName: nickname,
      aliases: [],
      uids: [],
    }, { clearCache: false });
  }
}

async function saveMatchGames(
  matchId: MatchId,
  matchParams: SaveMatchParams,
  tournament: Tournament,
) {
  const games: Game[] = matchParams.games.map((gameParam, gameIndex) => {
    const gameId = `${matchId}${String(gameIndex + 1).padStart(2, "0")}`;
    return {
      ...gameParam,
      id: gameId,
      gameVersion: tournament.gameVersion,
      matchId,
      playerADeck: {
        ...gameParam.playerADeck,
        teamId: getTeamId(gameParam.playerADeck.characters),
      },
      playerBDeck: {
        ...gameParam.playerBDeck,
        teamId: getTeamId(gameParam.playerBDeck.characters),
      },
      isPrePatch: matchParams.isPrePatch,
    };
  });

  return {
    gameIds: games.map(g => g.id),
    todo: (async function () {
      const oldMatch = await getStorageMatch(matchId);
      const changedGameIds = new Set<GameId>();
      if (oldMatch) {
        await Promise.all(
          oldMatch.gameIds.map(gameId => deleteGameV2(gameId)),
        );
        oldMatch.gameIds.forEach(gameId => changedGameIds.add(gameId));
      }
      await Promise.all(
        games.map(game => writeGameV2(game)),
      );
      games.forEach(g => changedGameIds.add(g.id));
      return clearGameCache(changedGameIds);
    }()),
  };
}

function getMatchBan(raw: SaveMatchParams["bans"][number]): Ban {
  if (raw.playerACardIds.length === 1) {
    return {
      banType: "character",
      playerACardId: raw.playerACardIds[0],
      playerBCardId: raw.playerBCardIds[0],
    };
  }
  else {
    return {
      banType: "team",
      playerATeamId: getTeamId(raw.playerACardIds),
      playerBTeamId: getTeamId(raw.playerBCardIds),
    };
  }
}

export default defineEventHandler(async (event) => {
  const params = await readValidatedBody(event, ZMatchSaveParams.parse);
  const match = await saveMatch(params);
  return match;
});
