export default function useColorMode() {
  const isDark = useDark();
  const { colorModePreference } = useNaiveColorMode();

  function changeColorMode() {
    isDark.value = !isDark.value;
    colorModePreference.set(isDark.value ? "dark" : "light");
  }

  return { isDark, changeColorMode };
}
