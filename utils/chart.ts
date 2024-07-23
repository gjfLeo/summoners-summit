import { registerTheme } from "echarts/core";
import { ROOT_FONT_SIZE_PX } from "~/config/layout";

export function remToPx(rem: number) {
  return rem * ROOT_FONT_SIZE_PX;
}

function registerLightTheme() {
  const colorPalette = [
    "#d87c7c",
    "#919e8b",
    "#d7ab82",
    "#6e7074",
    "#61a0a8",
    "#efa18d",
    "#787464",
    "#cc7e63",
    "#724e58",
    "#4b565b",
  ];
  registerTheme("nLight", {
    color: colorPalette,
    backgroundColor: "transparent",
    graph: {
      color: colorPalette,
    },
  });
}

function registerDarkTheme() {
  const contrastColor = "#B9B8CE";
  // const backgroundColor = "#100C2A";
  const backgroundColor = "transparent";
  const axisCommon = function () {
    return {
      axisLine: {
        lineStyle: {
          color: contrastColor,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#484753",
        },
      },
      splitArea: {
        areaStyle: {
          color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"],
        },
      },
      minorSplitLine: {
        lineStyle: {
          color: "#20203B",
        },
      },
    };
  };

  const colorPalette = [
    "#4992ff",
    "#7cffb2",
    "#fddd60",
    "#ff6e76",
    "#58d9f9",
    "#05c091",
    "#ff8a45",
    "#8d48e3",
    "#dd79ff",
  ];
  const theme = {
    darkMode: true,

    color: colorPalette,
    backgroundColor,
    axisPointer: {
      lineStyle: {
        color: "#817f91",
      },
      crossStyle: {
        color: "#817f91",
      },
      label: {
      // TODO Contrast of label backgorundColor
        color: "#fff",
      },
    },
    legend: {
      textStyle: {
        color: contrastColor,
      },
    },
    textStyle: {
      color: contrastColor,
    },
    title: {
      textStyle: {
        color: "#EEF1FA",
      },
      subtextStyle: {
        color: "#B9B8CE",
      },
    },
    toolbox: {
      iconStyle: {
        borderColor: contrastColor,
      },
    },
    dataZoom: {
      borderColor: "#71708A",
      textStyle: {
        color: contrastColor,
      },
      brushStyle: {
        color: "rgba(135,163,206,0.3)",
      },
      handleStyle: {
        color: "#353450",
        borderColor: "#C5CBE3",
      },
      moveHandleStyle: {
        color: "#B0B6C3",
        opacity: 0.3,
      },
      fillerColor: "rgba(135,163,206,0.2)",
      emphasis: {
        handleStyle: {
          borderColor: "#91B7F2",
          color: "#4D587D",
        },
        moveHandleStyle: {
          color: "#636D9A",
          opacity: 0.7,
        },
      },
      dataBackground: {
        lineStyle: {
          color: "#71708A",
          width: 1,
        },
        areaStyle: {
          color: "#71708A",
        },
      },
      selectedDataBackground: {
        lineStyle: {
          color: "#87A3CE",
        },
        areaStyle: {
          color: "#87A3CE",
        },
      },
    },
    visualMap: {
      textStyle: {
        color: contrastColor,
      },
    },
    timeline: {
      lineStyle: {
        color: contrastColor,
      },
      label: {
        color: contrastColor,
      },
      controlStyle: {
        color: contrastColor,
        borderColor: contrastColor,
      },
    },
    calendar: {
      itemStyle: {
        color: backgroundColor,
      },
      dayLabel: {
        color: contrastColor,
      },
      monthLabel: {
        color: contrastColor,
      },
      yearLabel: {
        color: contrastColor,
      },
    },
    timeAxis: axisCommon(),
    logAxis: axisCommon(),
    valueAxis: axisCommon(),
    categoryAxis: axisCommon(),

    line: {
      symbol: "circle",
    },
    graph: {
      color: colorPalette,
    },
    gauge: {
      title: {
        color: contrastColor,
      },
    },
    candlestick: {
      itemStyle: {
        color: "#FD1050",
        color0: "#0CF49B",
        borderColor: "#FD1050",
        borderColor0: "#0CF49B",
      },
    },
  };

  theme.categoryAxis.splitLine.show = false;
  registerTheme("nDark", theme);
}

export function initECharts() {
  registerLightTheme();
  registerDarkTheme();

  const { colorMode } = useNaiveColorMode();
  const eChartsTheme = computed(() =>
    colorMode.value === "dark"
      ? "nDark"
      : "nLight",
  );
  provide(THEME_KEY, eChartsTheme);
}
