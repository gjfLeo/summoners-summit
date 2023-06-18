import { getImageUrl } from "../shared/utils/images";
import type { GElement } from "~/utils/types";

const elementFilenames: Record<GElement, string> = {
  cryo: "Element Cryo.png",
  hydro: "Element Hydro.png",
  pyro: "Element Pyro.png",
  electro: "Element Electro.png",
  anemo: "Element Anemo.png",
  geo: "Element Geo.png",
  dendro: "Element Dendro.png",
};

export const elementImages = Object.fromEntries(
  Object.entries(elementFilenames)
    .map(([card, filename]) => [card, getImageUrl(filename)]),
);
