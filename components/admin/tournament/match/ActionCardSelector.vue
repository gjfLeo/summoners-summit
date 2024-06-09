<script lang="ts" setup>
import PinyinMatch from "pinyin-match";
import { CardImage, NAutoComplete, NText } from "#components";
import type { CardId } from "~/types/data";

const props = defineProps<{
  actionCards: CardId[];
}>();

const { t, locale } = useLocales();
const { actionCardList } = useSharedData();

const inputValue = ref("");
const autoCompleteRef = ref<InstanceType<typeof NAutoComplete>>();

const options = computed(() => {
  return actionCardList.value
    .flatMap((card) => {
      if (props.actionCards.filter(c => c === card.id).length >= 2) return [];
      const cardName = card.name[locale.value] ?? "";
      const match = PinyinMatch.match(cardName, inputValue.value);
      if (typeof match === "boolean") return [];
      return {
        label: cardName,
        value: card.id,
        match,
      };
    });
});

function renderLabel(option: typeof options["value"][number]) {
  const [start, end] = option.match;
  return h("div", { class: "flex items-center" }, [
    h(CardImage, { card: option.value, class: "h-8 mr-2" }),
    option.label.substring(0, start),
    h(NText, { type: "primary" }, () => option.label.substring(start, end + 1)),
    option.label.substring(end + 1),
  ]);
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

<template>
  <NAutoComplete
    ref="autoCompleteRef"
    v-model:value="inputValue"
    :options="options"
    :render-label="renderLabel"
    :placeholder="t('terms.actionCards')"
  />
</template>
