import { z } from "zod";

const ZParams = z.object({
  gameVersion: z.string(),
}).strip();

export default defineEventHandler(async (event) => {
  const { gameVersion } = await getValidatedQuery(event, ZParams.parse);
});
