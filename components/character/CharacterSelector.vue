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
    :filter="filter"
    @update:show="displayedPlaceholder = $event ? focusPlaceholder : unfocusPlaceholder"
  />
</template>

<script lang="ts" setup>
import type { SelectOption, SelectRenderLabel, SelectRenderOption, SelectRenderTag } from "naive-ui";

import PinyinMatch from "pinyin-match";
import { CardAvatar, NSelect, NTag, NText, NTooltip } from "#components";
import { ALL_CHARACTER_CARDS, ALL_CHARACTER_CARDS_INFO, type CharacterCard } from "~/utils/cards";

const props = defineProps<{
  modelValue: CharacterCard[];
  placeholder?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const { t } = useI18n();

const focusPlaceholder = ref(t("actions.characterSelector.focusPlaceholder"));
const unfocusPlaceholder = ref(props.placeholder ?? t("actions.characterSelector.defaultPlaceholder"));
const displayedPlaceholder = ref(unfocusPlaceholder.value);

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
function filter(pattern: string, option: SelectOption) {
  const card = option.value as CharacterCard;
  return Boolean(PinyinMatch.match(card, pattern)
    || PinyinMatch.match(ALL_CHARACTER_CARDS_INFO[card].nameEn, pattern));
}
</script>
