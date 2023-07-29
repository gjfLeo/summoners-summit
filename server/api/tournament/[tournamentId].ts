import { tournamentById } from "../../data";

export default defineEventHandler((event) => {
  const tournamentId = event.context.params!.tournamentId;

  const tournament = tournamentById[tournamentId];
  if (!tournament) {
    return { code: 204, message: "赛事不存在" };
  }

  return { code: 200, tournament };
});
