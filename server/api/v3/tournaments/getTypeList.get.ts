import { defineEventHandler } from "#imports";
import { responseData } from "~/server/utils";
import type { TournamentType } from "~/types/data";

export default defineEventHandler(() => {
  const tournamentTypeList: TournamentType[] = [
    { value: "积分赛", level: "B" },
    { value: "平台赛", level: "B" },
    { value: "入围赛", level: "B" },
    { value: "地区大赛", level: "A" },
    { value: "官方邀请赛", level: "A" },
    { value: "积分赛试办", level: "C" },
    { value: "非官方体系", level: "C" },
    { value: "未分类", level: "C" },
    { value: "未分类（外服）", level: "C" },
  ];

  return responseData({ tournamentTypeList });
});
