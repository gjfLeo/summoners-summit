import CryptoJS from "crypto-js";

export function getImageUrl(filename: string) {
  filename = filename.replaceAll(" ", "_");
  const hash = CryptoJS.MD5(filename).toString();
  filename = filename.replace("'", "%27");
  return `https://static.wikia.nocookie.net/gensin-impact/images/${hash.charAt(0)}/${hash.slice(0, 2)}/${filename}`;
}
