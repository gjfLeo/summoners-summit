import { tournaments } from "./tournaments";

// export const matchList = Object.values(tournaments)
//   .flatMap(tournament => tournament.sections)
//   .flatMap(section => section.matches);

// export const gameList = Object.values(tournaments)
//   .flatMap(tournament => tournament.sections)
//   .flatMap(section => section.matches)
//   .flatMap(match => match.games);

// export function gameRecordsByDeckId(): GameRecord[] {
//   return gameList.filter(game => game.deckA);
// }

Object.keys(tournaments);

export * from "./decks";
export * from "./tournaments";
