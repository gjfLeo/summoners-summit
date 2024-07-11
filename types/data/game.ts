import { z } from "zod";
import { ZCardId, ZGameId, ZGameVersionId, ZMatchId } from "./base";
import { ZDeckCode, ZDeckTeamId } from "./deck";

export const ZGame = z.object({
  id: ZGameId,
  matchId: ZMatchId,
  gameVersion: ZGameVersionId,
  playerADeck: z.object({
    characters: z.array(ZCardId).length(3),
    teamId: ZDeckTeamId,
    deckCode: ZDeckCode.optional(),
  }),
  playerBDeck: z.object({
    characters: z.array(ZCardId).length(3),
    teamId: ZDeckTeamId,
    deckCode: ZDeckCode.optional(),
  }),
  winner: z.enum(["A", "B", "DRAW-W", "DRAW-L"]).optional(),
  starter: z.enum(["A", "B"]).optional(),
  gameVideo: z.string().optional(),
});
export type Game = z.infer<typeof ZGame>;
