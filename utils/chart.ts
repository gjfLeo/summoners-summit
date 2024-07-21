import { ROOT_FONT_SIZE_PX } from "~/config/layout";

export function remToPx(rem: number) {
  return rem * ROOT_FONT_SIZE_PX;
}
