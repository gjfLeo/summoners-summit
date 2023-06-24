import type { Element } from "~/utils/types";

export const ALL_GAME_ELEMENTS = ["cryo", "hydro", "pyro", "electro", "anemo", "geo", "dendro"] as const;
const elementOrder = Object.fromEntries(ALL_GAME_ELEMENTS.map((card, i) => [card, i])) as Record<Element, number>;
export const elementSorter = (a: Element, b: Element) => elementOrder[a] - elementOrder[b];
