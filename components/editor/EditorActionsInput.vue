<template>
  <NForm inline :show-label="false" :show-feedback="false">
    <NFormItem>
      <EditorActionCardSelector ref="cardSelectorRef" :actions="actions" @select="handleSelectCard" />
    </NFormItem>
    <NFormItem>
      <NAutoComplete ref="countSelectorRef" v-model:value="inputCount" :options="['1', '2']" :get-show="() => true" placeholder="数量" @update:value="handleInputCount" />
    </NFormItem>
    <NFormItem>
      <NText>已包含 {{ Object.values(actions ?? {}).reduce((a, b) => a + b, 0) }} 张</NText>
    </NFormItem>
    <NFormItem>
      <NButton @click="$emit('copy')">复制</NButton>
    </NFormItem>
    <NFormItem>
      <NButton @click="$emit('paste')">粘贴</NButton>
    </NFormItem>
    <NFormItem>
      <NButton @click="clear">清空</NButton>
    </NFormItem>
  </NForm>
</template>

<script lang="ts" setup>
import type { NSelect } from "#components";
import { EditorActionCardSelector } from "#components";
import { type ActionCard, actionCardSorter } from "~/utils/cards";
import type { Deck } from "~/utils/types";

const props = defineProps<{
  actions?: Deck["actionCards"];
}>();

const emit = defineEmits<{
  (e: "update:actions", v: Deck["actionCards"]): void;
  (e: "copy"): void;
  (e: "paste"): void;
}>();

const cardSelectorRef = ref<InstanceType<typeof EditorActionCardSelector>>();
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
      const actionsUnordered = Object.assign(
        {},
        props.actions,
        { [selectedCard.value]: Math.min(2, Number(value) + (props.actions?.[selectedCard.value] ?? 0)) },
      );
      const actions = Object.fromEntries(
        (Object.entries(actionsUnordered) as [ActionCard, number][])
          .sort((a, b) => actionCardSorter(a[0], b[0])),
      );
      emit("update:actions", actions);
    }
    cardSelectorRef.value?.clear();
    cardSelectorRef.value?.focus();
  }
  inputCount.value = "";
}

function clear() {
  emit("update:actions", {});
}

function focus() {
  cardSelectorRef.value?.focus();
}

defineExpose({
  focus,
});
</script>
