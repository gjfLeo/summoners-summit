import { NIcon, NTooltip } from "naive-ui";
import { breakpointsTailwind } from "@vueuse/core";
import type { ActionCard, CharacterCard } from "./types";
import { CardImage } from "#components";

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

export function renderCardColumn(card: ActionCard | CharacterCard) {
  return isMobile
    ? h("div",
      {
        class: "flex justify-center",
      },
      h(NTooltip,
        {
          trigger: "hover",
          placement: "top",
        },
        {
          trigger: () => h(CardImage, { card, class: "h-12 mt--2 mb--2" }),
          default: h("span", card),
        },
      ),
    )
    : h("div",
      {
        class: "flex gap-2 items-center",
      },
      [
        h(CardImage, { card, class: "h-12 mt--2 mb--2" }),
        h("div", card),
      ],
    );
}
