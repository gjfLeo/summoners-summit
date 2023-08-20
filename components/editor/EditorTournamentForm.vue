<template>
  <div grid="~ cols-24 gap-4">
    <NFormItem label="赛事信息" :show-feedback="false" grid="col-1/17">
      <NSelect
        v-model:value="tournamentId"
        :options="tournamentOptions"
        filterable :filter="tournamentFilter"
        tag
        placeholder="赛事名称"
        @create="handleTournamentCreate"
        @update:value="handleTournamentSelect"
      />
    </NFormItem>
    <NFormItem label="" :show-feedback="false" grid="col-17/21">
      <NSelect
        v-model:value="tournamentType"
        :options="typeOptions"
        filterable
        placeholder="类别"
      />
    </NFormItem>
    <NFormItem label="" :show-feedback="false" grid="col-21/25">
      <NSelect
        v-model:value="gameVersion"
        :options="gameVersionOptions"
        filterable
        placeholder="游戏版本"
      />
    </NFormItem>

    <NFormItem label="阶段" :show-feedback="false" grid="col-1/13">
      <NInput v-model:value="stageName" placeholder="如16进8、半决赛等" />
    </NFormItem>
    <NFormItem label="规则" :show-feedback="false" grid="col-13/25">
      <NSelect v-model:value="stageRules" :options="ruleOptions" multiple tag :render-tag="ruleRenderTag" />
    </NFormItem>

    <NFormItem label="比赛日名称" :show-feedback="false" grid="col-1/13">
      <NInput v-model:value="partName" placeholder="如DAY3、A组第一轮等" />
    </NFormItem>
    <NFormItem label="日期" :show-feedback="false" grid="col-13/25">
      <NDatePicker v-model:formatted-value="partDate" type="date" value-format="yyyy-MM-dd" placeholder="日期" class="w-full" />
    </NFormItem>

    <NFormItem label="备注" :show-feedback="false" grid="col-1/25">
      <NInput type="textarea" :rows="3" placeholder="任何需要补充的内容" />
    </NFormItem>
  </div>

  <NHr />

  <EditorMatchesForm ref="matchesForm" />

  <NHr />

  <NButton @click="submit">预览</NButton>
</template>

<script lang="ts" setup>
import type { SelectGroupOption, SelectOption, SelectRenderTag } from "naive-ui";
import { NButton, NDatePicker, NFormItem, NHr, NInput, NSelect, NTag } from "naive-ui";
import Pinyin from "pinyin-match";
import type { TournamentRawData } from "~/utils/types";
import { EditorMatchesForm } from "#components";

const tournamentId = ref<string>();
const tournamentName = ref<string>("");
const gameVersion = ref<string>("");
const tournamentType = ref<TournamentRawData["type"]>();
const stageName = ref<string>("");
const stageRules = ref<string[]>([]);
const partName = ref<string>("");
const partDate = ref<string>();
const matchesForm = ref<InstanceType<typeof EditorMatchesForm>>();
const output = computed(() => {
  const lines = [
    "export default defineTournament({",
    `  name: "${tournamentName.value}",`,
    ...(tournamentType.value ? [`  type: "${tournamentType.value}",`] : []),
    `  gameVersion: "${gameVersion.value}",`,
    "  stages: [",
    `    name: "${stageName.value}"`,
    ...(stageRules.value.length > 0
      ? [
          "    rules: [",
          ...stageRules.value.map(rule =>
            rule.includes(" - ")
              ? (`      [${rule.split(" - ").map(s => `"${s}"`).join(", ")}],`)
              : (`      "${rule}",`),
          ),
          "    ],",
        ]
      : []),
    "    parts: [",
    "      {",
    `        name: "${partName.value}",`,
    `        date: "${partDate.value ?? ""}",`,
    "        matches: [",
    ...(matchesForm.value?.output ?? []).map(line => `          ${line}`),
    "        ],",
    "      }",
    "    ],",
    "  ],",
    "});",
  ];
  return lines.join("\n");
});

defineExpose({
  output,
});

const { tournamentList } = await useApiTournamentList();

const tournamentOptions = Object.entries(groupBy(tournamentList, t => t.gameVersion))
  .map<SelectGroupOption>(([gameVersion, tournaments]) => ({
    type: "group",
    key: gameVersion,
    label: gameVersion,
    children: tournaments
      .map(t => ({
        ...t,
        label: t.name,
        value: t.id,
      })),
  }));

const gameVersionOptions = tournamentList
  .reduce(
    (list, t) => {
      if (!list.includes(t.gameVersion)) {
        list.push(t.gameVersion);
      }
      return list;
    },
    [] as string[],
  )
  .sort((v1, v2) => v2.localeCompare(v1))
  .map(v => ({
    label: v,
    value: v,
  }));

const typeOptions = ["全民积分赛", "主播资格赛", "积分赛试办赛"].map(label => ({ label, value: label }));

function tournamentFilter(pattern: string | number, option: SelectOption) {
  const match = Pinyin.match((option as typeof tournamentList[number]).name, pattern as string);
  return Array.isArray(match) || option.value === "NEW";
}
function handleTournamentCreate(label: string) {
  tournamentName.value = label;
  return { label, value: "NEW" };
}
function handleTournamentSelect() {
  const selectedTournament = tournamentList.find(t => t.id === tournamentId.value);
  tournamentName.value = selectedTournament?.name ?? "";
  tournamentType.value = selectedTournament?.type;
  gameVersion.value = selectedTournament?.gameVersion ?? gameVersionOptions[0].value;
}

const ruleOptions = [
  "BO3",
  "BO5",
  "决斗",
  "征服",
  "禁用角色 - 对阵双方各禁用一张角色牌",
  "禁用阵容 - 对阵双方各准备3套阵容，禁用对手一套阵容",
  "禁用阵容 - 对阵双方各准备4套阵容，禁用对手一套阵容",
  "可重复角色 - 每名选手的3套阵容至少包含7张不同角色牌",
  "可重复角色 - 每名选手的4套阵容至少包含9张不同角色牌",
].map(label => ({ label, value: label }));

const ruleRenderTag: SelectRenderTag = ({ option, handleClose }) => {
  return h(NTag, { closable: true, onClose: handleClose }, () => option.label?.toString().split(" - ")[0]);
};

function submit() {
  return navigateTo(
    `https://github.com/gjfLeo/summoners-summit/issues/new?title=数据更新&body=${encodeURIComponent(output.value)}`,
    {
      open: {
        target: "_blank",
      },
    },
  );
}
</script>
