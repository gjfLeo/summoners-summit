import { clearTournamentCache, writeTournamentV2 } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Tournaments"],
    summary: "赛事数据修改",
    description: "新增或修改赛事数据",
  },
});

const ZSaveTournamentParams = ZTournament.partial({
  id: true,
  stages: true,
}).strip();

export default defineEventHandler(async (event) => {
  const params = await readValidatedBody(event, ZSaveTournamentParams.parse);

  const tournament: Tournament = {
    ...params,
    id: params.id || hash(params.gameVersion + (params.name.zh ?? params.name.en)),
    stages: params.stages ?? [],
  };
  await writeTournamentV2(tournament);
  await clearTournamentCache([tournament.id]);

  return { id: tournament.id };
});
