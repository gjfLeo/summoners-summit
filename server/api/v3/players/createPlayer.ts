export default defineEventHandler(async (event) => {
  const { uid, uniqueName } = await readValidatedBody(event, ZPlayerCreateParams.parse);

  savePlayer({
    uid,
    uniqueName,
    aliases: [],
  });

  return responseOk({});
});
