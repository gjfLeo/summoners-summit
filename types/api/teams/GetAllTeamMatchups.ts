import type { DeckTeamId } from "~/types/data";
import { z } from "zod/v4";
import { ZGameVersionId } from "~/types/data";

export const ZGetAllTeamMatchupsParams = z.object({
  gameVersion: ZGameVersionId,
}).strip();
export type GetAllTeamMatchupsParams = z.infer<typeof ZGetAllTeamMatchupsParams>;

export interface TeamMatchups {
  teamId: DeckTeamId;
  opponents: {
    [opponentTeamId: DeckTeamId]: {
      numGames: number;
      numGamesWin: number;
    };
  };
  overall: {
    numGames: number;
    numGamesWin: number;
  };
};
