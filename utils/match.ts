import type { Game, GameDetail, GameId, Match, MatchDetail } from "~/types";

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

export function getMirroredGame(t: Game): Game {
  return {
    ...t,
    playerADeck: t.playerBDeck,
    playerBDeck: t.playerADeck,
    starter: getMirroredPlayer(t.starter),
    winner: getMirroredPlayer(t.winner),
  };
}

export function getMirroredGameDetail(game: GameDetail): GameDetail {
  return {
    ...game,
    playerA: game.playerB,
    playerB: game.playerA,
    playerADeck: game.playerBDeck,
    playerBDeck: game.playerADeck,
    starter: getMirroredPlayer(game.starter),
    winner: getMirroredPlayer(game.winner),
  };
}

export function getMirroredMatch(t: Match): Match {
  return {
    ...t,
    playerA: t.playerB,
    playerB: t.playerA,
    bans: t.bans?.map(b => (
      b.banType === "character"
        ? {
            ...b,
            playerACardId: b.playerBCardId,
            playerBCardId: b.playerACardId,
          }
        : {
            ...b,
            playerATeamId: b.playerBTeamId,
            playerBTeamId: b.playerATeamId,
          })),
    winnerOverride: getMirroredPlayer(t.winnerOverride),
  };
}

export function getMirroredMatchDetail(match: MatchDetail): MatchDetail {
  return {
    ...match,

    playerA: match.playerB,
    playerB: match.playerA,
    bans: match.bans?.map(b => (
      b.banType === "character"
        ? {
            ...b,
            playerACardId: b.playerBCardId,
            playerBCardId: b.playerACardId,
          }
        : {
            ...b,
            playerATeamId: b.playerBTeamId,
            playerBTeamId: b.playerATeamId,
          })),
    winnerOverride: getMirroredPlayer(match.winnerOverride),
    winner: getMirroredPlayer(match.winner),
  };
}
