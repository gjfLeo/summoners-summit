<script lang="ts" setup>
defineEmits<{
  (e: "confirm"): void;
}>();
</script>

<template>
  <NPopconfirm
    :positive-button-props="{ size: 'tiny', type: 'error' }"
    :negative-button-props="{ size: 'tiny' }"
    @positive-click="$emit('confirm')"
  >
    <template #trigger>
      <NElement>
        <NButton
          text
          style="
            --n-text-color-hover: var(--error-color-hover);
            --n-text-color-pressed: var(--error-color-pressed);
            --n-text-color-focus: var(--error-color-focus);
          "
        >
          <div class="i-carbon:trash-can" />
        </NButton>
      </NElement>
    </template>
    <template #default>
      <slot />
    </template>
  </NPopconfirm>
</template>
