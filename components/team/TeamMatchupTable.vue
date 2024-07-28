<template>
  <NDataTable
    :columns="columns"
    :data="matchupStats"
    :single-line="false"
    style="--n-td-padding: 2px; --n-th-padding: 8px"
  />
</template>

<script lang="ts" setup>
import { type DataTableColumn, type DataTableColumns, NButton, NFormItem, NPopover, NSlider } from "naive-ui";
import { divide } from "mathjs/number";
import { NuxtLinkLocale, TeamAvatars } from "#components";

const { gameVersion } = useGameVersion();
const { teams, matchupStats } = await useApiGetTeamMatchupStats({ gameVersion: gameVersion.value });
const { t } = useLocales();

const numGamesThreshold = ref(4);
const themeVar = useThemeVars();

const columns = computed<DataTableColumns<typeof matchupStats["value"][0]>>(() => [
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
  ...teams.value
    .map(teamId => ({
      key: teamId,
      title: () => h(TeamAvatars, { team: teamId }),
      align: "center",
      width: "6rem",
      cellProps: (row) => {
        const stats = row.opponents[teamId];
        if (!stats) return {};
        const winRate = divide(stats.numGamesWin, stats.numGames);

        if (row.teamId === teamId) {
          return { style: { backgroundColor: "var(--n-merged-th-color)" } };
        }
        if (stats.numGames < numGamesThreshold.value) {
          return { style: { color: themeVar.value.textColor3 } };
        }

        if (winRate <= 0.5) {
          return { style: { backgroundColor: `rgba(255, ${255 * 2 * winRate}, 0, 0.25)` } };
        }
        else {
          return { style: { backgroundColor: `rgba(${255 * 2 * (1 - winRate)}, 255, 0, 0.25)` } };
        }
      },
      render: (row) => {
        if (row.teamId === teamId) return "";
        const stats = row.opponents[teamId];
        const winRate = stats ? divide(stats.numGamesWin, stats.numGames) : undefined;
        return h("div", {}, winRate !== undefined ? toPercentageString(winRate) : "N/A");
      },
    } satisfies DataTableColumn<typeof matchupStats["value"][0]>)),
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
            { class: "i-mingcute:settings-1-line" },
          ),
        }),
        default: () => h(
          NFormItem,
          {
            label: t("main.teams.matchupTable.minGamesNum"),
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
    render: row => toPercentageString(divide(row.overall.numGamesWin, row.overall.numGames)),
  },
]);
</script>
