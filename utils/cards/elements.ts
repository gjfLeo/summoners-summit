interface ElementInfo {
  readonly name: string;
  readonly nameEn: string;
  readonly color: string;
}

function defineElementInfo(element: ElementInfo) {
  return element;
}

export const ALL_ELEMENTS_INFO = {
  Cryo: defineElementInfo({ name: "冰", nameEn: "Cryo", color: "#9fd6e3" }),
  Hydro: defineElementInfo({ name: "水", nameEn: "Hydro", color: "#4cc2f1" }),
  Pyro: defineElementInfo({ name: "火", nameEn: "Pyro", color: "#ef7938" }),
  Electro: defineElementInfo({ name: "雷", nameEn: "Electro", color: "#af8ec1" }),
  Anemo: defineElementInfo({ name: "风", nameEn: "Anemo", color: "#74c2a8" }),
  Geo: defineElementInfo({ name: "岩", nameEn: "Geo", color: "#fab632" }),
  Dendro: defineElementInfo({ name: "草", nameEn: "Dendro", color: "#a5c83b" }),
};
