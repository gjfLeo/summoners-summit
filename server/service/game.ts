import type { Game, GameDetail, GameId } from "~/types";
import { ZGame } from "~/types";
import { mirrorPlayer } from "../utils/player";
import { getMatch, getStorageMatch } from "./match";
import { getStorageTournament, getTournament } from "./tournament";

export function getGame(gameId: GameId): Game | undefined {
  return ZGame.optional().parse(readData(`games/${gameId}`));
}

/**
 * @deprecated
 */
export function getGameList() {
  return ZGame.array().parse(readDataList("games"));
}

export const getStorageGameList = defineCachedFunction(
  async (): Promise<Game[]> => {
    const games = useStorage("assets:data:games");
    const keys = await games.getKeys();
    const items = await games.getItems(keys);
    return ZGame.array().parse(items.map(({ value }) => value));
  },
  {
    maxAge: 0,
    validate: () => !import.meta.dev,
    name: "getStorageGameList",
  },
);

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

export async function getGameBatch(matchIds: GameId[]): Promise<Game[]> {
  const games = useStorage("assets:data:games");
  return (await Promise.all(matchIds.map(id => games.getItem(`${id}.json`))))
    .map(m => ZGame.parse(m));
}
