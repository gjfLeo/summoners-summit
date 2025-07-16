<template>
  <CommonIconButton icon="dark:i-mingcute:sun-line i-mingcute:moon-line" @click="toggleColorMode" />
</template>

<script lang="ts" setup>
const { colorModePreference, colorMode } = useNaiveColorMode();

const preference = computed({
  get: () => colorMode.value,
  set: value => colorModePreference.set(value),
});

function toggleColorMode() {
  preference.value = preference.value === "dark" ? "light" : "dark";
}
</script>
