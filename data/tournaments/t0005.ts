import { Amber, AratakiItto, Barbara, Bennett, Chongyun, Collei, Cyno, FatuiPyroAgent, Fischl, Keqing, Klee, Mona, Nahida, Ningguang, Noelle, RaidenShogun, RhodeiaOfLoch, SangonomiyaKokomi, Shenhe, Tighnari, Venti, YaeMiko, Zhongli } from "../shared/character-cards";
import { defineTournament } from "../shared/utils/tournaments";

export default defineTournament({
  id: "0005",
  name: "「同声相应」共鸣杯",
  gameVersion: "3.7",
  stages: [
    {
      name: "16进8",
      parts: [
        {
          name: "DAY1",
          date: "2023-06-18",
          matches: [
            {
              playerA: "本大爷还有仙跳",
              playerB: "琉環冰",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1Us4y1y7Tj",
              games: [
                {
                  playerACharacters: [Fischl, FatuiPyroAgent, RhodeiaOfLoch],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Keqing, YaeMiko],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Fischl, Nahida, RhodeiaOfLoch],
                  playerBCharacters: [Noelle, Amber, AratakiItto],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Keqing, YaeMiko],
                  playerBCharacters: [Noelle, Amber, AratakiItto],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "人子歌于途",
              playerB: "八重妞妞",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1ij411D7j3",
              games: [
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Mona, Venti, Keqing],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Klee, Keqing, Bennett],
                  playerBCharacters: [Barbara, SangonomiyaKokomi, Noelle],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Klee, Keqing, Bennett],
                  playerBCharacters: [Bennett, FatuiPyroAgent, Cyno],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "抽象牌手云来",
              playerB: "「亦然」",
              winner: "B",
              video: "https://www.bilibili.com/video/BV19u411h7tU",
              games: [
                {
                  playerACharacters: [YaeMiko, Tighnari, Collei],
                  playerBCharacters: [Bennett, Keqing, Klee],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Noelle, Barbara, AratakiItto],
                  playerBCharacters: [Fischl, Mona, Nahida],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Mona, Fischl, Nahida],
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
          date: "2023-06-19",
          matches: [
            {
              playerA: "本吃包",
              playerB: "荧",
              winner: "A",
              video: "https://www.bilibili.com/video/BV13W4y1D7fi", // 不全
              games: [
                // 第一局没找到
                // {
                //   playerACharacters: [],
                //   playerBCharacters: [],
                //   starter: "",
                //   winner: "A",
                // },
                {
                  playerACharacters: [Bennett, Klee, Keqing],
                  playerBCharacters: [YaeMiko, Tighnari, Collei],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Ningguang, RaidenShogun, Zhongli],
                  playerBCharacters: [Bennett, Keqing, Klee],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "吾虽年迈",
              playerB: "晚晴",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1fP411q7Nz",
              games: [], // 2:3
            },
            {
              playerA: "破晓",
              playerB: "雀雀",
              winner: "B",
              video: "", // 没找到
              games: [], // 2:3
            },
          ],
        },
        {
          name: "DAY3",
          date: "2023-06-20",
          matches: [
            {
              playerA: "阿源",
              playerB: "吴二不作",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1Fz4y1H7Zg",
              games: [], // 3:0
            },
            {
              playerA: "燃火之蝶",
              playerB: "宇宙蓝色闪光",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1Fz4y1H7Zg",
              games: [], // 3:0
            },
          ],
        },
      ],
    },
    {
      name: "8进4",
      parts: [
        {
          name: "DAY1",
          date: "2023-06-21",
          matches: [
            {
              playerA: "「亦然」",
              playerB: "本吃包",
              winner: "B",
              video: "https://www.bilibili.com/video/BV14m4y1e7t8",
              games: [], // 1:3
            },
            {
              playerA: "琉環冰",
              playerB: "八重妞妞",
              winner: "B",
              video: "https://www.bilibili.com/video/BV14m4y1e7t8",
              games: [], // 2:3
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-06-22",
          matches: [
            {
              playerA: "雀雀",
              playerB: "晚晴",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1cj411Q7Zn",
              games: [], // 3:1
            },
            {
              playerA: "阿源",
              playerB: "燃火之蝶",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1cj411Q7Zn",
              games: [], // 0:3
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
          date: "2023-06-23",
          matches: [
            {
              playerA: "八重妞妞",
              playerB: "本吃包",
              winner: "B",
              video: "",
              games: [], // 1:3
            },
            {
              playerA: "雀雀",
              playerB: "燃火之蝶",
              winner: "A",
              video: "",
              games: [], // 3:2
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
          date: "2023-06-24",
          matches: [],
        },
      ],
    },
  ],
});
