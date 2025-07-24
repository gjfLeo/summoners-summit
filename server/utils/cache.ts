export const serverMaxAge = import.meta.dev ? 1 : 60 * 60 * 24 * 365;
export function getKey(...args: (string | undefined | null)[]) {
  return args.filter(Boolean).join(":");
}
