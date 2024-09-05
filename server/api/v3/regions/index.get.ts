export default defineEventHandler(async () => {
  return responseData({
    regionList: [
      { key: "CN", name: { zh: "国服赛事", en: "CN" } },
      { key: "Atlantic", name: { zh: "大西洋赛区", en: "Atlantic" } },
      { key: "Pacific", name: { zh: "太平洋赛区", en: "Pacific" } },
    ],
  });
});
