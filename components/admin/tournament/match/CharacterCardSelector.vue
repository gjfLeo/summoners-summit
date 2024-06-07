<script lang="ts" setup>
import PinyinMatch from "pinyin-match";
import { CardImage, NAutoComplete, NPopover, NText } from "#components";
import type { CardId, Locales } from "~/types/data";

const cardId = defineModel<CardId>("modelValue");

const { characterCardIds, characterCardById } = useSharedData();
const { locale } = useLocales();

const inputValue = ref("");
const autoCompleteRef = ref<InstanceType<typeof NAutoComplete>>();
const popoverRef = ref<InstanceType<typeof NPopover>>();

const options = computed(() => {
  return characterCardIds.value
    .flatMap((cardId) => {
      const cardInfo = characterCardById.value[cardId];
      const match = PinyinMatch.match(cardInfo.name[locale.value] ?? "", inputValue.value);
      if (typeof match === "boolean") return [];
      return {
        label: cardInfo.name[locale.value] ?? "",
        value: cardId,
        match,
      };
    })
    .sort((option1, option2) => {
      if (option1.match[0] === 0 && option2.match[0] !== 0) return -1;
      if (option2.match[0] === 0 && option1.match[0] !== 0) return 1;
      return 0;
    });
});

function renderLabel(option: typeof options["value"][number]) {
  const [start, end] = option.match;
  return h("div", { class: "flex items-center" }, [
    h(CardImage, { card: option.value, class: "h-8 mr-2" }),
    h(NText, {}, () => option.label.substring(0, start)),
    h(NText, { type: "primary" }, () => option.label.substring(start, end + 1)),
    h(NText, {}, () => option.label.substring(end + 1)),
  ]);
}

function handleSelect(value: string | number) {
  cardId.value = value as CardId;
  popoverRef.value?.setShow(false);
  inputValue.value = "";
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

<template>
  <NPopover ref="popoverRef" trigger="click" placement="bottom" @update:show="handlePopoverUpdateShow">
    <template #trigger>
      <CardAvatar :card="cardId" class="cursor-pointer" />
    </template>
    <template #default>
      <NAutoComplete
        ref="autoCompleteRef"
        v-model:value="inputValue"
        :options="options"
        :render-label="renderLabel"
        placeholder="角色"
        placement="bottom"
        :get-show="() => true"
        @select="handleSelect"
      />
    </template>
  </NPopover>
</template>
