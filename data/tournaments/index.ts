import { findDeck } from "../decks";
import { swapGamePlayers } from "../shared/utils/game";
import t0001 from "./t0001";
import type { Game } from "~/utils/types";

export const tournaments = {
  t0001,
};

export function tournamentIdFilter(v: string): v is keyof typeof tournaments {
  return Object.keys(tournaments).includes(v);
}

function getGameList(tournamentId?: keyof typeof tournaments): Game[] {
  const selectedTournaments = tournamentId ? { [tournamentId]: tournaments[tournamentId] } : tournaments;
  const gameList = new Array<Game>();
  Object.entries(selectedTournaments).forEach(([tid, t]) => {
    t.stages.forEach((stage, stageIndex) => {
      stage.matches.forEach((match, matchIndex) => {
        match.games.forEach((game, gameIndex) => {
          gameList.push({
            id: `${tid.slice(1)}${stageIndex.toString().padStart(2, "0")}${matchIndex.toString().padStart(2, "0")}${gameIndex.toString().padStart(2, "0")}`,
            name: `${t.name}${stage.name}第${matchIndex}场第${gameIndex}局`,
            date: "",
            rules: stage.rules,
            playerA: match.playerA,
            playerB: match.playerB,
            ...game,
          });
        });
      });
    });
  });
  return gameList;
}

export const gameList = getGameList();
export const tournamentGameLists = Object.fromEntries(Object.keys(tournaments).filter(tournamentIdFilter).map(id => [id, getGameList(id)])) as Record<keyof typeof tournaments, Game[]>;

export function findGamesByTeam(teamId: string, tournamentId?: keyof typeof tournaments): Game[] {
  const allGameList = getGameList(tournamentId);
  const gameList = new Array<Game>();
  allGameList.forEach((game) => {
    const deckA = findDeck(game.deckA);
    const deckB = findDeck(game.deckB);
    if (deckA && getTeamId(deckA) === teamId) {
      gameList.push({ ...game });
    }
    if (deckB && getTeamId(deckB) === teamId) {
      gameList.push(swapGamePlayers(game));
    }
  });
  return gameList;
}

export function findGamesByDeck(deckId: string, tournamentId?: keyof typeof tournaments): Game[] {
  const allGameList = getGameList(tournamentId);
  const gameList = new Array<Game>();
  allGameList.forEach((game) => {
    if (game.deckA === deckId) {
      gameList.push({ ...game });
    }
    if (game.deckB === deckId) {
      gameList.push(swapGamePlayers(game));
    }
  });
  return gameList;
}
