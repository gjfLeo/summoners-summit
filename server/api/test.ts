import { MD5 } from "crypto-js";

export default defineEventHandler((_event) => {
  return { msg: MD5("hello world") };
});
