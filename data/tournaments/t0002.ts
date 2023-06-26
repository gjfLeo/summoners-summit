import { defineTournament } from "../shared/utils/tournaments";

export default defineTournament({
  id: "0002",
  name: "「燃斗无双」米游社",
  gameVersion: "3.7",
  stages: [
    {
      name: "8进4淘汰赛",
      parts: [
        {
          name: "DAY1",
          date: "2023-06-29",
          matches: [
            // {
            //   playerA: "全都是错误",
            //   playerB: "蒙德高达诺艾尔",
            // },
            // {
            //   playerA: "桔梗",
            //   playerB: "Dr.666",
            // },
          ],
        },
        {
          name: "DAY2",
          date: "2023-06-30",
          matches: [
            // {
            //   playerA: "唐傀",
            //   playerB: "昨夜风",
            // },
            // {
            //   playerA: "河道迅捷蟹",
            //   playerB: "岩van♂deep君",
            // }
          ],
        },
      ],
    },
    {
      name: "半决赛",
      parts: [
        {
          name: "",
          date: "2023-07-01",
          matches: [],
        },
      ],
    },
    {
      name: "决赛",
      parts: [
        {
          name: "",
          date: "2023-07-02",
          matches: [],
        },
      ],
    },
  ],
});
