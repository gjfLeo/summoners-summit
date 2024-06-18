<script lang="ts" setup>
import type { TournamentId } from "~/types/data";

const { tournaments } = await useApiGetTournamentList();

const tournamentsByVersion = computed(() => {
  return tournaments.value.reduce<Record<string, typeof tournaments["value"]>>(
    (map, t) => {
      const gameVersion = t.gameVersion;
      const list = map[gameVersion] ?? [];
      list.push(t);
      map[gameVersion] = list;
      return map;
    },
    {},
  );
});

const router = useRouter();
const localePath = useLocalePath();
function handleItemClick(tournamentId: TournamentId) {
  router.push(localePath(`/admin/tournament/${tournamentId}`));
}
</script>

<template>
  <div>
    <template v-for="(list, gameVersion) in tournamentsByVersion" :key="gameVersion">
      <NH2>{{ gameVersion }}</NH2>
      <TournamentList :tournaments="list" @item-click="handleItemClick" />
    </template>
  </div>
</template>
