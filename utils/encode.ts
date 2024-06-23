export function toBase64Url(base64: string) {
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

export function toBase64(base64Url: string) {
  return base64Url.replace(/-/g, "+").replace(/_/g, "/").padEnd(base64Url.length + (4 - base64Url.length % 4) % 4, "=");
}
