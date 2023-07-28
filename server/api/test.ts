import CryptoJS from "crypto-js";

export default defineEventHandler((_event) => {
  return { msg: CryptoJS.MD5("hello world").toString() };
});
