import { ZMatch } from "~/types/data";
import type { Match, MatchId, MatchR } from "~/types/data";

export function getMatch(matchId: MatchId): Match | undefined {
  // 通过比赛ID读取比赛数据，并解析为Match对象
  return ZMatch.parse(readData<Match>(`matches/${matchId}`));
}

export function getMatchR(matchId: MatchId): MatchR | undefined {
  const match = getMatch(matchId);
  if (!match) return;
  const tournament = getTournament(match.tournamentId)!;
  const games = match.gameIds.map(gameId => getGame(gameId)!);
  const aWinDiff = games.reduce((value, game) => {
    if (game.winner === "A") return value + 1;
    if (game.winner === "B") return value - 1;
    return value;
  }, 0);
  return {
    ...match,
    gameVersion: tournament.gameVersion,
    winner: match.winner ?? (aWinDiff > 0 ? "A" : aWinDiff < 0 ? "B" : "DRAW"),
  };
}
