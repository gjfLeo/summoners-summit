import { deckIdCollectors as deckIds } from "../decks";
import type { Tournament } from "~/utils/types";

const tournamentId = "0001";
let gameIndex = 0;
function nextGameId() {
  gameIndex++;
  return `${tournamentId}-${gameIndex.toString().padStart(4)}`;
}

const tournament: Tournament = {
  id: tournamentId,
  name: "七圣召唤主播邀请赛",
  gamePatch: "3.7",
  stages: [
    {
      name: "线上淘汰赛",
      rules: {
        deckRules: ["预组", 3],
        matchRules: ["决斗", 2],
        stageRules: "单败淘汰",
      },
      parts: [
        {
          name: "预选赛A组",
          date: "2023-06-07",
          matches: [
            {
              playerA: "毕游侠",
              playerB: "疯猫鸽鸽",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-毕游侠"],
                  deckB: deckIds.pyro["火刻-疯猫鸽鸽"],
                  startWith: "A",
                  winner: "A",
                  turns: 3,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.dendro["八柯提-毕游侠"],
                  deckB: deckIds.dendro["八柯提-疯猫鸽鸽"],
                  startWith: "B",
                  winner: "B",
                  turns: 4,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.pyro["火刻-毕游侠"],
                  deckB: deckIds.other["水皇草-疯猫鸽鸽"],
                  startWith: "A",
                  winner: "A",
                  turns: 3,
                },
              ],
            },
            {
              playerA: "村长",
              playerB: "老伯",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?p=2",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.pyro["火刻-毕游侠"],
                  deckB: deckIds.other["莫温雷-老伯"],
                  startWith: "A",
                  winner: "B",
                  turns: 4,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-疯猫鸽鸽"],
                  deckB: deckIds.hydro["双水凝光-老伯"],
                  startWith: "B",
                  winner: "B",
                  turns: 6,
                },
              ],
            },
            {
              playerA: "兔娘",
              playerB: "音尘",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?p=3",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.other["班尼特雷神绫华-兔娘"],
                  deckB: deckIds.other["水皇草-音尘"],
                  startWith: "A",
                  winner: "B",
                  turns: 3,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.dendro["八柯提-兔娘"],
                  deckB: deckIds.cryo["重申雷-音尘"],
                  startWith: "B",
                  winner: "B",
                  turns: 4,
                },
              ],
            },
            {
              playerA: "小床",
              playerB: "八重妞妞",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?p=4",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-小床"],
                  deckB: deckIds.other["水皇草-八重妞妞"],
                  startWith: "B",
                  winner: "B",
                  turns: 5,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.pyro["火刻-小床"],
                  deckB: deckIds.geo["一斗双岩-八重妞妞"],
                  startWith: "A",
                  winner: "B",
                  turns: 5,
                },
              ],
            },
            {
              playerA: "毕游侠",
              playerB: "老伯",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?p=5",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.pyro["火刻-毕游侠"],
                  deckB: deckIds.other["水债八-老伯"],
                  startWith: "B",
                  winner: "B",
                  turns: 5,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-毕游侠"],
                  deckB: deckIds.hydro["双水凝光-老伯"],
                  startWith: "A",
                  winner: "B",
                  turns: 7,
                },
              ],
            },
            {
              playerA: "音尘",
              playerB: "八重妞妞",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?p=6",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-音尘"],
                  deckB: deckIds.dendro["八柯提-八重妞妞"],
                  startWith: "A",
                  winner: "B",
                  turns: 4,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-音尘"],
                  deckB: deckIds.geo["一斗双岩-八重妞妞"],
                  startWith: "A",
                  winner: "B",
                  turns: 5,
                },
              ],
            },
          ],
        },
        {
          name: "预选赛B组",
          date: "2023-06-07",
          matches: [
            {
              playerA: "Sherry",
              playerB: "古明地觉",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1WL411i7gF",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.geo["一斗双岩-Sherry"],
                  deckB: deckIds.dendro["八柯提-古明地觉"],
                  startWith: "A",
                  winner: "B",
                  turns: 4,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-Sherry"],
                  deckB: deckIds.pyro["火刻-古明地觉"],
                  startWith: "B",
                  winner: "A",
                  turns: 4,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.dendro["八柯提-Sherry"],
                  deckB: deckIds.hydro["双水凝光-古明地觉"],
                  startWith: "A",
                  winner: "A",
                  turns: 6,
                },
              ],
            },
            {
              playerA: "莲花",
              playerB: "狗神儿",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1WL411i7gF?p=2",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.dendro["八柯提-莲花"],
                  deckB: deckIds.geo["女仆双岩-狗神儿"],
                  startWith: "B",
                  winner: "B",
                  turns: 6,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.anemo["莫温魈-莲花"],
                  deckB: deckIds.geo["钟离双岩-狗神儿"],
                  startWith: "A",
                  winner: "B",
                  turns: 7,
                },
              ],
            },
            {
              playerA: "卡密sama",
              playerB: "企鹅带带北极熊",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1WL411i7gF?p=3",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.pyro["火刻-卡密sama"],
                  deckB: deckIds.other["水可草-企鹅带带北极熊"],
                  startWith: "B",
                  winner: "B",
                  turns: 4,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.hydro["双水凝光-卡密sama"],
                  deckB: deckIds.cryo["重优雷-企鹅带带北极熊"],
                  startWith: "A",
                  winner: "A",
                  turns: 7,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-卡密sama"],
                  deckB: deckIds.pyro["公子-企鹅带带北极熊"],
                  startWith: "B",
                  winner: "A",
                  turns: 4,
                },
              ],
            },
            {
              playerA: "鸭鸭",
              playerB: "魔法绵阳Tobby",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1WL411i7gF?p=4",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.pyro["火刻-鸭鸭"],
                  deckB: deckIds.dendro["八柯提-魔法绵阳Tobby"],
                  startWith: "A",
                  winner: "A",
                  turns: 4,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.geo["雷钟凝-鸭鸭"],
                  deckB: deckIds.other["水皇草-魔法绵羊Tobby"],
                  startWith: "B",
                  winner: "B",
                  turns: 5,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.dendro["八柯提-鸭鸭"],
                  deckB: deckIds.pyro["火刻-魔法绵阳Tobby"],
                  startWith: "A",
                  winner: "B",
                  turns: 4,
                },
              ],
            },
            {
              playerA: "Sherry",
              playerB: "狗神儿",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1WL411i7gF?p=5",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.pyro["火刻-古明地觉"],
                  deckB: deckIds.geo["女仆双岩-狗神儿"],
                  startWith: "A",
                  winner: "B",
                  turns: 8,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.geo["一斗双岩-Sherry"],
                  deckB: deckIds.geo["钟离双岩-狗神儿"],
                  startWith: "A",
                  winner: "B",
                  turns: 11,
                },
              ],
            },
            {
              playerA: "卡密sama",
              playerB: "魔法绵阳Tobby",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1WL411i7gF?p=6",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-卡密sama"],
                  deckB: deckIds.pyro["火刻-魔法绵阳Tobby"],
                  startWith: "B",
                  winner: "A",
                  turns: 3,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.dendro["八柯提-卡密sama"],
                  deckB: deckIds.other["水皇草-魔法绵羊Tobby"],
                  startWith: "B",
                  winner: "B",
                  turns: 4,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.hydro["双水凝光-卡密sama"],
                  deckB: deckIds.dendro["八柯提-魔法绵阳Tobby"],
                  startWith: "B",
                  winner: "A",
                  turns: 8,
                },
              ],
            },
          ],
        },
        {
          name: "预选赛C组",
          date: "2023-06-08",
          matches: [
            {
              playerA: "男总",
              playerB: "吴意",
              winner: "B",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-男总"],
                  deckB: deckIds.dendro["八柯提-吴意"],
                  startWith: "B",
                  winner: "B",
                  turns: 3,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-男总"],
                  deckB: deckIds.pyro["火刻-吴意"],
                  startWith: "B",
                  winner: "B",
                  turns: 4,
                },
              ],
            },
            {
              playerA: "Soul",
              playerB: "皮皮猪",
              winner: "B",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.other["莫皇草-Soul"],
                  deckB: deckIds.dendro["八柯提-皮皮猪"],
                  startWith: "B",
                  winner: "B",
                  turns: 3,
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.geo["钟离魔物双岩-Soul"],
                  deckB: deckIds.other["水皇草-皮皮猪"],
                  startWith: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "阿阮",
              playerB: "齿轮",
              winner: "B",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.pyro["胡桃愚人众-阿阮"],
                  deckB: deckIds.cryo["重申雷-齿轮"],
                  startWith: "B",
                  winner: "B",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.hydro["双水莫娜凝光-阿阮"],
                  deckB: deckIds.electro["水皇赛-齿轮"],
                  startWith: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "唐傀",
              playerB: "莉莉芭",
              winner: "B",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.dendro["八柯提-唐傀"],
                  deckB: deckIds.geo["雷钟凝-莉莉芭"],
                  startWith: "B",
                  winner: "B",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-唐傀"],
                  deckB: deckIds.dendro["八柯提-古明地觉"],
                  startWith: "A",
                  winner: "A",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-唐傀"],
                  deckB: deckIds.pyro["火刻-古明地觉"],
                  startWith: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "吴意",
              playerB: "皮皮猪",
              winner: "B",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.dendro["八柯提-吴意"],
                  deckB: deckIds.other["水皇草-皮皮猪"],
                  startWith: "B",
                  winner: "B",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-吴意"],
                  deckB: deckIds.cryo["重申雷-皮皮猪"],
                  startWith: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "齿轮",
              playerB: "莉莉芭",
              winner: "B",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.dendro["提八草神-齿轮"],
                  deckB: deckIds.pyro["火刻-古明地觉"],
                  startWith: "A",
                  winner: "B",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-齿轮"],
                  deckB: deckIds.other["水皇草-莉莉芭"],
                  startWith: "A",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "预选赛D组",
          date: "2023-06-09",
          matches: [
            {
              playerA: "雪国Ink",
              playerB: "多肉",
              winner: "A",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水债皇-雪国Ink"],
                  deckB: deckIds.hydro["双水凝光-多肉"],
                  startWith: "A",
                  winner: "A",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.pyro["火刻-雪国Ink"],
                  deckB: deckIds.geo["雷钟一斗-多肉"],
                  startWith: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "周正福",
              playerB: "长安大魔王",
              winner: "A",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-周正福"],
                  deckB: deckIds.dendro["八柯提-长安大魔王"],
                  startWith: "B",
                  winner: "B",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.geo["一斗双岩-周正福"],
                  deckB: deckIds.electro["雷泽重云雷神-长安大魔王"],
                  startWith: "B",
                  winner: "A",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-周正福"],
                  deckB: deckIds.other["水皇草-长安大魔王"],
                  startWith: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "今天不想吃苹果",
              playerB: "啊乔巴",
              winner: "A",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-今天不想吃苹果"],
                  deckB: deckIds.geo["雷钟凝-啊乔巴"],
                  startWith: "A",
                  winner: "A",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-今天不想吃苹果"],
                  deckB: deckIds.cryo["重申砂-啊乔巴"],
                  startWith: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "柠柠七喵",
              playerB: "月话音月",
              winner: "B",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-音尘"],
                  deckB: deckIds.other["水债皇-月话音月"],
                  startWith: "B",
                  winner: "B",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-柠柠七喵"],
                  deckB: deckIds.dendro["八柯提-月话音月"],
                  startWith: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "雪国Ink",
              playerB: "周正福",
              winner: "B",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水债皇-雪国Ink"],
                  deckB: deckIds.geo["一斗双岩-周正福"],
                  startWith: "A",
                  winner: "B",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.hydro["双水凝光-雪国Ink"],
                  deckB: deckIds.cryo["重申雷-周正福"],
                  startWith: "B",
                  winner: "A",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.pyro["火刻-雪国Ink"],
                  deckB: deckIds.other["水皇草-周正福"],
                  startWith: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "今天不想吃苹果",
              playerB: "月话音月",
              winner: "A",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-今天不想吃苹果"],
                  deckB: deckIds.dendro["八柯提-月话音月"],
                  startWith: "B",
                  winner: "A",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.dendro["八柯提-今天不想吃苹果"],
                  deckB: deckIds.other["水债皇-月话音月"],
                  startWith: "B",
                  winner: "B",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-今天不想吃苹果"],
                  deckB: deckIds.pyro["火刻-月话音月"],
                  startWith: "B",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "8进4晋级赛",
          date: "2023-06-10",
          matches: [
            {
              playerA: "卡密sama",
              playerB: "八重妞妞",
              winner: "A",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.dendro["八柯提-卡密sama"],
                  deckB: deckIds.geo["一斗双岩-八重妞妞"],
                  startWith: "B",
                  winner: "A",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水债皇-卡密sama"],
                  deckB: deckIds.pyro["赛诺-八重妞妞"],
                  startWith: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "周正福",
              playerB: "莉莉芭",
              winner: "A",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-周正福"],
                  deckB: deckIds.cryo["重申雷-莉莉芭"],
                  startWith: "A",
                  winner: "A",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.geo["一斗双岩-周正福"],
                  deckB: deckIds.other["水皇草-莉莉芭"],
                  startWith: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "老伯",
              playerB: "皮皮猪",
              winner: "B",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-老伯"],
                  deckB: deckIds.other["水皇草-皮皮猪"],
                  startWith: "B",
                  winner: "B",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.pyro["火刻-老伯"],
                  deckB: deckIds.cryo["重申雷-皮皮猪晋级赛"],
                  startWith: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "今天不想吃苹果",
              playerB: "狗神儿",
              winner: "A",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-今天不想吃苹果晋级赛"],
                  deckB: deckIds.geo["女仆双岩-狗神儿晋级赛"],
                  startWith: "B",
                  winner: "A",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.geo["一斗双岩-今天不想吃苹果"],
                  deckB: deckIds.geo["钟离双岩-狗神儿晋级赛"],
                  startWith: "B",
                  winner: "A",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "线下赛",
      rules: {
        stageRules: "双败淘汰",
      },
      parts: [
        {
          name: "胜者组4进2",
          date: "2023-06-16",
          matches: [],
        },
        {
          name: "胜者组半决赛",
          date: "2023-06-16",
          rules: {
            deckRules: ["预组", 3],
            matchRules: ["决斗", 2],
          },
          matches: [
            {
              playerA: "甜甜花酿鸡队",
              playerB: "提瓦特煎蛋队",
              winner: "B",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.dendro["八柯提-甜甜花酿鸡队"],
                  deckB: deckIds.other["水皇草-今天不想吃苹果"],
                  startWith: "B",
                  winner: "A",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-皮皮猪"],
                  deckB: deckIds.cryo["重申雷-今天不想吃苹果"],
                  startWith: "A",
                  winner: "B",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-皮皮猪晋级赛"],
                  deckB: deckIds.other["莫刻温-提瓦特煎蛋队"],
                  startWith: "A",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "败者组第1场",
          date: "2023-06-17",
          matches: [],
        },
        {
          name: "败者组半决赛",
          date: "2023-06-17",
          rules: {
            deckRules: ["预组", 5],
            matchRules: ["决斗", 2],
          },
          matches: [
            {
              playerA: "甜甜花酿鸡队",
              playerB: "黄油蟹蟹队",
              winner: "B",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.geo["八重钟凝-甜甜花酿鸡队"],
                  deckB: deckIds.cryo["重申雷-黄油蟹蟹队"],
                  startWith: "B",
                  winner: "B",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-皮皮猪晋级赛"],
                  deckB: deckIds.geo["钟离魔物双岩-黄油蟹蟹队"],
                  startWith: "A",
                  winner: "A",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-皮皮猪"],
                  deckB: deckIds.other["琴皇草-黄油蟹蟹队"],
                  startWith: "B",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "决赛",
          date: "2023-06-17",
          rules: {
            deckRules: ["预组", 5],
            matchRules: ["决斗", 3],
          },
          matches: [
            {
              name: "第3场",
              playerA: "提瓦特煎蛋队",
              playerB: "黄油蟹蟹队",
              winner: "A",
              games: [
                {
                  id: nextGameId(),
                  deckA: deckIds.dendro["八柯提-今天不想吃苹果"],
                  deckB: deckIds.cryo["重申雷-黄油蟹蟹队"],
                  startWith: "B",
                  winner: "A",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.cryo["重申雷-今天不想吃苹果"],
                  deckB: deckIds.geo["钟离魔物双岩-黄油蟹蟹队"],
                  startWith: "B",
                  winner: "A",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.other["水皇草-今天不想吃苹果"],
                  deckB: deckIds.geo["女仆双岩-黄油蟹蟹队"],
                  startWith: "B",
                  winner: "B",
                },
                {
                  id: nextGameId(),
                  deckA: deckIds.other["莫刻温-提瓦特煎蛋队"],
                  deckB: deckIds.other["琴皇草-黄油蟹蟹队"],
                  startWith: "A",
                  winner: "A",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default tournament;
