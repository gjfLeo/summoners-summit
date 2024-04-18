<script lang="ts" setup>
import { NFormItem } from "#components";
import type { Ranks } from "~/types/data";

const emit = defineEmits<{
  (e: "done", v: Ranks["ranks"]): void;
}>();

const { t } = useI18n();

const visible = ref(false);
const content = ref("");
const contentRef = ref<InstanceType<typeof NFormItem>>();

const ranks = computed(() => {
  if (!content.value) return [];
  return (JSON.parse(content.value).data.rank_infos as any[])
    .map<Ranks["ranks"][number]>((item, index) => {
      return {
        rank: index + 1,
        nickname: item.nickname,
        score: item.score,
        uid: String(item.uid),
      };
    });
});

const contentRule: FormItemRule = {
  trigger: "input",
  validator: () => {
    if (!content.value) {
      return Promise.reject(t("admin.ranks.jsonContentRequired"));
    }
    if (ranks.value.length !== 200) {
      return Promise.reject(t("admin.ranks.jsonContentParseError"));
    }
  },
};

function open() {
  visible.value = true;
}

async function confirm() {
  try {
    await contentRef.value?.validate();
  }
  catch (error) {
    return;
  }
  emit("done", ranks.value);
  visible.value = false;
}
</script>

<template>
  <NButton @click="open">{{ t("admin.ranks.importFromJson") }}</NButton>
  <NModal
    v-model:show="visible"
    preset="dialog"
    :title="t('admin.ranks.importFromJson')"
    :show-icon="false"
  >
    <NText
      :depth="2"
      class="mt"
    >
      <I18nT keypath="admin.ranks.jsonContentDescription" scope="global">
        <template #login>
          <NButton
            text class="border-b-1 border-b-dashed pb-1px"
            tag="a" target="_blank"
            href="https://webstatic.mihoyo.com/ys/event/tcgmatch/#/news"
          >
            {{ t("admin.ranks.jsonContentDescriptionLogin") }}
          </NButton>
        </template>
        <template #api>
          <NButton
            text class="border-b-1 border-b-dashed pb-1px"
            tag="a" target="_blank"
            href="https://hk4e-api.mihoyo.com/event/geniusinvokationtcg/rank?page_size=200&page_token=&game_biz=hk4e_cn&lang=zh-cn"
          >
            {{ t("admin.ranks.jsonContentDescriptionApi") }}
          </NButton>
        </template>
      </I18nT>
    </NText>
    <NFormItem
      ref="contentRef"
      :rule="contentRule"
      :show-label="false"
      class="mt-2"
    >
      <NInput
        v-model:value="content"
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 10 }"
        :placeholder="t('admin.ranks.jsonContentDescription2')"
      />
    </NFormItem>
    <template #action>
      <NButton secondary type="primary" @click="confirm">{{ t("admin.action.confirm") }}</NButton>
      <NButton secondary @click="visible = false">{{ t("admin.action.cancel") }}</NButton>
    </template>
  </NModal>
</template>
