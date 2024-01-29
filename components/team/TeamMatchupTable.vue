<template>
  <NDataTable
    :columns="columns"
    :data="matchups"
    :single-line="false"
    style="--n-td-padding: 2px; --n-th-padding: 8px"
  />
</template>

<script lang="ts" setup>
import { type DataTableColumn, type DataTableColumns, NButton, NFormItem, NPopover, NSlider } from "naive-ui";
import { divide } from "mathjs/number";
import { NuxtLinkLocale, TeamAvatars } from "#components";
import type { ApiTeamMatchupsData } from "~/utils/types";

const props = defineProps<{
  teams: ApiTeamMatchupsData["teams"];
  matchups: ApiTeamMatchupsData["matchups"];
}>();

type RowType = typeof props.matchups[number];

const { t } = useI18n();

const numGamesThreshold = ref(5);
const themeVar = useThemeVars();

const columns = computed<DataTableColumns<RowType>>(() => [
  {
    key: "teamId",
    width: "6rem",
    fixed: "left",
    align: "center",
    render: (row, rowIndex) => h(
      NuxtLinkLocale,
      {
        to: `/team/${row.teamId}`,
        prefetch: rowIndex < 5,
      },
      () => h(TeamAvatars, { team: row.teamId }),
    ),
  },
  ...props.teams
    .map<DataTableColumn<RowType>>(teamId => ({
      key: teamId,
      title: () => h(TeamAvatars, { team: teamId }),
      align: "center",
      width: "6rem",
      cellProps: (row) => {
        const winRate = row[teamId] ? divide(row[teamId].win, row[teamId].total) : undefined;
        if (row.teamId === teamId) {
          return { style: { backgroundColor: "var(--n-merged-th-color)" } };
        }
        if (row[teamId].total < numGamesThreshold.value) {
          return { style: { color: themeVar.value.textColor3 },
          };
        }

        if (winRate !== undefined) {
          if (winRate <= 0.5) {
            return { style: { backgroundColor: `rgba(255, ${255 * 2 * winRate}, 0, 0.25)` } };
          }
          else {
            return { style: { backgroundColor: `rgba(${255 * 2 * (1 - winRate)}, 255, 0, 0.25)` } };
          }
        }

        return {};
      },
      render: (row) => {
        if (row.teamId === teamId) return "";
        const winRate = row[teamId] ? divide(row[teamId].win, row[teamId].total) : undefined;
        return h("div", {}, winRate !== undefined ? toPercentageString(winRate) : "N/A");
      },
    })),
  {
    key: "overallWinRate",
    align: "center",
    width: "6rem",
    title: () => h(
      NPopover,
      {
        trigger: "click",
        width: 200,
      },
      {
        trigger: () => h(NButton, {
          circle: true,
          text: true,
        }, {
          icon: () => h(
            "div",
            { class: "i-carbon:settings" },
          ),
        }),
        default: () => h(
          NFormItem,
          {
            label: t("teams.matchupTable.minGamesNum"),
            labelPlacement: "left",
            showFeedback: false,
          },
          () => h(NSlider, {
            value: numGamesThreshold.value,
            onUpdateValue: (value: number) => numGamesThreshold.value = value,
            min: 1,
            max: 10,
            step: 1,
          }),
        ),
      },
    ),
    render: row => toPercentageString(divide(row.overall.win, row.overall.total)),
  },
]);
</script>
