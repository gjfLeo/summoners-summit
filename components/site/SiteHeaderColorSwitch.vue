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

<template>
  <CommonIconButton icon="dark:i-carbon:sun i-carbon:moon" @click="toggleColorMode" />
</template>
