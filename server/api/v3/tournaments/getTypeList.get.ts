import type { TournamentType } from "~/types/data";

export default defineEventHandler(() => {
  const tournamentTypes: TournamentType[] = [
    { value: "积分赛", level: "B" },
    { value: "平台赛", level: "B" },
    { value: "入围赛", level: "B" },
    { value: "地区大赛", level: "A" },
    { value: "官方邀请赛", level: "A" },
    { value: "非官方体系", level: "C" },
  ];

  return responseData({ tournamentTypes });
});
