import { z } from "zod";
import { getPlayer, getPlayerAchievements, getTournamentDetailBriefList } from "~/server/service";
import { ZPlayerId } from "~/types";

const ZParams = z.object({
  id: ZPlayerId,
});

export default defineEventHandler(async (event) => {
  const params = await getValidatedQuery(event, ZParams.parse);
  const { id } = params;

  const player = getPlayer(id);

  if (!player) {
    throw createError(errorCodes.PLAYER_NOT_FOUND);
  }

  const achievements = getPlayerAchievements(id);

  const tournaments = getTournamentDetailBriefList();
  const champions = tournaments.filter(tournament => tournament.champion?.playerId === id)
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
