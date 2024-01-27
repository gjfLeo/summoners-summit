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
import type { DataTableColumn } from "naive-ui";
import { NText, NTooltip, NuxtLinkLocale, TeamAvatars } from "#components";
import type { ApiTeamStatsData, ApiTeamStatsVsTeamStatsValue, TeamId } from "~/utils/types";

const props = defineProps<{
  teamId: string;
  vs: ApiTeamStatsData["vsTeamStatsMap"];
}>();

const emit = defineEmits<{
  (e: "viewGameList", teamId: TeamId): void;
}>();

const { gameVersionPath } = useGameVersion();
const { t } = useI18n();

interface TeamStatsResult extends ApiTeamStatsVsTeamStatsValue {
  key: string;
  teamId: TeamId;
  winRate: number;
  winDiff: number;
  starterWinRate: number;
  followerWinRate: number;
}

const data = (Object.entries(props.vs) as [TeamId, ApiTeamStatsVsTeamStatsValue][])
  .map<TeamStatsResult>(([teamId, stats]) => {
    return {
      key: teamId,
      teamId,
      ...stats,
      winRate: divide(stats.win, stats.total),
      winDiff: stats.win - (stats.total - stats.win),
      starterWinRate: divide(stats.starterWin, stats.starterTotal),
      followerWinRate: divide(stats.followerWin, stats.followerTotal),
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
    },
  );
}

const columns: DataTableColumn<TeamStatsResult>[] = [
  {
    key: "teamId",
    width: "7rem",
    fixed: "left",
    align: "center",
    render: (row, rowIndex) => h(
      NuxtLinkLocale,
      {
        to: `/team/${row.teamId}/${gameVersionPath.value}`,
        prefetch: rowIndex < 3,
      },
      () => h(TeamAvatars, { team: row.teamId }),
    ),
  },
  {
    title: t("stats.gamesPlayed"),
    key: "total",
    width: "6rem",
    align: "center",
    sorter: "default",
    filterMultiple: false,
    filterOptions: [2, 3, 5].map(v => ({ label: t("stats.atLeast", [v]), value: v })),
    defaultFilterOptionValue: null,
    filter: (value, row) => row.total >= Number(value),
  },
  {
    title: t("stats.winRate"),
    key: "winRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => winRateRender(row.win, row.total, row.winRate),
  },
  {
    title: t("stats.gamesWin"),
    key: "win",
    width: "6rem",
    align: "center",
    defaultSortOrder: "descend",
    sorter: "default",
  },
  {
    title: t("stats.gamesNetWins"),
    key: "winDiff",
    width: "6rem",
    align: "center",
    sorter: "default",
  },
  {
    title: t("stats.starterWinRate"),
    key: "starterWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => winRateRender(row.starterWin, row.starterTotal, row.starterWinRate),
  },
  {
    title: t("stats.followerWinRate"),
    key: "followerWinRate",
    width: "6rem",
    align: "center",
    sorter: "default",
    render: row => winRateRender(row.followerWin, row.followerTotal, row.followerWinRate),
  },
  {
    key: "links",
    width: "3rem",
    align: "center",
    render: row => h(
      NTooltip,
      { trigger: "hover", placement: "right" },
      {
        trigger: () => h(
          NuxtLinkLocale,
          {
            class: "flex justify-center cursor-pointer",
            onClick: () => emit("viewGameList", row.teamId),
          },
          () => h(
            NText,
            { depth: 3 },
            () => h("div", { class: "i-carbon:view" }),
          ),
        ),
        default: () => h("span", t("actions.gameList")),
      },
    ),
  },
];
</script>
