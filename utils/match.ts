import type { Game, GameId, Match } from "~/types";

export function getMatchWinner(match: Match, games: Record<GameId, Game>): NonNullable<Match["winnerOverride"]> {
  if (match.winnerOverride) return match.winnerOverride;
  const abDiff = match.gameIds.map(gameId => games[gameId])
    .map(game => game.winner)
    .reduce((diff, winner) => {
      if (winner === "A") return diff + 1;
      if (winner === "B") return diff - 1;
      return diff;
    }, 0);
  if (abDiff > 0) return "A";
  if (abDiff < 0) return "B";
  return "DRAW";
}

export function getMirroredPlayer<T extends string | undefined>(player: T | "A" | "B"): T | "A" | "B" {
  if (player === "A") {
    return "B";
  }
  if (player === "B") {
    return "A";
  }
  return player;
}

export function getMirroredGame<T extends Pick<Game, "playerADeck" | "playerBDeck" | "starter" | "winner">>(t: T): T {
  return {
    ...t,
    playerADeck: t.playerBDeck,
    playerBDeck: t.playerADeck,
    starter: getMirroredPlayer(t.starter),
    winner: getMirroredPlayer(t.winner),
  };
}
