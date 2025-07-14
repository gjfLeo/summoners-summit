import { z } from "zod";

export const ZGetTeamMatchupsParams = z.object({
  gameVersion: ZGameVersionId,
});

export interface GetTeamMatchupsResponseItem {
  opponentTeamId: DeckTeamId;
  numGames: number;
  numGamesWin: number;
  numGamesStarter: number;
  numGamesStarterWin: number;
}

export interface GetTeamMatchupsResponse {
  matchups: GetTeamMatchupsResponseItem[];
}
