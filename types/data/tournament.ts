import { z } from "zod";

export const TournamentLevel = z.enum([
  "A", // 影幻杯
  "B", // 积分赛、平台赛等
  "C", // 积分赛试办、娱乐赛等
]);
export const TournamentType = z.object({
  name: z.record(ZLocales, z.string()),
  level: TournamentLevel,
});

export const TournamentTemplate = z.object({
  name: z.record(ZLocales, z.string()),
  type: TournamentType.shape.name.valueSchema,
});
