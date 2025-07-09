export default defineEventHandler((event) => {
  if (event.method === "GET") {
    setHeader(event, "Access-Control-Allow-Origin", "*");
  }
});
