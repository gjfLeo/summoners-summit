<template>
  <NPopover
    trigger="click"
    raw
    :show-arrow="false"
  >
    <template #default>
      <NButton type="error" secondary @click="$emit('click')">{{ text }}</NButton>
    </template>
    <template #trigger>
      <slot />
    </template>
  </NPopover>
</template>

<script lang="ts" setup>
defineProps<{
  text: string;
}>();

defineEmits<{
  (e: "click"): void;
}>();
</script>
