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

<script lang="ts" setup>
const props = defineProps<{
  icon: string;
  danger?: boolean;
  canActive?: boolean;
  active?: boolean;
}>();

const themeVars = useThemeVars();

const style = computed(() => {
  const style = { };
  if (props.danger) {
    Object.assign(style, {
      "--n-text-color-hover": themeVars.value.errorColorHover,
      "--n-text-color-pressed": themeVars.value.errorColorPressed,
    });
  }
  if (props.canActive) {
    Object.assign(style, {
      "--n-padding": "1px",
    });
  }
  if (props.active) {
    Object.assign(style, {
      "--n-color": `color-mix(in oklch, transparent, ${themeVars.value.primaryColor} 16%)`,
      "--n-color-hover": `color-mix(in oklch, transparent, ${themeVars.value.primaryColor} 8%)`,
      "--n-border-radius": "6px",
    });
  }
  return style;
});
</script>
