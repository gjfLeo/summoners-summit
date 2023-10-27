import { ALL_ACTION_CARDS } from "~/utils/cards";
import type { ActionCard, R } from "~/utils/types";

export default defineEventHandler<R & { actionCards: ActionCard[] }>(() => {
  return { statusCode: 200, actionCards: ALL_ACTION_CARDS };
});
