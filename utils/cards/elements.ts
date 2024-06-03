interface ElementInfo {
  readonly name: string;
  readonly nameEn: string;
  readonly color: string;
}

function defineElementInfo(element: ElementInfo) {
  return element;
}

export const ALL_ELEMENTS_INFO: Record<string, ElementInfo> = {
  cryo: defineElementInfo({ name: "冰", nameEn: "Cryo", color: "#CFFFFF" }),
  hydro: defineElementInfo({ name: "水", nameEn: "Hydro", color: "#08E4FF" }),
  pyro: defineElementInfo({ name: "火", nameEn: "Pyro", color: "#FFA971" }),
  electro: defineElementInfo({ name: "雷", nameEn: "Electro", color: "#DEBAFF" }),
  anemo: defineElementInfo({ name: "风", nameEn: "Anemo", color: "#A6F7CF" }),
  geo: defineElementInfo({ name: "岩", nameEn: "Geo", color: "#F5D761" }),
  dendro: defineElementInfo({ name: "草", nameEn: "Dendro", color: "#B1EB29" }),
};
