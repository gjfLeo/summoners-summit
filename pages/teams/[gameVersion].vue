<template>
  <div u-flex="~ col gap-4">
    <div class="flex flex-wrap gap-2">
      <CharacterSelector v-model="includedCharacters" />
    </div>
    <NDataTable
      size="small"
      :columns="columns"
      :data="data"
      :scroll-x="1400"
      max-height="calc(100vh - 18rem)"
    />
    <ClientOnly>
      <TeamRelationsGraph :relations="relations" :team-stats-map="teamStatsMap" />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import type { DataTableColumn } from "naive-ui";
import { NTooltip, NuxtLinkLocale, TeamAvatars } from "#components";
import type { CharacterCard } from "~/utils/types";
import { getCharactersByTeamId } from "~/utils/cards";

useHead({ title: "阵容 | 召唤之巅" });

const { gameVersion, gameVersionPath } = useGameVersion({ detect: true });
const { teamStatsMap } = await useTeamStatsMap(gameVersion);

const { relations } = await useApiTeamRelations(gameVersion.value);

const includedCharacters = ref<CharacterCard[]>([]);
const data = computed(() =>
  Object.values(teamStatsMap)
    .filter((stats) => {
      const characters = getCharactersByTeamId(stats.teamId);
      return includedCharacters.value.every(character => characters.includes(character));
    })
    .map(statistics => ({ key: statistics.teamId, ...statistics })),
);

function winRateRender(win: number, total: number, winRate: number) {
  return h(
    NTooltip,
    {
      trigger: "hover",
      placement: "right",
    },
    {
      trigger: () => h("span", toPercentageString(winRate)),
      default: () => h("span", `${win} / ${total}`),
    },
  );
}

const columns: DataTableColumn<typeof data["value"][number]>[] = [
  {
    key: "teamId",
    width: "7rem",
    fixed: "left",
    align: "center",
    render: (row, rowIndex) => h(
      NuxtLinkLocale,
      {
        to: `/team/${row.teamId}/${gameVersionPath.value}`,
        prefetch: rowIndex < 5,
      },
      () => h(TeamAvatars, { team: row.teamId }),
    ),
  },
  {
    title: "场数",
    key: "total",
    width: "6rem",
    align: "center",
    sorter: "default",
    filterMultiple: false,
    filterOptions: [2, 3, 5, 10].map(v => ({ label: `至少${v}场`, value: v })),
    defaultFilterOptionValue: null,
    filter: (value, row) => row.total >= Number(value),
  },
  ...data.value.some(item => item.banned > 0)
    ? [{
        title: "被禁用",
        key: "banned",
        width: "6rem",
        align: "center" as const,
        sorter: "default" as const,
      }, {
        title: "场数+禁用",
        key: "bp",
        width: "6rem",
        align: "center" as const,
        sorter: "default" as const,
      }]
    : [],
  {
    title: "胜率",
    key: "winRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => winRateRender(row.win, row.total, row.winRate),
  },
  {
    title: "胜场数",
    key: "win",
    width: "6rem",
    align: "center",
    defaultSortOrder: "descend",
    sorter: "default",
  },
  {
    title: "净胜",
    key: "winDiff",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: "非内战场数",
    key: "totalExcludeSame",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: "非内战胜场",
    key: "winExcludeSame",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: "非内战胜率",
    key: "winRateExcludeSame",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => winRateRender(row.winExcludeSame, row.totalExcludeSame, row.winRateExcludeSame),
  },
  {
    title: "先手胜率",
    key: "starterWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => winRateRender(row.starterWin, row.starterTotal, row.starterWinRate),
  },
  {
    title: "后手胜率",
    key: "followerWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => winRateRender(row.followerWin, row.followerTotal, row.followerWinRate),
  },
];
</script>
