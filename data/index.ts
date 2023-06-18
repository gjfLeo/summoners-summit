import { deckList } from "./decks";
import { getTeamId, teamSorter } from "./shared/utils";

export * from "./decks";
export * from "./tournaments";
export * from "./images";

export const teamList = [...new Set(deckList.map(getTeamId))].sort(teamSorter);
