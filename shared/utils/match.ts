export function getMatchWinner(match: MaybeMirrored<Match>, games: Record<GameId, MaybeMirrored<Game>>): NonNullable<Match["winnerOverride"]> {
  if (match.winnerOverride) return match.winnerOverride;
  const abDiff = match.gameIds
    .map(gameId => games[gameId])
    .reduce((diff, game) => {
      const mirrorSame = isMirrored(match) === isMirrored(game);
      if (game.winner === "A") return diff + (mirrorSame ? 1 : -1);
      if (game.winner === "B") return diff - (mirrorSame ? 1 : -1);
      return diff;
    }, 0);
  if (abDiff > 0) return "A";
  if (abDiff < 0) return "B";
  return "DRAW";
}

type CanBeMirrored = Game | GameDetail | Match | MatchDetail;
export type Mirrored<T extends CanBeMirrored> = { mirrored: true } & T;
export type MaybeMirrored<T extends CanBeMirrored> = T | Mirrored<T>;
export function isMirrored<T extends CanBeMirrored>(item: MaybeMirrored<T>): item is Mirrored<T> {
  return "mirrored" in item && item.mirrored === true;
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

export function getMirroredGame(original: Game): Mirrored<Game> {
  if ("mirrored" in original) {
    throw new Error("Game already mirrored");
  }
  return {
    ...original,
    playerADeck: original.playerBDeck,
    playerBDeck: original.playerADeck,
    starter: getMirroredPlayer(original.starter),
    winner: getMirroredPlayer(original.winner),
    mirrored: true,
  };
}

export function getMirroredGameDetail(original: GameDetail): Mirrored<GameDetail> {
  if ("mirrored" in original) {
    throw new Error("Game already mirrored");
  }
  return {
    ...original,
    playerA: original.playerB,
    playerB: original.playerA,
    playerADeck: original.playerBDeck,
    playerBDeck: original.playerADeck,
    starter: getMirroredPlayer(original.starter),
    winner: getMirroredPlayer(original.winner),
    mirrored: true,
  };
}

function getMirroredBan(ban: Ban) {
  switch (ban.banType) {
    case "character":
      return {
        ...ban,
        playerACardId: ban.playerBCardId,
        playerBCardId: ban.playerACardId,
      };
    case "team":
      return {
        ...ban,
        playerATeamId: ban.playerBTeamId,
        playerBTeamId: ban.playerATeamId,
      };
  }
}

export function getMirroredMatch(original: Match): Mirrored<Match> {
  if ("mirrored" in original) {
    throw new Error("Match already mirrored");
  }
  return {
    ...original,
    playerA: original.playerB,
    playerB: original.playerA,
    bans: original.bans?.map(getMirroredBan),
    winnerOverride: getMirroredPlayer(original.winnerOverride),
    mirrored: true,
  };
}

export function getMirroredMatchDetail(original: MatchDetail): Mirrored<MatchDetail> {
  if ("mirrored" in original) {
    throw new Error("Match already mirrored");
  }
  return {
    ...original,
    playerA: original.playerB,
    playerB: original.playerA,
    bans: original.bans?.map(getMirroredBan),
    winnerOverride: getMirroredPlayer(original.winnerOverride),
    winner: getMirroredPlayer(original.winner),
    mirrored: true,
  };
}

export function getTournamentMatchIds(tournament: Tournament) {
  return tournament.stages.flatMap((s) => {
    return s.parts.flatMap(p => p.matchIds);
  });
}
