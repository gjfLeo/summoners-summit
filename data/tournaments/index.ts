import t37 from "./3.7";
import t38 from "./3.8";
import type { Game } from "~/utils/types";

export const tournamentList = [
  ...t37,
  ...t38,
].reverse();
export const tournamentById = Object.fromEntries(tournamentList.map(tournament => [tournament.id, tournament]));

export const gameList = tournamentList.flatMap<Game>((tournament) => {
  const { id: tournamentId, name: tournamentName, gameVersion } = tournament;
  return tournament.stages.flatMap((stage) => {
    const stageName = stage.name;
    return stage.parts.flatMap((part) => {
      const { name: partName, date } = part;
      return part.matches.flatMap((match, matchIndex, matches) => {
        const matchName = matches.length > 1 ? `第${matchIndex + 1}场` : "";
        const { playerA, playerB, video } = match;
        return match.games.flatMap((game, gameIndex, games) => {
          const gameName = games.length > 1 ? `第${gameIndex + 1}局` : "";
          return {
            tournamentId,

            tournamentName,
            stageName,
            partName,
            matchName,
            gameName,

            date,
            gameVersion,
            video,

            playerA,
            playerB,
            ...game,
          };
        });
      });
    });
  });
});
export const gameById = Object.fromEntries(gameList.map(game => [game.id, game]));
