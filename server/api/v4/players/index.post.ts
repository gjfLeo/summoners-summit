import { savePlayerV2 } from "~~/server/service";

defineRouteMeta({
  openAPI: {
    tags: ["Players"],
    summary: "选手信息新增",
  },
});

const zBody = ZPlayer.omit({ id: true });

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, zBody.parse);
  return await savePlayerV2(body);
});
