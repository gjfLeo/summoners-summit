import { findDeck } from "../decks";
import { swapGamePlayers } from "../shared/utils/game";
import t0001 from "./t0001";
import type { Game } from "~/utils/types";

export const tournamentById = Object.fromEntries(
  [
    t0001,
  ]
    .map(tournament => [tournament.id, tournament]),
);

function getGameList(tournamentId?: string): Game[] {
  const selectedTournaments = tournamentId ? { [tournamentId]: tournamentById[tournamentId] } : tournamentById;
  const gameList = new Array<Game>();
  Object.entries(selectedTournaments).forEach(([_tid, t]) => {
    const { name: tournamentName } = t;
    t.stages.forEach((stage) => {
      stage.parts.forEach((part) => {
        part.matches.forEach((match, matchIndex) => {
          match.name = match.name ?? (part.matches.length > 1 ? `第${matchIndex + 1}场` : "");
          match.games.forEach((game, gameIndex) => {
            const gameName = match.games.length > 1 ? `第${gameIndex + 1}局` : "";
            gameList.push({
              tournamentName,
              matchName: `${stage.name}${part.name}${match.name}`,
              gameName,
              date: part.date,
              playerA: match.playerA,
              playerB: match.playerB,
              ...game,
            });
          });
        });
      });
    });
  });
  return gameList;
}

export const gameList = getGameList();
// export const tournamentGameLists = Object.fromEntries(Object.keys(tournaments).map(id => [id, getGameList(id)])) as Record<string, Game[]>;
export const gameById = Object.fromEntries(Object.values(gameList).map(game => [game.id, game]));

export function findGamesByTeam(teamId: string, tournamentId?: string): Game[] {
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

export function findGamesByDeck(deckId: string, tournamentId?: string): Game[] {
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
