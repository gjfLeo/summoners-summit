<template>
  <NForm inline :show-label="false" :show-feedback="false">
    <NFormItem>
      <ActionCardSelector ref="cardSelectorRef" :actions="actions" @select="handleSelectCard" />
    </NFormItem>
    <NFormItem>
      <NAutoComplete ref="countSelectorRef" v-model:value="inputCount" :options="['1', '2']" :get-show="() => true" @update:value="handleInputCount" />
    </NFormItem>
    <NFormItem>
      <NText>已包含 {{ Object.values(actions).reduce((a, b) => a + b, 0) }} 张</NText>
    </NFormItem>
    <NFormItem>
      <NButton @click="copy()">复制</NButton>
    </NFormItem>
    <NFormItem>
      <NButton @click="clear">清空</NButton>
    </NFormItem>
  </NForm>
</template>

<script lang="ts" setup>
import type { NSelect } from "naive-ui";
import { NAutoComplete, NButton, NForm, NFormItem, NText } from "naive-ui";
import { type ActionCard } from "~/utils/types";
import { ActionCardSelector } from "#components";

const props = defineProps<{
  actions: Partial<Record<ActionCard, number>>;
}>();

const emit = defineEmits<{
  (e: "update:actions", v: Partial<Record<ActionCard, number>>): void;
}>();

const cardSelectorRef = ref<InstanceType<typeof ActionCardSelector>>();
const countSelectorRef = ref<InstanceType<typeof NSelect>>();
const selectedCard = ref<ActionCard>();
const inputCount = ref("");

function handleSelectCard(value: string) {
  selectedCard.value = value as ActionCard;
  countSelectorRef.value?.focus();
}

function handleInputCount(value: string) {
  if (value === "1" || value === "2") {
    if (selectedCard.value) {
      emit("update:actions", Object.assign({ [selectedCard.value]: Number(value) }, props.actions));
    }
    cardSelectorRef.value?.clear();
    cardSelectorRef.value?.focus();
  }
  inputCount.value = "";
}

const { copy } = useClipboard({
  source: computed(() => JSON.stringify(props.actions)),
});

function clear() {
  emit("update:actions", {});
}
</script>
