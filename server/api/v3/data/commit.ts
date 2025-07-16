import { simpleGit } from "simple-git";
import { z } from "zod";

const schema = z.object({
  message: z.string().default("更新数据"),
});

export default defineEventHandler(async (event) => {
  const { message } = await readValidatedBody(event, schema.parse);

  const git = simpleGit();

  // await git.pull();
  // await git.reset();

  try {
    await git.add(["server/data"]);
    await git.commit(`data: ${message}\n\nCommitted by data-tools`);
    await git.push();
    return responseOk();
  }
  catch (error) {
    return responseError(error);
  }
});
