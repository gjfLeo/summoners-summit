import { Barbara, Beidou, Bennett, Candace, Chongyun, Eula, FatuiMirrorMaiden, FatuiPyroAgent, Fischl, Keqing, Klee, Mona, Nahida, Ningguang, Noelle, RaidenShogun, Razor, RhodeiaOfLoch, Shenhe, YaeMiko, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "好游快爆杯",
  type: "全民积分赛",
  gameVersion: "3.8",
  stages: [
    {
      name: "8进4淘汰赛",
      parts: [
        {
          name: "DAY1",
          date: "2023-08-10",
          matches: [
            {
              playerA: "柚柚恩",
              playerB: "Tobby",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0",
              games: [
                {
                  playerACharacters: [Fischl, Nahida, Klee],
                  playerBCharacters: [Keqing, Bennett, Klee],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Fischl, Nahida, Klee],
                  playerBCharacters: [Chongyun, RaidenShogun, Beidou],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Bennett, Keqing, Klee],
                  playerBCharacters: [Chongyun, RaidenShogun, Beidou],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "抽象牌手云来",
              playerB: "小宇",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0",
              games: [
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBCharacters: [Fischl, Mona, Nahida],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-08-11",
          matches: [
            {
              playerA: "自信的菠萝蜜",
              playerB: "摸鱼",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0",
              games: [
                {
                  playerACharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  playerBCharacters: [Beidou, Chongyun, Razor],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBCharacters: [Fischl, Mona, Nahida],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBCharacters: [Beidou, Chongyun, Razor],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "Tonbo",
              playerB: "詹妮斯",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0",
              games: [
                {
                  playerACharacters: [Noelle, Barbara, Ningguang],
                  playerBCharacters: [YaeMiko, RhodeiaOfLoch, FatuiMirrorMaiden],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [YaeMiko, RhodeiaOfLoch, FatuiMirrorMaiden],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [YaeMiko, RhodeiaOfLoch, Candace],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "半决赛",
      parts: [
        {
          name: "",
          date: "2023-08-12",
          matches: [
            {
              playerA: "小宇",
              playerB: "Tobby",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0",
              games: [
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [Fischl, Mona, Nahida],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "摸鱼",
              playerB: "詹妮斯",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0",
              games: [
                {
                  playerACharacters: [Eula, Fischl, Shenhe],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Eula, Fischl, Shenhe],
                  playerBCharacters: [Keqing, Bennett, Klee],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "决赛",
      parts: [
        {
          name: "",
          date: "2023-08-13",
          matches: [
            {
              playerA: "Tobby",
              playerB: "詹妮斯",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0",
              games: [
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Keqing, Bennett, Klee],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [Keqing, Bennett, Klee],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Klee, Mona, FatuiPyroAgent],
                  playerBCharacters: [Keqing, Bennett, Klee],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
