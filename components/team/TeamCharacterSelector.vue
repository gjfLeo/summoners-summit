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
import type { CardId } from "~/types";

const props = defineProps<{
  modelValue: CardId[];
  placeholder?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const { t, locale } = useLocales();
const { characterCardIds, characterCardById } = useSharedData();

const focusPlaceholder = ref(t("main.teams.characterSelectorFocusPlaceholder"));
const unfocusPlaceholder = ref(props.placeholder ?? t("main.teams.characterSelectorDefaultPlaceholder"));
const displayedPlaceholder = ref(unfocusPlaceholder.value);

const characters = useVModel(props, "modelValue", emit);

const options = computed(() => {
  return characterCardIds.value
    .map(cardId => ({
      label: characterCardById.value[cardId].name[locale.value],
      value: cardId,
    } satisfies SelectOption));
});

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
          () => h("div", { class: "i-mingcute:check-line" }),
        )
        : undefined,
    ],
  );
};

const renderLabel: SelectRenderLabel = (option) => {
  return h(
    CardAvatar,
    {
      card: option.value as CardId,
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
          { card: option.value as CardId },
        ),
      ),
    },
  );
};
function filter(pattern: string, option: SelectOption) {
  const cardId = option.value as CardId;
  const cardName = characterCardById.value[cardId].name[locale.value] ?? "";
  return Boolean(PinyinMatch.match(cardName, pattern));
}
</script>
