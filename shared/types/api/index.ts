import z from "zod";

export * from "./cards/GetActionCardStats";

export * from "./players/GetPlayerStatsByVersion";
export * from "./players/shared";

export * from "./stats";

export * from "./stub/GetOverview";

export * from "./teams/GetAllTeamMatchups";

export const ZMatchSaveParams = ZMatch
  .partial({
    id: true,
  })
  .omit({
    gameVersion: true,
    gameIds: true,
    bans: true,
    playerA: true,
    playerB: true,
  })
  .extend({
    playerA: z.object({
      playerId: z.preprocess(v => v === null ? undefined : v, ZPlayerId.optional()),
      nickname: ZPlayerNickname,
    }),
    playerB: z.object({
      playerId: z.preprocess(v => v === null ? undefined : v, ZPlayerId.optional()),
      nickname: ZPlayerNickname,
    }),

    bans: z.object({
      _key: z.number(),
      playerACardIds: z.union([ZCardId.array().length(1), ZCardId.array().length(3)]),
      playerBCardIds: z.union([ZCardId.array().length(1), ZCardId.array().length(3)]),
    }).array(),
    games: ZGame
      .omit({
        id: true,
        matchId: true,
        gameVersion: true,
      })
      .extend({
        _key: z.number(),
        playerADeck: z.object({
          characters: z.array(ZCardId).length(3),
          deckCode: ZDeckCode.optional(),
        }),
        playerBDeck: z.object({
          characters: z.array(ZCardId).length(3),
          deckCode: ZDeckCode.optional(),
        }),
      })
      .array(),
  })
  .strip();
export type SaveMatchParams = z.infer<typeof ZMatchSaveParams>;
