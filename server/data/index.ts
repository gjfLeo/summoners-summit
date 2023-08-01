import { createHash } from "node:crypto";
import type { ActionCard, Deck, Game, Match, Tournament, TournamentPart, TournamentRawData, TournamentStage } from "../../utils/types";
import { actionCardSorter, characterCardSorter } from "../../utils/types";
import tournamentsRaw from "./tournaments";

const tournamentById: Record<string, Tournament> = {};
const matchById: Record<string, Match> = {};
const gameById: Record<string, Game> = {};
const deckById: Record<string, Deck> = {};

function getHashValue(raw: string): string {
  const md5 = createHash("md5").update(raw);
  return md5.digest("hex").toString().slice(8, 24);
}

function registerDeck(characters: Deck["characterCards"], actions?: Deck["actionCards"]) {
  if (!actions) {
    return undefined;
  }
  const characterCards = [...characters].sort(characterCardSorter) as Deck["characterCards"];
  const actionCards = Object.fromEntries(
    ([...Object.entries(actions)] as [ActionCard, number][])
      .sort((a, b) => actionCardSorter(a[0], b[0])),
  ) as Deck["actionCards"];
  const id = getHashValue(JSON.stringify({ characterCards, actionCards }));
  if (!deckById[id]) {
    deckById[id] = { id, characterCards, actionCards };
    const actionCardCount = Object.values(actionCards).reduce((a, b) => a + b);
    if (actionCardCount !== 30) {
      console.error(`行动牌数量≠30：http://localhost:3000/deck/${id}`);
    }
  }
  return id;
}

function loadTournamentRaw(tournamentRaw: TournamentRawData) {
  const {
    name: tournamentName,
    type,
    gameVersion,
    image,
    stages: stagesRaw,
  } = tournamentRaw;
  const tournamentId = getHashValue(gameVersion + tournamentName);
  let matchTotalIndex = 0;

  const stages = stagesRaw.map((stageRaw): TournamentStage => {
    // stage
    const {
      name: stageName,
      rules,
      parts: partsRaw,
    } = stageRaw;
    return ({
      name: stageName,
      rules,
      parts: partsRaw.map((partRaw): TournamentPart => {
        // part
        const {
          name: partName,
          date,
          matches: matchesRaw,
        } = partRaw;
        const matchIds = matchesRaw.map((matchRaw, matchIndex): string => {
          const {
            playerA,
            playerB,
            winner: winnerRaw,
            video,
            games: gamesRaw,
          } = matchRaw;
          matchTotalIndex++;
          const matchId = tournamentId + matchTotalIndex.toString().padStart(2, "0");
          const matchName = matchesRaw.length > 1 ? `第${matchIndex + 1}场` : "";

          const aGoals = gamesRaw.filter(g => g.winner === "A").length;
          const bGoals = gamesRaw.filter(g => g.winner === "B").length;
          const winner = winnerRaw ?? (aGoals > bGoals ? "A" : "B");

          const gameIds = gamesRaw.map((gameRaw, gameIndex): string => {
            const {
              playerACharacters,
              playerAActions,
              playerBCharacters,
              playerBActions,
              starter,
              winner,
              turns,
            } = gameRaw;
            const gameId = matchId + (gameIndex + 1).toString().padStart(2, "0");

            const playerADeckId = registerDeck(playerACharacters, playerAActions);
            const playerBDeckId = registerDeck(playerBCharacters, playerBActions);

            gameById[gameId] = {
              id: gameId,
              gameVersion,
              date,
              tournamentName,
              gameName: stageName + partName + matchName + (gamesRaw.length > 1 ? `第${gameIndex + 1}局` : ""),
              video,

              playerA,
              playerB,
              playerACharacters,
              playerADeckId,
              playerBCharacters,
              playerBDeckId,

              starter,
              winner,
              turns,
            };
            return gameId;
          });

          matchById[matchId] = {
            id: matchId,
            date,
            playerA,
            playerB,
            video,
            winner,
            gameIds,
          };
          return matchId;
        });
        return {
          name: partName,
          date,
          matchIds,
        };
      }),
    });
  });
  tournamentById[tournamentId] = {
    id: tournamentId,
    name: tournamentName,
    type,
    gameVersion,
    image,
    stages,
  };
}

tournamentsRaw.forEach(loadTournamentRaw);

export {
  tournamentById,
  matchById,
  gameById,
  deckById,
};
