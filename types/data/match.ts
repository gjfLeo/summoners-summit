import { z } from "zod";
import { ZCardId, ZGameId, ZMatchId, ZTournamentId } from "./base";
import { ZDeckTeamId } from "./deck";
import { ZPlayerId, ZPlayerNickname } from "./player";

const ZBanCharacter = z.object({
  banType: z.literal("character"),
  playerACardId: ZCardId,
  playerBCardId: ZCardId,
});
const ZBanTeam = z.object({
  banType: z.literal("team"),
  playerATeamId: ZDeckTeamId,
  playerBTeamId: ZDeckTeamId,
});
export const ZBan = z.union([ZBanCharacter, ZBanTeam]);
export type Ban = z.infer<typeof ZBan>;

export const ZMatch = z.object({
  id: ZMatchId,
  tournamentId: ZTournamentId,
  stageIndex: z.number(),
  partIndex: z.number(),
  matchIndex: z.number(),
  isFinal: z.boolean().optional(),
  playerA: z.object({
    playerId: ZPlayerId,
    nickname: ZPlayerNickname,
  }),
  playerB: z.object({
    playerId: ZPlayerId,
    nickname: ZPlayerNickname,
  }),
  winnerOverride: z.enum(["A", "B", "DRAW"]).optional(),
  bans: ZBan.array().optional(),
  gameIds: ZGameId.array(),
  video: z.string().optional(),
}).strip();
export type Match = z.infer<typeof ZMatch>;
