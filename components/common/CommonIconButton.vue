<template>
  <NButton
    text
    :style="style"
    :focusable="false"
  >
    <template #icon>
      <div :class="icon ?? 'i-mingcute:question-line'" :style="iconStyle" />
    </template>
    <template #default>
      <slot />
    </template>
  </NButton>
</template>

<script lang="ts" setup>
const props = defineProps<{
  icon?: string;
  iconDataUrl?: string;
  danger?: boolean;
  scale?: number;
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
  return style;
});

const iconStyle = computed(() => {
  const style = { };
  if (props.iconDataUrl) {
    Object.assign(style, {
      "--un-icon": `url(${props.iconDataUrl})`,
    });
  }
  if (props.scale) {
    Object.assign(style, {
      width: `${props.scale}em`,
      height: `${props.scale}em`,
    });
  }
  return style;
});
</script>
