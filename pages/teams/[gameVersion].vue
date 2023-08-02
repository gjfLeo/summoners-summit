<template>
  <!-- <div class="flex flex-wrap gap-2">
      <CharacterSelector v-model="characters" />
    </div> -->
  <NDataTable
    size="small"
    :columns="columns"
    :data="data"
    max-height="calc(100vh - 13rem)"
  />
</template>

<script lang="ts" setup>
import type { DataTableColumn } from "naive-ui";
import { NDataTable, NTooltip } from "naive-ui";
import { TeamAvatars } from "#components";

useHead({ title: "阵容 | 召唤之巅" });

const { gameVersion } = useGameVersion({ detect: true });
// const characters = ref<CharacterCard[]>([]);
const { gameList } = await useGameList({ gameVersion: gameVersion.value, mirror: true });
const { teamStatistics } = useTeamStatistics(gameList);
const data = computed(() => Object.values(teamStatistics).map(statistics => ({ key: statistics.teamId, ...statistics })));

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
    });
}

const columns: DataTableColumn<typeof data["value"][number]>[] = [
  {
    key: "teamId",
    width: "7rem",
    fixed: "left",
    align: "center",
    render: row => h(TeamAvatars, { team: row.teamId }),
    // render: row => h(NuxtLink, { to: `/team/${row.teamId}`, prefetch: false }, () => h(TeamAvatars, { team: row.teamId })),
  },
  {
    title: "场数",
    key: "total",
    width: "6rem",
    align: "center",
    sorter: "default",
    filterMultiple: false,
    filterOptions: [2, 3, 5, 10].map(v => ({ label: `至少${v}场`, value: v })),
    defaultFilterOptionValue: 5,
    filter: (value, row) => row.total >= Number(value),
  },
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
