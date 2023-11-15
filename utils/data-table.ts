import { NIcon, NTooltip } from "naive-ui";

export function renderTableTitle(title: string, description: string) {
  return () => h("div",
    {
      class: "flex gap-1 justify-center items-center",
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
