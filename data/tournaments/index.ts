import 主播邀请赛 from "./主播邀请赛";
import type { DeckGameRecord } from "~/utils/types";

export const tournaments = {
  主播邀请赛,
};

export const gameList = Object.values(tournaments)
  .flatMap(tournament => tournament.sections)
  .flatMap(section => section.matches)
  .flatMap(match => match.games);

export function findDeckGameRecords(deckId: string): DeckGameRecord[] {
  const gameRecords = new Array<DeckGameRecord>();
  Object.values(tournaments)
    .flatMap(tournament => tournament.sections)
    .flatMap(section => section.matches).forEach((match) => {
      match.games.forEach((game) => {
        if (game.deckA === deckId) {
          gameRecords.push({
            deckId,
            player: match.playerA,
            opponentDeckId: game.deckB,
            opponentPlayer: match.playerB,
            startWith: game.startWith === "A",
            win: game.winner === "A",
          });
        }
        if (game.deckB === deckId) {
          gameRecords.push({
            deckId,
            player: match.playerB,
            opponentDeckId: game.deckA,
            opponentPlayer: match.playerA,
            startWith: game.startWith === "B",
            win: game.winner === "B",
          });
        }
      });
    });
  return gameRecords;
}
