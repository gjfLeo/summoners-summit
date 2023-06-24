import { defineDeck } from "./decks";
import type { Deck, Tournament, TournamentMatch, TournamentMatchGame, TournamentStage, TournamentStagePart } from "~/utils/types";

interface TournamentParam extends Tournament {
  stages: TournamentParamStage[];
}

interface TournamentParamStage extends TournamentStage {
  parts: TournamentParamStagePart[];
}

interface TournamentParamStagePart extends TournamentStagePart {
  matches: TournamentParamMatch[];
}

interface TournamentParamMatch extends Omit<TournamentMatch, "games"> {
  games: TournamentParamMatchGame[];
}

interface TournamentParamMatchGame extends Omit<TournamentMatchGame, "id" | "playerADeckId" | "playerBDeckId"> {
  playerAActions?: Deck["actionCards"];
  playerBActions?: Deck["actionCards"];
}

export function getGameIdGenerator(tournamentId: string): () => string {
  let index = 0;
  return () => {
    index++;
    return `${tournamentId}${index.toString().padStart(4, "0")}`;
  };
}

export function defineTournament(tournament: TournamentParam): Tournament {
  const gameIdGenerator = getGameIdGenerator(tournament.id);
  tournament.stages.forEach((stage) => {
    stage.parts.forEach((part) => {
      part.matches.forEach((match) => {
        match.games.forEach((gameParam, i, games) => {
          const { playerACharacters, playerBCharacters, playerAActions, playerBActions, starter, winner, turns } = gameParam;
          const playerADeckId = playerAActions ? defineDeck(playerACharacters, playerAActions) : undefined;
          const playerBDeckId = playerBActions ? defineDeck(playerBCharacters, playerBActions) : undefined;
          (games as TournamentMatchGame[])[i] = {
            id: gameIdGenerator(),
            playerACharacters,
            playerBCharacters,
            playerADeckId,
            playerBDeckId,
            starter,
            winner,
            turns,
          };
        });
      });
    });
  });
  return tournament as Tournament;
}
