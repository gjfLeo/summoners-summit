import anemoDecks from "./anemo";
import cryoDecks from "./cryo";
import dendroDecks from "./dendro";
import geoDecks from "./geo";
import hydroDecks from "./hydro";
import otherDecks from "./other";
import pyroDecks from "./pyro";

export { default as anemoDecks } from "./anemo";
export { default as cryoDecks } from "./cryo";
export { default as dendroDecks } from "./dendro";
export { default as geoDecks } from "./geo";
export { default as hydroDecks } from "./hydro";
export { default as otherDecks } from "./other";
export { default as pyroDecks } from "./pyro";

export const allDecks = Object.values({
  ...cryoDecks,
  ...hydroDecks,
  ...pyroDecks,
  //   ...electroDecks,
  ...anemoDecks,
  ...geoDecks,
  ...dendroDecks,
  ...otherDecks,
});
