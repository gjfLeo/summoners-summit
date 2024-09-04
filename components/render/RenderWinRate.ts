import { divide } from "mathjs/number";
import { NTooltip } from "#components";

export default function renderWinRate(win: number, total: number, winRate?: number) {
  return h(
    NTooltip,
    {
      trigger: "hover",
      placement: "right",
    },
    {
      trigger: () => h("span", toPercentageString(winRate ?? divide(win, total))),
      default: () => h("span", `${win} / ${total}`),
    },
  );
}
