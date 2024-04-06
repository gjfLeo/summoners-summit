import crypto from "node:crypto";

export function getWikiaImageUrl(filename: string) {
  const md5 = crypto.createHash("md5");
  filename = filename.replace(":", "");
  filename = filename.replace("?", "");
  filename = filename.replaceAll(" ", "_");
  const hash = md5.update(filename).digest("hex");
  filename = filename.replace("'", "%27");
  return `https://static.wikia.nocookie.net/gensin-impact/images/${hash.charAt(0)}/${hash.slice(0, 2)}/${filename}`;
}
