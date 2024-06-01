import { z } from "zod";

export const ZDeckId = z.string().regex(/^[A-Z0-9+/=]{68}$/i);
export const ZDeckTeamId = z.string().regex(/^\d{4}-\d{4}-\d{4}$/);
