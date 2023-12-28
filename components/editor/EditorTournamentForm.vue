<template>
  <div u-grid="~ cols-24 gap-4">
    <NFormItem label="赛事信息" :show-feedback="false" u-grid="col-1/17">
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
    <NFormItem label="" :show-feedback="false" u-grid="col-17/21">
      <NSelect
        v-model:value="tournamentType"
        :options="typeOptions"
        filterable
        placeholder="类别"
      />
    </NFormItem>
    <NFormItem label="" :show-feedback="false" u-grid="col-21/25">
      <NSelect
        v-model:value="gameVersion"
        :options="gameVersionOptions"
        tag
        filterable
        placeholder="游戏版本"
      />
    </NFormItem>

    <NFormItem label="阶段" :show-feedback="false" u-grid="col-1/5 items-start">
      <NInput v-model:value="stageName" placeholder="如16进8、半决赛等" />
    </NFormItem>
    <NFormItem :show-feedback="false" u-grid="col-5/25">
      <template #label>
        <span>规则</span>
        <!-- <NText class="ml-2 text-sm" :depth="3">有啥填啥</NText> -->
      </template>
      <div u-grid="~ gap-2 cols-4">
        <NInputGroup>
          <NInputNumber v-model:value="stageRulesNumDecks" :show-button="false" class="text-center" placeholder="" />
          <NInputGroupLabel>套阵容</NInputGroupLabel>
        </NInputGroup>
        <NInputGroup>
          <NInputGroupLabel>禁用</NInputGroupLabel>
          <NInputNumber v-model:value="stageRulesNumDecksBanned" :show-button="false" class="text-center" placeholder="" />
          <NInputGroupLabel>套</NInputGroupLabel>
        </NInputGroup>
        <NInputGroup>
          <NInputGroupLabel>禁用</NInputGroupLabel>
          <NInputNumber v-model:value="stageRulesNumCharacterBanned" :show-button="false" class="text-center" placeholder="" />
          <NInputGroupLabel>角色</NInputGroupLabel>
        </NInputGroup>
        <NInputGroup>
          <NInputGroupLabel>至少</NInputGroupLabel>
          <NInputNumber v-model:value="stageRulesNumCharacterRequired" :show-button="false" class="text-center" placeholder="" />
          <NInputGroupLabel>角色</NInputGroupLabel>
        </NInputGroup>
        <NInputGroup>
          <NInputGroupLabel>BO</NInputGroupLabel>
          <NInputNumber v-model:value="stageRulesNumGames" :show-button="false" class="text-center" placeholder="" />
        </NInputGroup>
        <NSelect v-model:value="stageRulesMode" :options="ruleModeOptions" />
        <NSelect
          v-model:value="stageExtraRules" v-model:show="stageExtraRulesShow"
          u-grid="col-3/5"
          :options="rulesExtraOptions"
          tag filterable multiple
          :render-tag="ruleRenderTag"
          :placeholder="stageExtraRulesShow ? '可手动输入“标签文字：描述文字”' : '额外规则'"
        />
      </div>
    </NFormItem>

    <NFormItem label="比赛日名称" :show-feedback="false" u-grid="col-1/13">
      <NInput v-model:value="partName" placeholder="如DAY3、A组第一轮等" />
    </NFormItem>
    <NFormItem label="日期" :show-feedback="false" u-grid="col-13/25">
      <NDatePicker v-model:formatted-value="partDate" type="date" value-format="yyyy-MM-dd" placeholder="日期" class="w-full" />
    </NFormItem>

    <NFormItem label="备注" :show-feedback="false" u-grid="col-1/25">
      <NInput v-model:value="note" type="textarea" :rows="3" placeholder="任何需要补充的内容" />
    </NFormItem>
  </div>

  <NHr />

  <EditorMatchesForm ref="matchesForm" />

  <NHr />

  <div class="text-center">
    <NButton type="primary" @click="submit">提交</NButton>
  </div>
</template>

<script lang="ts" setup>
import type { SelectGroupOption, SelectOption, SelectRenderTag } from "naive-ui";
import Pinyin from "pinyin-match";
import FileSaver from "file-saver";
import dayjs from "dayjs";
import type { TournamentRawData } from "~/utils/types";
import { EditorMatchesForm, NTag } from "#components";

const tournamentId = ref<string>();
const tournamentName = ref<string>("");
const gameVersion = ref<string>();
const tournamentType = ref<TournamentRawData["type"]>();
const stageName = ref<string>("");
const stageRulesNumDecks = ref<number>();
const stageRulesNumDecksBanned = ref<number>();
const stageRulesNumCharacterBanned = ref<number>();
const stageRulesNumCharacterRequired = ref<number>();
const stageRulesNumGames = ref<number>();
const stageRulesMode = ref<string>("Conquest");
const stageExtraRules = ref<string[]>([]);
const stageExtraRulesShow = ref<boolean>(false);

const partName = ref<string>("");
const partDate = ref<string>();

const note = ref<string>();

const matchesForm = ref<InstanceType<typeof EditorMatchesForm>>();

const output = computed(() => {
  const lines = [
    "export default defineTournament({",
    `  name: "${tournamentName.value}",`,
    ...(tournamentType.value ? [`  type: "${tournamentType.value}",`] : []),
    `  gameVersion: "${gameVersion.value ?? ""}",`,
    "  stages: [",
    "    {",
    `      name: "${stageName.value}",`,
    "      rules: {",
    ...(stageRulesNumDecks.value ? [`        numDecks: ${stageRulesNumDecks.value},`] : []),
    ...(stageRulesNumDecksBanned.value ? [`        numDecksBanned: ${stageRulesNumDecksBanned.value},`] : []),
    ...(stageRulesNumCharacterBanned.value ? [`        numCharacterBanned: ${stageRulesNumCharacterBanned.value},`] : []),
    ...(stageRulesNumCharacterRequired.value ? [`        numCharacterRequired: ${stageRulesNumCharacterRequired.value},`] : []),
    ...(stageRulesNumGames.value ? [`        numGames: ${stageRulesNumGames.value},`] : []),
    `        mode: "${stageRulesMode.value}",`,
    ...(stageExtraRules.value.length > 0
      ? [
          "        extra: [",
          ...stageExtraRules.value.map(rule => `          [${rule.split("：").map(s => `"${s}"`).join(", ")}],`),
          "        ],",
        ]
      : []),
    "      },",
    "      parts: [",
    "        {",
    `          name: "${partName.value.replace(/day/i, "DAY")}",`,
    `          date: "${partDate.value ?? ""}",`,
    "          matches: [",
    ...(matchesForm.value?.output ?? []).map(line => `            ${line}`),
    "          ],",
    "        },",
    "      ],",
    "    },",
    "  ],",
    "});",
    "",
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

const ruleModeOptions = [
  { label: "征服", value: "Conquest" },
  { label: "决斗", value: "Duel" },
];
const rulesExtraOptions = [
  "备选牌组：3套阵容合计可准备9套牌组，上场时从中选择",
  "备选牌组：每套阵容可准备3套牌组，上场时从中选择",
].map(label => ({ label, value: label }));

const issueTitle = computed(() => `提交数据：${[tournamentName.value, stageName.value, partName.value].filter(s => s).join(" ")}`);
const issueBody = computed(() =>
`<!-- __GENERATED_BY_DATA_TOOL__ -->
- 赛事：${tournamentName.value}
- 阶段：${stageName.value}
- 比赛日：${partName.value} ${partDate.value ?? ""}
- 包含${matchesForm.value?.matchCount}场比赛、${matchesForm.value?.gameCount}场对局

${note.value ?? ""}

<!-- 请将生成的文件拖拽至下方 -->
`.replace("\n\n\n\n", "\n\n"));
const ruleRenderTag: SelectRenderTag = ({ option, handleClose }) => {
  return h(NTag, { closable: true, onClose: handleClose }, () => option.label?.toString().split("：")[0]);
};

function submit() {
  const blob = new Blob([output.value], { type: "text/plain;charset=utf-8" });
  FileSaver.saveAs(blob, dayjs().format("赛事数据MMDD-HHmm.txt"));
  return navigateTo(
    `https://github.com/gjfLeo/summoners-summit/issues/new?title=${issueTitle.value}&body=${encodeURIComponent(issueBody.value)}`,
    { open: { target: "_blank" } },
  );
}
</script>
