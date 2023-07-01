import md5 from "crypto-js/md5";
import { registerDeck } from "./decks";
import type { Deck, Tournament, TournamentMatch, TournamentMatchGame, TournamentStage, TournamentStagePart } from "~/utils/types";

interface TournamentParam extends Omit<Tournament, "id"> {
  stages: TournamentParamStage[];
}

interface TournamentParamStage extends TournamentStage {
  parts: TournamentParamStagePart[];
}

interface TournamentParamStagePart extends Omit<TournamentStagePart, "matches"> {
  matches: TournamentParamMatch[];
}

interface TournamentParamMatch extends Omit<TournamentMatch, "winner" | "games"> {
  winner?: "A" | "B";
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
  const tournamentId = md5(tournament.name + tournament.gameVersion).toString().slice(8, 24);
  (tournament as Tournament).id = tournamentId;
  const gameIdGenerator = getGameIdGenerator(tournamentId);
  tournament.stages.forEach((stage) => {
    stage.parts.forEach((part) => {
      part.matches.forEach((match) => {
        if (!match.winner) {
          const aWin = match.games.filter(g => g.winner === "A").length;
          const bWin = match.games.filter(g => g.winner === "B").length;
          match.winner = aWin > bWin ? "A" : "B";
        }
        match.games.forEach((gameParam, i, games) => {
          const { playerACharacters, playerBCharacters, playerAActions, playerBActions, starter, winner, turns } = gameParam;
          const playerADeckId = playerAActions ? registerDeck(playerACharacters, playerAActions) : undefined;
          const playerBDeckId = playerBActions ? registerDeck(playerBCharacters, playerBActions) : undefined;
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
