<script lang="ts" setup>
const props = defineProps<{
  primary?: boolean;
  warning?: boolean;
  error?: boolean;
  text?: string;
}>();

const type = computed(() => {
  if (props.primary) return "primary";
  if (props.warning) return "warning";
  if (props.error) return "error";
  return undefined;
});

const depth = computed(() => {
  return type.value ? 1 : 3;
});
const style = computed(() => {
  return {
    // "text-shadow": props.strong ? "0 0 2px var(--n-text-color)" : undefined,
    // "font-weight": props.strong ? "bold" : undefined,
  };
});
</script>

<template>
  <NText
    :type="type" :depth="depth"
    :style="style"
    :focusable="false"
    class="cursor-pointer"
  >
    <slot>{{ text }}</slot>
  </NText>
</template>
