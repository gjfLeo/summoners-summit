defineRouteMeta({
  openAPI: {
    tags: ["Misc"],
    summary: "查询常量配置",
    description: "查询常量配置，包含赛事的类型和地区选项。",
  },
});

export default defineEventHandler(async () => {
  const tournamentTypeList: TournamentType[] = [
    { value: "积分赛", level: "B" },
    { value: "平台赛", level: "B" },
    { value: "入围赛", level: "B" },
    { value: "地区大赛", level: "A" },
    { value: "官方邀请赛", level: "A" },
    { value: "积分赛试办", level: "C" },
    { value: "非官方赛事", level: "C" },
    { value: "未分类", level: "C" },
    { value: "未分类（外服）", level: "C" },
  ];

  const regionList: { key: Region; name: Record<Locales, string> }[] = [
    { key: "CN", name: { zh: "国服赛事", en: "CN" } },
    { key: "Atlantic", name: { zh: "大西洋赛区", en: "Atlantic" } },
    { key: "Pacific", name: { zh: "太平洋赛区", en: "Pacific" } },
    { key: "CrossRegion", name: { zh: "跨地区赛事", en: "Cross-region" } },
    { key: "Other", name: { zh: "其他", en: "Other" } },
  ];

  return {
    tournamentTypeList,
    regionList,
  };
});
