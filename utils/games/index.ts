import type { Game, Match } from "../types";

/**
 * 生成对局镜像（交换选手位置）
 *
 * @param game 待镜像的对局
 * @returns 对局镜像
 */
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

/**
 * 生成场次镜像（交换选手位置）
 *
 * @param match 待镜像的场次
 * @returns 场次镜像
 */
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
