import { z } from "zod/v4";

export function ZNullToUndefined<T extends z.ZodTypeAny>(schema: T) {
  return z.preprocess(val => (val === null ? undefined : val), schema);
}
