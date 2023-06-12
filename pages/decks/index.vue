<template>
  <pre>{{ deckList }}</pre>
</template>

<script lang="ts" setup>
import { deckList } from "~/data";

// const deckMapByTeam = deckList.reduce<Record<string, Deck[]>>((map, deck) => {
//   const team = (Object.keys(deck.characterCards) as CharacterCard[]).sort(characterCardSorter);
//   if (map[team.join("/")]) {
//     map[team.join("/")] = map[team.join("/")].concat(deck);
//   }
//   else {
//     map[team.join("/")] = [deck];
//   }
//   return map;
// }, {});
</script>
