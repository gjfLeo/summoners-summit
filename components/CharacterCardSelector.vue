<template>
  <NAutoComplete
    ref="autoCompleteRef"
    v-model:value="inputValue"
    :options="options"
    :render-label="renderLabel"
    placeholder="角色"
    @select="handleSelect"
  />
</template>

<script lang="ts" setup>
import { NAutoComplete, NText } from "naive-ui";
import PinyinMatch from "pinyin-match";
import { CardImage } from "#components";
import type { CharacterCard } from "~/utils/types";
import { ALL_CHARACTER_CARDS } from "~/utils/types";

const props = defineProps<{
  modelValue?: CharacterCard;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", v: CharacterCard): void;
}>();

const inputValue = ref("");
const autoCompleteRef = ref<InstanceType<typeof NAutoComplete>>();

const options = computed(() => {
  return ALL_CHARACTER_CARDS
    .flatMap((card) => {
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

function handleSelect(value: string | number) {
  emit("update:modelValue", value as CharacterCard);
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
