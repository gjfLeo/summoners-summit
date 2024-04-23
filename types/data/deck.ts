import { z } from "zod";

export const ZDeckId = z.string().regex(/^[A-Za-z0-9\+\/\=]{68}$/);
export const ZDeckCharacters = z.string().regex(/^\d{4}-\d{4}-\d{4}$/);
