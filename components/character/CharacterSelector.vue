<template>
  <NSelect
    v-model:value="characters"
    filterable
    clearable
    multiple
    :placeholder="displayedPlaceholder"
    max-tag-count="responsive"
    :options="options"
    :virtual-scroll="false"
    :render-option="renderOption"
    :render-label="renderLabel"
    :render-tag="renderTag"
    :show-checkmark="false"
    class="w-68"
    @update:show="displayedPlaceholder = $event ? '支持拼音和首字母' : placeholder"
  />
</template>

<script lang="ts" setup>
import type { SelectOption, SelectRenderLabel, SelectRenderOption, SelectRenderTag } from "naive-ui";

import { CardAvatar, NSelect, NTag, NText, NTooltip } from "#components";
import { ALL_CHARACTER_CARDS, type CharacterCard } from "~/utils/cards";

const props = withDefaults(defineProps<{
  modelValue: CharacterCard[];
  placeholder?: string;
}>(), {
  placeholder: "角色",
});
const emit = defineEmits(["update:modelValue"]);

const displayedPlaceholder = ref(props.placeholder);

const characters = useVModel(props, "modelValue", emit);

const options: SelectOption[] = ALL_CHARACTER_CARDS.map((character, index) => ({
  index,
  label: character,
  value: character,
}));

const renderOption: SelectRenderOption = ({ node, option, selected }) => {
  return h(
    "div",
    { class: "inline-grid grid-rows-1 grid-cols-1 items-center justify-items-center" },
    [
      h(
        NTooltip,
        { trigger: "hover" },
        {
          trigger: () => h(
            "div",
            {
              style: { "grid-area": "1 / 1 / 2 / 2" },
            },
            node,
          ),
          default: () => h("span", option.label as string),
        },
      ),
      selected
        ? h(
          NText,
          {
            type: "success",
            class: ["justify-self-end", "self-end"],
            style: { "grid-area": "1 / 1 / 2 / 2" },
          },
          () => h("div", { class: "i-carbon:checkmark" }),
        )
        : undefined,
    ],
  );
};

const renderLabel: SelectRenderLabel = (option) => {
  return h(
    CardAvatar,
    {
      card: option.value as CharacterCard,
      class: "w-6",
    },
  );
};
const renderTag: SelectRenderTag = ({ option, handleClose }) => {
  return h(
    NTag,
    {
      round: true,
      closable: true,
      style: "padding-inline: 0.25rem",
      onMousedown: (e: FocusEvent) => {
        e.preventDefault();
      },
      onClose: (e: MouseEvent) => {
        e.stopPropagation();
        handleClose();
      },
    },
    {
      default: () => h(
        "div",
        { class: "w-6 h-6" },
        h(
          CardAvatar,
          { card: option.value as CharacterCard },
        ),
      ),
    },
  );
};
</script>
