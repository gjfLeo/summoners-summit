import { z } from "zod";

export const ZLocales = z.enum(["zh", "en"]);
export type Locales = z.infer<typeof ZLocales>;
