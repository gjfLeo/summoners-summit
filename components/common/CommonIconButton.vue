<script lang="ts" setup>
const props = defineProps<{
  icon: string;
  danger?: boolean;
}>();

const themeVars = useThemeVars();

const style = computed(() => {
  if (props.danger) {
    return {
      "--n-text-color-hover": themeVars.value.errorColorHover,
      "--n-text-color-pressed": themeVars.value.errorColorPressed,
    };
  }
  return {};
});
</script>

<template>
  <NButton
    text
    :style="style"
    :focusable="false"
  >
    <template #icon>
      <div :class="icon" />
    </template>
    <template #default>
      <slot />
    </template>
  </NButton>
</template>
