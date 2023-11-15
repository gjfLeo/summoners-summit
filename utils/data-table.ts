import { NIcon, NTooltip } from "naive-ui";
import { breakpointsTailwind } from "@vueuse/core";

const isMobile = useBreakpoints(breakpointsTailwind).smaller("md");

export function renderTableTitle(title: string, description: string) {
  return () => h("div",
    {
      class: "flex flex-wrap gap-1 justify-center items-center",
    },
    [
      h("span", title),
      h(NTooltip,
        {
          trigger: "hover",
        },
        {
          trigger: () => h(NIcon, { class: "i-carbon:information text-lg" }),
          default: () => h("span", description),
        },
      ),
    ],
  );
}
