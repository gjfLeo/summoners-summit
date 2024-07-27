<template>
  <div>
    <NText :depth="3" class="text-sm">{{ t('main.cards.characterBarChart.summary', [numMatches, numGames]) }}</NText>
    <VChart
      class="mt h-[calc(100vh-16rem)] min-h-30rem"
      :option="option" autoresize @native:click="handleChartClick"
    />
  </div>
</template>

<script lang="ts" setup>
import { divide } from "mathjs/number";
import type { CardId } from "~/types";

type DataType = Awaited<ReturnType<typeof useApiGetCharacterCardStats>>;
const characterCardStats = inject<DataType["characterCardStats"]>("characterCardStats", computed(() => []));
const numMatches = inject<DataType["numMatches"]>("numMatches", computed(() => 0));
const numGames = inject<DataType["numGames"]>("numGames", computed(() => 0));

const { t, currentLocalized } = useLocales();
const { characterCardById, getCardAvatar } = await useAsyncSharedData();
const themeVars = useThemeVars();

const data = computed(() => {
  return characterCardStats.value
    .map(item => ({
      cardId: item.cardId,
      numGames: item.numGames,
      numGamesWin: item.numGamesWin,
      numGamesLose: item.numGames - item.numGamesWin,
      numBanned: item.numBanned,
      avatar: getCardAvatar(item.cardId),
    }))
    .sort(sorter("numGames"))
    .reverse();
});

const option = computed<ECOption>(() => {
  // t('main.cards.characterBarChart.numGamesWin') t('main.cards.characterBarChart.numGamesLose') t('main.cards.characterBarChart.numBanned')
  const localizedSeriesName = (name: string) => t(`main.cards.characterBarChart.${name}`);

  return {
    legend: {
      top: 0,
      left: "center",
      formatter: name => localizedSeriesName(name),
      data: ["numGamesWin", "numGamesLose", "numBanned"],
    },
    grid: {
      top: remToPx(3),
      left: remToPx(0),
      right: remToPx(2),
      bottom: 0,
      containLabel: true,
    },
    dataZoom: [
      {
        type: "inside",
        id: "insideY",
        yAxisIndex: 0,
        filterMode: "filter",
        start: 0,
        maxValueSpan: 7,
        minValueSpan: 7,
        zoomLock: true,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
        moveOnMouseWheel: true,
      },
      {
        type: "slider",
        id: "sliderY",
        yAxisIndex: 0,
        showDetail: false,
        handleSize: 0,
        brushSelect: false,
        right: 0,
        width: remToPx(1),
      },
    ],
    yAxis: {
      type: "category",
      inverse: true,
      data: data.value.map(card => card.cardId),
      axisLabel: {
        interval: 0,
        formatter: (value) => {
          return `{${value}| }`;
        },
        margin: remToPx(0.5),
        rich: {
          ...Object.fromEntries(
            data.value.map((item) => {
              return [item.cardId, {
                height: remToPx(2),
                width: remToPx(2),
                backgroundColor: {
                  image: item.avatar,
                },
              }];
            }),
          ),
        },
      },
    },
    xAxis: {
      type: "value",
      position: "top",
    },
    series: [
      {
        name: "numGamesWin",
        type: "bar",
        data: data.value.map(item => item.numGamesWin),
        stack: "numGames",
        label: {
          show: true,
          position: "inside",
          formatter: (params) => {
            const value = params.value as number;
            return value > 0 ? String(value) : "";
          },
        },
        emphasis: { focus: "series" },
        barWidth: remToPx(1.5),
        color: themeVars.value.primaryColor,
        animationDuration: 800,
        animationDelay: i => i * 1000 / 8,
      },
      {
        name: "numGamesLose",
        type: "bar",
        data: data.value.map(item => item.numGamesLose),
        stack: "numGames",
        label: {
          show: true,
          position: "inside",
          formatter: (params) => {
            const value = params.value as number;
            return value > 0 ? String(value) : "";
          },
        },
        emphasis: { focus: "series" },
        barWidth: remToPx(1.5),
        color: themeVars.value.placeholderColor,
        animationDelay: i => i * 1000 / 8 + 500,
        animationDuration: 500,
      },
      {
        name: "numBanned",
        type: "bar",
        data: data.value.map(item => item.numBanned),
        label: {
          show: true,
          position: "inside",
          formatter: (params) => {
            const value = params.value as number;
            return value > 0 ? String(value) : "";
          },
        },
        emphasis: { focus: "series" },
        barWidth: remToPx(0.75),
        barGap: 0.25,
        color: themeVars.value.errorColor,
        animationDelay: i => i * 1000 / 8,
      },
    ],
    tooltip: {
      triggerOn: "click",
      axisPointer: {
        type: "shadow",
      },
      trigger: "axis",
      formatter: (params) => {
        if (!Array.isArray(params)) {
          throw new TypeError("tooltip formatter params is not an array");
        }
        const cardId = params[0].name;
        const card = characterCardById.value[cardId];
        const avatarUrl = getCardAvatar(cardId);
        const numGames = Number(params[0].value) + Number(params[1].value);

        return `
          <div class="grid grid-cols-[auto_auto_1fr] items-center gap-2 select-none">
            <div class="grid-col-span-3 flex items-center gap-2">
              <img src="${avatarUrl}" class="aspect-[1/1] h-8" />
              <span>${currentLocalized(card.name)}</span>
            </div>
            ${
              params.map((param) => {
                const value = param.seriesName !== "numBanned"
                ? `${param.value} (${toPercentageString(divide(Number(param.value), numGames))})`
                : param.value;
                return `
                  <div class="w-3 h-3 rounded-full" style="background-color: ${param.color}"></div>
                  <div>${localizedSeriesName(param.seriesName!)}</div>
                  <div class="ml-4 font-bold">${value}</div>
                `;
              }).join("\n")
            }
            <div class="grid-col-span-3">
              <span class="text-sm text-primary underline-dashed cursor-pointer" data-role="go-to-team" data-card-id="${cardId}">相关阵容</span>
            </div>
          </div>
        `;
      },
      enterable: true,
      position: (point) => {
        return [point[0] + remToPx(1), point[1] + remToPx(1)];
      },

    },
  } satisfies ECOption;
});

function handleChartClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (target.dataset.role === "go-to-team") {
    const cardId = target.dataset.cardId as CardId;
    return navigateTo({
      name: "teams-gameVersion___zh",
      state: {
        includeCharacters: [cardId],
      },
    });
  }
}
</script>
