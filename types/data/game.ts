import { z } from "zod";
import { ZGameId, ZMatchId, ZTournamentId } from "./ids";
import { ZCardId } from "./cards";
import { ZDeckCode, ZDeckTeamId } from "./deck";
import { ZGameVersionId } from "./game-version";
import { ZPlayerId, ZPlayerNickname } from "./player";

export const ZGame = z.object({
  id: ZGameId,
  matchId: ZMatchId,
  playerADeck: z.object({
    characters: z.array(ZCardId).length(3),
    teamId: ZDeckTeamId.optional(),
    deckCode: ZDeckCode.optional(),
  }),
  playerBDeck: z.object({
    characters: z.array(ZCardId).length(3),
    teamId: ZDeckTeamId.optional(),
    deckCode: ZDeckCode.optional(),
  }),
  winner: z.enum(["A", "B", "DRAW-W", "DRAW-L"]).optional(),
  starter: z.enum(["A", "B"]).optional(),
  gameVideo: z.string().optional(),
});

export const ZGameDetail = ZGame.extend({
  gameVersion: ZGameVersionId,
  tournamentId: ZTournamentId,
  playerA: z.object({
    playerId: ZPlayerId,
    nickname: ZPlayerNickname,
  }),
  playerB: z.object({
    playerId: ZPlayerId,
    nickname: ZPlayerNickname,
  }),
  matchVideo: z.string().optional(),
});

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

export type Game = z.infer<typeof ZGame>;
export type GameDetail = z.infer<typeof ZGameDetail>;
export type Ban = z.infer<typeof ZBan>;
