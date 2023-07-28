import { Amber, AratakiItto, Barbara, Bennett, Chongyun, Collei, Cyno, Diluc, FatuiMirrorMaiden, FatuiPyroAgent, Fischl, JadeplumeTerrorshroom, KamisatoAyato, Keqing, Klee, KujouSara, Mona, Nahida, Ningguang, Noelle, RaidenShogun, RhodeiaOfLoch, SangonomiyaKokomi, Shenhe, StonehideLawachurl, Sucrose, Tighnari, Venti, YaeMiko, Zhongli } from "../../shared/character-cards";
import { defineTournament } from "../../shared/utils/tournaments";

export default defineTournament({
  name: "「同声相应」共鸣杯",
  type: "全民积分赛",
  gameVersion: "3.7",
  image: "https://webstatic.mihoyo.com/upload/op-public/2023/05/23/8d189636c2ac9dc76269ae0f28405ffd_1033763648037763590.jpg",
  stages: [
    {
      name: "16进8淘汰赛",
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
                {
                  playerACharacters: [YaeMiko, Tighnari, Collei],
                  playerBCharacters: [Bennett, Keqing, Klee],
                  starter: "A",
                  winner: "A",
                },
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
              playerA: "晚晴",
              playerB: "吾虽年迈",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1fP411q7Nz",
              games: [
                {
                  playerACharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  playerBCharacters: [YaeMiko, Tighnari, Collei],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  playerBCharacters: [AratakiItto, Barbara, Noelle],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [YaeMiko, Tighnari, Collei],
                  playerBCharacters: [AratakiItto, Barbara, Noelle],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Ningguang, RaidenShogun, Zhongli],
                  playerBCharacters: [Amber, AratakiItto, Noelle],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Ningguang, RaidenShogun, Zhongli],
                  playerBCharacters: [AratakiItto, Barbara, Noelle],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "破晓",
              playerB: "雀雀",
              winner: "B",
              video: "",
              games: [
                {
                  playerACharacters: [AratakiItto, Barbara, Noelle],
                  playerBCharacters: [SangonomiyaKokomi, Noelle, Barbara],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [SangonomiyaKokomi, Ningguang, Barbara],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [SangonomiyaKokomi, Ningguang, Barbara],
                  playerBCharacters: [Zhongli, RaidenShogun, Ningguang],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [SangonomiyaKokomi, Ningguang, Barbara],
                  playerBCharacters: [SangonomiyaKokomi, Noelle, Barbara],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerBCharacters: [SangonomiyaKokomi, Noelle, Barbara],
                  starter: "B",
                  winner: "B",
                },
              ],
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
              games: [
                {
                  playerACharacters: [Keqing, Mona, Venti],
                  playerBCharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  playerBCharacters: [YaeMiko, Tighnari, Collei],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerBCharacters: [YaeMiko, Tighnari, Collei],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "燃火之蝶",
              playerB: "宇宙蓝色闪光",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1Fz4y1H7Zg",
              games: [
                {
                  playerACharacters: [YaeMiko, Tighnari, Collei],
                  playerBCharacters: [Collei, YaeMiko, Tighnari],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Mona, Venti, Keqing],
                  playerBCharacters: [Collei, YaeMiko, Tighnari],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Nahida, Mona, Fischl],
                  playerBCharacters: [Bennett, Klee, Keqing],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "8进4淘汰赛",
      parts: [
        {
          name: "DAY1",
          date: "2023-06-21",
          matches: [
            {
              playerA: "本吃包",
              playerB: "「亦然」",
              winner: "A",
              video: "https://www.bilibili.com/video/BV14m4y1e7t8",
              games: [
                {
                  playerACharacters: [YaeMiko, Tighnari, Collei],
                  playerBCharacters: [Bennett, Keqing, Klee],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  playerBCharacters: [Bennett, Keqing, Klee],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Bennett, Klee, Keqing],
                  playerBCharacters: [Bennett, Keqing, Klee],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "八重妞妞",
              playerB: "琉環冰",
              winner: "A",
              video: "https://www.bilibili.com/video/BV14m4y1e7t8",
              games: [
                {
                  playerACharacters: [Amber, AratakiItto, Noelle],
                  playerBCharacters: [YaeMiko, Tighnari, Collei],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Collei, YaeMiko, Tighnari],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Collei, YaeMiko, Tighnari],
                  playerBCharacters: [YaeMiko, Tighnari, Collei],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Mona, Venti, Keqing],
                  playerBCharacters: [Bennett, Keqing, Klee],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Mona, Venti, Keqing],
                  playerBCharacters: [YaeMiko, Tighnari, Collei],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-06-22",
          matches: [
            {
              playerA: "晚晴",
              playerB: "雀雀",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1cj411Q7Zn",
              games: [
                {
                  playerACharacters: [YaeMiko, Tighnari, Collei],
                  playerBCharacters: [AratakiItto, Barbara, Noelle],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [YaeMiko, Tighnari, Collei],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [YaeMiko, Tighnari, Collei],
                  playerBCharacters: [YaeMiko, Tighnari, Collei],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [YaeMiko, Tighnari, Collei],
                  playerBCharacters: [AratakiItto, Amber, Noelle],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "阿源",
              playerB: "燃火之蝶",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1cj411Q7Zn",
              games: [
                {
                  playerACharacters: [Keqing, Mona, Venti],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Keqing, Mona, Venti],
                  playerBCharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerBCharacters: [Nahida, Mona, Fischl],
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
          date: "2023-06-23",
          matches: [
            {
              playerA: "八重妞妞",
              playerB: "本吃包",
              winner: "B",
              video: "",
              games: [
                {
                  playerACharacters: [RhodeiaOfLoch, YaeMiko, Nahida],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, YaeMiko, Nahida],
                  playerBCharacters: [Chongyun, Bennett, Klee],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Mona, Venti, Keqing],
                  playerBCharacters: [YaeMiko, Tighnari, Collei],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, YaeMiko, FatuiPyroAgent],
                  playerBCharacters: [YaeMiko, Tighnari, Collei],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "燃火之蝶",
              playerB: "雀雀",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1dV411u7mJ",
              games: [
                {
                  playerACharacters: [Cyno, Klee, Bennett],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Mona, Venti, Keqing],
                  playerBCharacters: [Shenhe, Venti, Sucrose],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Mona, Venti, Keqing],
                  playerBCharacters: [Zhongli, RaidenShogun, Ningguang],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Mona, Venti, Keqing],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [SangonomiyaKokomi, Noelle, Barbara],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "表演赛",
      parts: [
        {
          name: "",
          date: "2023-06-24",
          matches: [
            {
              playerA: "月话牌社-音月",
              playerB: "小铭同学qaQ233",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1NX4y1p7Cg",
              games: [
                {
                  playerACharacters: [KujouSara, Ningguang, Noelle],
                  playerBCharacters: [StonehideLawachurl, Amber, Zhongli],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [KujouSara, Ningguang, Noelle],
                  playerBCharacters: [KamisatoAyato, Zhongli, FatuiMirrorMaiden],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [KujouSara, Diluc, JadeplumeTerrorshroom],
                  playerBCharacters: [KamisatoAyato, Zhongli, FatuiMirrorMaiden],
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
          date: "2023-06-24",
          matches: [
            {
              playerA: "本吃包",
              playerB: "雀雀",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1NX4y1p7Cg",
              games: [
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerBCharacters: [Fischl, Nahida, Mona],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBCharacters: [Mona, Venti, Keqing],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [YaeMiko, Tighnari, Collei],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [YaeMiko, Tighnari, Collei],
                  playerBCharacters: [Mona, Venti, Keqing],
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
