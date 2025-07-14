import { z } from "zod";

export function ZNullToUndefined<T extends z.ZodTypeAny>(schema: T) {
  return z.preprocess(val => (val === null ? undefined : val), schema);
}
