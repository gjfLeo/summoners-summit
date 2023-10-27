<template>
  <NPopover ref="popoverRef" trigger="click" placement="bottom" @update:show="handlePopoverUpdateShow">
    <template #trigger>
      <NAvatar
        :src=" modelValue ? characterAvatarImages[modelValue] : ''" round
        class="cursor-pointer select-none"
        @click="handleClick"
      />
    </template>
    <template #default>
      <NAutoComplete
        ref="autoCompleteRef"
        v-model:value="inputValue"
        :options="options"
        :render-label="renderLabel"
        placeholder="角色"
        placement="right-start"
        :get-show="() => true"
        @select="handleSelect"
      />
    </template>
  </NPopover>
</template>

<script lang="ts" setup>
import { NAutoComplete, NAvatar, NPopover, NText } from "naive-ui";
import PinyinMatch from "pinyin-match";
import { CardImage } from "#components";
import type { CharacterCard } from "~/utils/types";
import { ALL_CHARACTER_CARDS } from "~/utils/cards";
import { characterAvatarImages } from "~/utils/images";

defineProps<{
  modelValue?: CharacterCard;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", v: CharacterCard): void;
  (e: "update:show", v: boolean): void;
}>();

// const show = ref(false);
const inputValue = ref("");
const autoCompleteRef = ref<InstanceType<typeof NAutoComplete>>();
const popoverRef = ref<InstanceType<typeof NPopover>>();

const characterPicksString = useLocalStorage("characterPicks", "{}");
const characterPicks = JSON.parse(characterPicksString.value);

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
      if (option1.match[0] === 0 && option2.match[0] !== 0) return -1;
      if (option2.match[0] === 0 && option1.match[0] !== 0) return 1;
      return (characterPicks[option2.label] ?? 0) - (characterPicks[option1.label] ?? 0);
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
  popoverRef.value?.setShow(false);
  inputValue.value = "";
}

function handleClick() {
  // show.value = !show.value;
}

function handlePopoverUpdateShow(value: boolean) {
  if (value) {
    nextTick(() => {
      inputValue.value = "";
      autoCompleteRef.value?.focus();
    });
  }
}

defineExpose({
  focus() {
    popoverRef.value?.setShow(true);
    nextTick(() => {
      inputValue.value = "";
      autoCompleteRef.value?.focus();
    });
  },
  clear() {
    inputValue.value = "";
  },
});
</script>
