import type { Tournament } from "~/utils/types";

export default [
  (await import("./其他-主播邀请赛")).default,

  (await import("./积分赛-米游社")).default,
  (await import("./积分赛-TT语音")).default,
  (await import("./积分赛-NGA")).default,
  (await import("./积分赛-共鸣杯")).default,
  (await import("./积分赛-寒天之钉杯")).default,

  (await import("./主播赛-哔哩哔哩")).default,
  (await import("./其他-花神杯")).default,
  (await import("./其他-火星杯")).default,

  (await import("./主播赛-哔哩哔哩")).default,
  (await import("./主播赛-哔哩哔哩")).default,
] as Tournament[];
