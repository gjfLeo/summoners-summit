<script lang="ts" setup>
const props = defineProps<{
  warnWhenUndefined?: boolean;
}>();

const value = defineModel<boolean>("value");

const type = computed(() => {
  if (props.warnWhenUndefined && value.value === undefined) {
    return "error";
  }
  if (value.value) {
    return "primary";
  }
  return undefined;
});
</script>

<template>
  <NText
    :type="type"
    :depth="value ? 1 : 3"
    :class="{ 'font-bold': value }"
    class="cursor-pointer select-none"
    @click="value = !value"
  >
    <slot />
  </NText>
</template>
