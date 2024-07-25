<template>
  <NSelect
    v-model:value="playerId"
    :options="options"

    clearable filterable
    :filter="selectFilter"
    :render-tag="renderTag"
    :render-label="renderLabel"
    :placeholder="placeholderOverride"
  />
</template>

<script lang="tsx" setup>
import Pinyin from "pinyin-match";
import type { SelectRenderLabel, SelectRenderTag } from "naive-ui";
import type { Player } from "~/types/data";
import { NText } from "#components";

const props = defineProps<{
  players: Player[];
  nickname?: string;
  placeholder?: string;
}>();

const playerId = defineModel<string | null>("value", { default: null });

const { t } = useLocales();

// 根据昵称匹配到的ID
const nicknameBoundIds = computed(() => {
  const nickname = props.nickname;
  if (!nickname) return [];
  return props.players
    .filter(p => p.uniqueName === nickname || p.aliases.includes(nickname))
    .map(p => p.id);
});

const options = computed(() => {
  return [...props.players]
    .sort((p1, p2) => {
      if (nicknameBoundIds.value.includes(p1.id)) return -1;
      if (nicknameBoundIds.value.includes(p2.id)) return 1;
      return 0;
    })
    .map<SelectOption>((player) => {
      return {
        label: player.uniqueName,
        value: player.id,
        player,
      };
    });
});

const selectFilter: SelectFilter = (pattern, option) => {
  const player = option.player as Player;
  return player.id === pattern || player.uids.includes(pattern)
    || [player.uniqueName, ...player.aliases].some(name => Pinyin.match(name, pattern));
};

const renderLabel: SelectRenderLabel = (option) => {
  const player = option.player as Player;
  if (!player) return <></>;
  return (
    <div class="flex flex-col p-block-2">
      <div class="flex items-center gap-2">
        <div>{player.uniqueName}</div>
        <NText class="text-xs" depth={3}>{player.uids.join("\u2006/\u2006")}</NText>
      </div>
      <NText class="text-xs" depth={3}>{player.aliases.join("\u2006/\u2006")}</NText>
    </div>
  );
};

const renderTag: SelectRenderTag = ({ option }) => {
  const player = option.player as Player;
  if (!player) return <></>;
  return (
    <div class="flex items-center gap-2">
      <div>{player.uniqueName}</div>
      <div class="text-xs opacity-50">{player.uids.join("\u2006/\u2006")}</div>
    </div>
  );
};

watch(() => props.nickname, () => {
  if (nicknameBoundIds.value.length === 1) {
    playerId.value = nicknameBoundIds.value[0];
  }
  else {
    playerId.value = null;
  }
});

const placeholderOverride = computed(() => {
  if (nicknameBoundIds.value.length > 1) {
    return t("admin.player.nicknameMatchedNum", [nicknameBoundIds.value.length]);
  }
  return props.placeholder;
});
</script>
