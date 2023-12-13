export default function useAdminMode() {
  const admin = useLocalStorage<string>("admin", null);
  const isAdminMode = computed<boolean>({
    get: () => admin.value === "1",
    set: v => admin.value = v ? "1" : null,
  });

  const activeCounter = ref(0);
  const resetActiveCounter = useDebounceFn(() => activeCounter.value = 0, 500);
  function activeAdminMode() {
    activeCounter.value++;
    if (activeCounter.value >= 10) {
      isAdminMode.value = !isAdminMode.value;
      location.reload();
    }
    resetActiveCounter();
  }

  return { isAdminMode, activeAdminMode };
}
