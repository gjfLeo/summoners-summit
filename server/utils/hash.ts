import crypto from "node:crypto";

export function hash(str?: string): string {
  str = str ?? crypto.randomUUID();
  const md5 = crypto.createHash("md5");
  return md5.update(str).digest("hex").slice(8, 24);
}
