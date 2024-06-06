<script lang="ts" setup>
import type { CardId } from "~/types/data";

const visible = ref(false);
const actionCards = ref<CardId[]>([]);
const resolveRef = ref<(actionCards: CardId[]) => void>();
const rejectRef = ref<() => void>();

async function edit(currentValue: CardId[]) {
  actionCards.value = [...currentValue];
  visible.value = true;
  return new Promise<CardId[]>((resolve, reject) => {
    actionCards.value = currentValue;
    resolveRef.value = resolve;
    rejectRef.value = reject;
  });
}

defineExpose({
  edit,
});

function confirm() {
  resolveRef.value?.(actionCards.value);
  visible.value = false;
}
</script>

<template>
  <NModal v-model:show="visible" preset="dialog">
    <template #default>
      {{ actionCards }}
    </template>
    <template #action>
      <NButton type="primary" secondary @click="confirm">确认</NButton>
    </template>
  </NModal>
</template>
