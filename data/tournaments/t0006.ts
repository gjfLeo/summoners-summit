import { defineTournament } from "../shared/utils/tournaments";

export default defineTournament({
  id: "0006",
  name: "寒天之钉杯",
  gameVersion: "3.7",
  stages: [
    {
      name: "16进8淘汰赛",
      parts: [
        {
          name: "DAY1",
          date: "2023-06-24",
          matches: [],
        },
        {
          name: "DAY2",
          date: "2023-06-25",
          matches: [],
        },
      ],
    },
    {
      name: "8进4淘汰赛",
      parts: [
        {
          name: "DAY1",
          date: "2023-06-27",
          matches: [],
        },
        {
          name: "DAY1",
          date: "2023-06-28",
          matches: [],
        },
      ],
    },
    {
      name: "半决赛",
      parts: [
        {
          name: "",
          date: "2023-06-30",
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
