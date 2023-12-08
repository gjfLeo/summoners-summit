import { breakpointsTailwind } from "@vueuse/core";
import type { ChartOptions, LayoutPosition } from "chart.js";

export default function useChartOptions() {
  const { sm, md } = useBreakpoints(breakpointsTailwind);

  const aspectRatio = computed<ChartOptions["aspectRatio"]>(() => md.value ? 4 : (sm.value ? 3 : 2));
  const legendPosition = computed<LayoutPosition>(() => sm.value ? "right" : "bottom");

  // const commonChartOptions = computed<Partial<ChartOptions>>(() => ({
  //   responsive: true,
  //   aspectRatio: md.value ? 4 : (sm.value ? 3 : 2),
  //   plugins: {
  //     legend: {
  //       position: sm.value ? "right" : "bottom",
  //     },
  //   },
  // }));

  return { aspectRatio, legendPosition };
}
