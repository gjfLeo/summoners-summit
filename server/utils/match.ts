import { z } from "zod";
import { deleteGame, saveGame } from "./game";
import { ZGame, ZMatch } from "~/types/data";
import type { Game, Match, MatchId, MatchR } from "~/types/data";

export function getMatch(matchId: MatchId): Match | undefined {
  // 通过比赛ID读取比赛数据，并解析为Match对象
  return ZMatch.parse(readData<Match>(`matches/${matchId}`));
}

export function getMatchR(matchId: MatchId): MatchR | undefined {
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
    gameVersion: tournament.gameVersion,
    winner: match.winner ?? (aWinDiff > 0 ? "A" : aWinDiff < 0 ? "B" : "DRAW"),
  };
}

export const ZMatchSaveParams = ZMatch.partial({
  id: true,
}).omit({
  gameIds: true,
}).extend({
  stageIndex: z.number(),
  partIndex: z.number(),

  games: ZGame.omit({
    id: true,
    matchId: true,
  }).extend({
    _key: z.number(),
  }).array(),
}).strip();
export type MatchSaveParams = z.infer<typeof ZMatchSaveParams>;
export function saveMatch(params: MatchSaveParams) {
  const tournament = getTournament(params.tournamentId);
  const matchIds = tournament?.stages[params.stageIndex].parts[params.partIndex].matchIds;
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
  }

  const games = params.games.map((gameParam, index) => {
    const gameId = `${matchId}${String(index + 1).padStart(2, "0")}`;
    const game: Game = {
      ...gameParam,
      id: gameId,
      matchId,
    };
    game.playerADeck.teamId = game.playerADeck.characters.join("-");
    game.playerBDeck.teamId = game.playerBDeck.characters.join("-");
    return game;
  });

  const match: Match = {
    ...params,
    id: matchId,
    gameIds: games.map(g => g.id),
  };

  writeData(`matches/${matchId}`, ZMatch.parse(match));
  getMatch(matchId)?.gameIds.forEach(gId => deleteGame(gId));
  games.forEach(saveGame);
  saveTournament(tournament);
}
