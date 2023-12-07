import type { Game, Match } from "../types";

export function getGameMirror(game: Game): Game {
  const { playerAId, playerANickname, playerBId, playerBNickname, playerACharacters, playerBCharacters, playerADeckId, playerBDeckId, starter, winner } = game;
  return {
    ...game,
    playerAId: playerBId,
    playerBId: playerAId,
    playerANickname: playerBNickname,
    playerBNickname: playerANickname,
    playerACharacters: playerBCharacters,
    playerBCharacters: playerACharacters,
    playerADeckId: playerBDeckId,
    playerBDeckId: playerADeckId,
    starter: starter ? (starter === "A" ? "B" : "A") : "",
    winner: winner === "A" ? "B" : "A",
  };
}

export function getMatchMirror(match: Match): Match {
  const { playerAId, playerANickname, playerBId, playerBNickname, winner } = match;
  return {
    ...match,
    playerAId: playerBId,
    playerBId: playerAId,
    playerANickname: playerBNickname,
    playerBNickname: playerANickname,
    winner: winner === "A" ? "B" : "A",
  };
}
