<template>
  <NDataTable
    :columns="columns"
    :data="data"
    size="small"
    max-height="50vh"
  />
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import { type DataTableColumn, NText, NTooltip } from "naive-ui";
import { NDataTable } from "naive-ui";
import { NuxtLink, TeamAvatars } from "#components";

const props = defineProps<{
  teamId: string;
  vs: Awaited<ReturnType<typeof useApiTeamStats>>["vs"];
}>();

const { gameVersionPath } = useGameVersion();

type TeamStatsRaw = typeof props["vs"][string];
interface TeamStatsResult extends TeamStatsRaw {
  key: string;
  teamId: string;
  winRate: number;
  winDiff: number;
}

const data = Object.entries(props.vs)
  .map<TeamStatsResult>(([teamId, stats]) => {
    return {
      key: teamId,
      teamId,
      ...stats,
      winRate: divide(stats.win, stats.total),
      winDiff: stats.win - (stats.total - stats.win),
    };
  });

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

const columns: DataTableColumn<TeamStatsResult>[] = [
  {
    key: "teamId",
    width: "7rem",
    fixed: "left",
    align: "center",
    render: (row, rowIndex) => h(
      NuxtLink,
      {
        to: `/team/${row.teamId}/${gameVersionPath.value}`,
        prefetch: rowIndex < 3,
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
    filterOptions: [2, 3, 5].map(v => ({ label: `至少${v}场`, value: v })),
    defaultFilterOptionValue: 2,
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
  // {
  //   title: "先手胜率",
  //   key: "starterWinRate",
  //   width: "6rem",
  //   align: "center",
  //   sorter: "default",
  //   render: row => winRateRender(row.starterWin, row.starterTotal, row.starterWinRate),
  // },
  // {
  //   title: "后手胜率",
  //   key: "followerWinRate",
  //   width: "6rem",
  //   align: "center",
  //   sorter: "default",
  //   render: row => winRateRender(row.followerWin, row.followerTotal, row.followerWinRate),
  // },
  {
    key: "links",
    width: "3rem",
    align: "center",
    render: row => h(
      NTooltip,
      { trigger: "hover", placement: "right" },
      {
        trigger: () => h(
          NuxtLink,
          {
            to: `/team/${props.teamId}/vs/${row.teamId}`,
            prefetch: false,
            class: "flex justify-center",
          },
          () => h(
            NText,
            { depth: 3 },
            () => h("div", { class: "i-carbon:view" }),
          ),
        ),
        default: () => h("span", "查看对局记录"),
      },
    ),
  },
];
</script>
