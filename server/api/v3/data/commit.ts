import { simpleGit } from "simple-git";
import { z } from "zod";

const schema = z.object({
  message: z.string().optional(),
});

export default eventHandler(async (event) => {
  const { message } = await getValidatedQuery(event, schema.parse);

  const git = simpleGit();

  await git.pull();
  await git.reset();
  await git.add(["server/data"]);
  await git.commit(`data: ${message ?? "更新数据"}\n\nCommitted by data-tools`);
  await git.push();
});
