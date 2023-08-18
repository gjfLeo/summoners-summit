<template>
  <NAutoComplete
    ref="autoCompleteRef"
    v-model:value="inputValue"
    :options="options"
    :render-label="renderLabel"
  />
</template>

<script lang="ts" setup>
import { NAutoComplete, NText } from "naive-ui";
import PinyinMatch from "pinyin-match";
import { CardImage } from "#components";
import type { ActionCard } from "~/utils/types";
import { ALL_ACTION_CARDS } from "~/utils/types";

const props = defineProps<{
  actions?: Partial<Record<ActionCard, number>>;
}>();

const inputValue = ref("");
const autoCompleteRef = ref<InstanceType<typeof NAutoComplete>>();

const options = computed(() => {
  return ALL_ACTION_CARDS
    .flatMap((card) => {
      if (props.actions?.[card]) return [];
      const match = PinyinMatch.match(card, inputValue.value);
      if (typeof match === "boolean") return [];
      return {
        label: card,
        value: card,
        match,
      };
    })
    .sort((option1, option2) => {
      if (option1.match[0] === 0) return -1;
      if (option2.match[0] === 0) return 1;
      return 0;
    });
});

function renderLabel(option: typeof options["value"][number]) {
  const [start, end] = option.match;
  return [
    h(CardImage, { card: option.value, class: "h-8 mr-2" }),
    option.label.substring(0, start),
    h(NText, { type: "primary" }, () => option.label.substring(start, end + 1)),
    option.label.substring(end + 1),
  ];
}

defineExpose({
  focus() {
    return autoCompleteRef.value?.focus();
  },
  clear() {
    inputValue.value = "";
  },
});
</script>
