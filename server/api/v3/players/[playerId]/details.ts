import { getPlayer, getPlayerAchievements, getTournamentDetailBriefList } from "~/server/service";
import {
  ZApiPlayerRouterParams as ZRouterParams,
} from "~/types";

export default defineEventHandler(async (event) => {
  const { playerId } = await getValidatedRouterParams(event, ZRouterParams.parse);

  const player = getPlayer(playerId);

  if (!player) {
    throw createError(errorCodes.PLAYER_NOT_FOUND);
  }

  const achievements = getPlayerAchievements(playerId);

  const tournaments = getTournamentDetailBriefList();
  const champions = tournaments.filter(tournament => tournament.champion?.playerId === playerId)
    .sort((a, b) => b.gameVersion.localeCompare(a.gameVersion))
    .sort((a, b) => {
      if (!a.dateRange.start || !b.dateRange.start) {
        return 0;
      }
      return b.dateRange.start.localeCompare(a.dateRange.start);
    });
  return responseData({
    player: {
      ...player,
      champions,
      achievements,
    },
  });
});
