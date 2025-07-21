export default defineEventHandler(async () => {
  const storage = useStorage("cache");
  const keys = await storage.getKeys("storage:games");
  console.log("keys", keys);
  for (const key of keys) {
    await storage.removeItem(key);
  }
  console.log("cleared");
  console.log("keys", await storage.getKeys("storage:games"));
  return "success";
});
