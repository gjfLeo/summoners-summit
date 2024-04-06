import md5 from "crypto-js/md5";

export function getImageUrl(filename: string) {
  filename = filename.replace(":", "");
  filename = filename.replace("?", "");
  filename = filename.replaceAll(" ", "_");
  const hash = md5(filename).toString();
  filename = filename.replace("'", "%27");
  return `https://static.wikia.nocookie.net/gensin-impact/images/${hash.charAt(0)}/${hash.slice(0, 2)}/${filename}`;
}
