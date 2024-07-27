const useTournamentListStore = defineStore("tournaments", () => {
  const { data: tournamentListData } = useAsyncData(
    "tournamentList",
    () => $fetch("/api/v3/tournaments/list"),
  );

  const tournaments = computed(() => tournamentListData.value?.tournaments ?? []);

  return {
    tournaments,
  };
});

export function useTournamentListData() {
  const store = useTournamentListStore();
  const refs = storeToRefs(store);
  return {
    ...store,
    ...refs,
  };
}
