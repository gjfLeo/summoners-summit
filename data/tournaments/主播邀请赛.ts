import { deckIdCollectors as deckIds } from "../decks";
import type { Tournament } from "~/utils/types";

const tournament: Tournament = {
  name: "「七圣召唤主播邀请赛」",
  sections: [
    {
      name: "6月7日线上预选赛A组",
      date: "2023-06-07",
      matches: [
        {
          playerA: "毕游侠",
          playerB: "疯猫鸽鸽",
          winner: "A",
          games: [
            {
              deckA: deckIds.cryo["雷申重-毕游侠"],
              deckB: deckIds.pyro["火刻-疯猫鸽鸽"],
              startWith: "A",
              winner: "A",
              turns: 3,
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?t=536.0",
            },
            {
              deckA: deckIds.dendro["提八激化-毕游侠"],
              deckB: deckIds.dendro["提八激化-疯猫鸽鸽"],
              startWith: "B",
              winner: "B",
              turns: 4,
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?t=1467.3",
            },
            {
              deckA: deckIds.pyro["火刻-毕游侠"],
              deckB: deckIds.other["水皇草-疯猫鸽鸽"],
              startWith: "A",
              winner: "A",
              turns: 3,
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?t=2353.8",
            },
          ],
        },
        {
          playerA: "村长",
          playerB: "老伯",
          winner: "B",
          games: [
            {
              deckA: deckIds.pyro["火刻-毕游侠"],
              deckB: deckIds.other["莫温雷-老伯"],
              startWith: "A",
              winner: "B",
              turns: 4,
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?t=752.9&p=2",
            },
            {
              deckA: deckIds.other["水皇草-疯猫鸽鸽"],
              deckB: deckIds.hydro["双水凝光-老伯"],
              startWith: "B",
              winner: "B",
              turns: 6,
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?t=1802.6&p=2",
            },
          ],
        },
        {
          playerA: "兔娘",
          playerB: "音尘",
          winner: "B",
          games: [
            {
              deckA: deckIds.other["班尼特雷神绫华-兔娘"],
              deckB: deckIds.other["水皇草-音尘"],
              startWith: "A",
              winner: "B",
              turns: 3,
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?t=366.3&p=3",
            },
            {
              deckA: deckIds.dendro["提八激化-兔娘"],
              deckB: deckIds.cryo["雷申重-音尘"],
              startWith: "B",
              winner: "B",
              turns: 4,
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?t=1236.2&p=3",
            },
          ],
        },
        {
          playerA: "小床",
          playerB: "八重妞妞",
          winner: "B",
          games: [
            {
              deckA: deckIds.other["水皇草-小床"],
              deckB: deckIds.other["水皇草-八重妞妞"],
              startWith: "B",
              winner: "B",
              turns: 5,
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?t=254.5&p=4",
            },
            {
              deckA: deckIds.pyro["火刻-小床"],
              deckB: deckIds.geo["一斗双岩-八重妞妞"],
              startWith: "A",
              winner: "B",
              turns: 5,
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?t=1875.5&p=4",
            },
          ],
        },
        {
          playerA: "毕游侠",
          playerB: "老伯",
          winner: "B",
          games: [
            {
              deckA: deckIds.pyro["火刻-毕游侠"],
              deckB: deckIds.other["水债八-老伯"],
              startWith: "B",
              winner: "B",
              turns: 5,
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?t=220.7&p=5",
            },
            {
              deckA: deckIds.cryo["雷申重-毕游侠"],
              deckB: deckIds.hydro["双水凝光-老伯"],
              startWith: "A",
              winner: "B",
              turns: 7,
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?t=1858.9&p=5",
            },
          ],
        },
        {
          playerA: "音尘",
          playerB: "八重妞妞",
          winner: "B",
          games: [
            {
              deckA: deckIds.other["水皇草-音尘"],
              deckB: deckIds.dendro["提八激化-八重妞妞"],
              startWith: "A",
              winner: "B",
              turns: 4,
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?t=188.0&p=6",
            },
            {
              deckA: deckIds.cryo["雷申重-音尘"],
              deckB: deckIds.geo["一斗双岩-八重妞妞"],
              startWith: "A",
              winner: "B",
              turns: 5,
              video: "https://www.bilibili.com/video/BV1c14y1Q7RZ?t=1116.2&p=6",
            },
          ],
        },
      ],
    },
    {
      name: "6月8日线上预选赛B组",
      date: "2023-06-08",
      matches: [
        {
          playerA: "Sherry",
          playerB: "古明地觉",
          winner: "A",
          games: [
            {
              deckA: deckIds.geo["一斗双岩-Sherry"],
              deckB: deckIds.dendro["提八激化-古明地觉"],
              startWith: "A",
              winner: "B",
              turns: 4,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=649.3",
            },
            {
              deckA: deckIds.cryo["雷申重-Sherry"],
              deckB: deckIds.pyro["火刻-古明地觉"],
              startWith: "B",
              winner: "A",
              turns: 4,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=1439.9",
            },
            {
              deckA: deckIds.dendro["提八激化-Sherry"],
              deckB: deckIds.hydro["双水凝光-古明地觉"],
              startWith: "A",
              winner: "A",
              turns: 6,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=2383.3",
            },
          ],
        },
        {
          playerA: "莲花",
          playerB: "狗神儿",
          winner: "B",
          games: [
            {
              deckA: deckIds.dendro["提八激化-莲花"],
              deckB: deckIds.geo["女仆双岩-狗神儿"],
              startWith: "B",
              winner: "B",
              turns: 6,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=227.7&p=2",
            },
            {
              deckA: deckIds.anemo["莫温魈-莲花"],
              deckB: deckIds.geo["钟离双岩-狗神儿"],
              startWith: "A",
              winner: "B",
              turns: 7,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=1926.4&p=2",
            },
          ],
        },
        {
          playerA: "卡密sama",
          playerB: "企鹅带带北极熊",
          winner: "A",
          games: [
            {
              deckA: deckIds.pyro["火刻-卡密sama"],
              deckB: deckIds.other["水可草-企鹅带带北极熊"],
              startWith: "B",
              winner: "B",
              turns: 4,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=207.0&p=3",
            },
            {
              deckA: deckIds.hydro["双水凝光-卡密sama"],
              deckB: deckIds.cryo["雷申优-企鹅带带北极熊"],
              startWith: "A",
              winner: "A",
              turns: 7,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=1380.7&p=3",
            },
            {
              deckA: deckIds.other["水皇草-卡密sama"],
              deckB: deckIds.pyro["公子-企鹅带带北极熊"],
              startWith: "B",
              winner: "A",
              turns: 4,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=3198.1&p=3",
            },
          ],
        },
        {
          playerA: "鸭鸭",
          playerB: "魔法绵阳Tobby",
          winner: "B",
          games: [
            {
              deckA: deckIds.pyro["火刻-鸭鸭"],
              deckB: deckIds.dendro["提八激化-魔法绵阳Tobby"],
              startWith: "A",
              winner: "A",
              turns: 4,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=163.3&p=4",
            },
            {
              deckA: deckIds.geo["雷钟凝-鸭鸭"],
              deckB: deckIds.other["水皇草-魔法绵羊Tobby"],
              startWith: "B",
              winner: "B",
              turns: 5,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=1169.4&p=4",
            },
            {
              deckA: deckIds.dendro["提八激化-鸭鸭"],
              deckB: deckIds.pyro["火刻-魔法绵阳Tobby"],
              startWith: "A",
              winner: "B",
              turns: 4,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=2358.1&p=4",
            },
          ],
        },
        {
          playerA: "Sherry",
          playerB: "狗神儿",
          winner: "B",
          games: [
            {
              deckA: deckIds.pyro["火刻-古明地觉"],
              deckB: deckIds.geo["女仆双岩-狗神儿"],
              startWith: "A",
              winner: "B",
              turns: 8,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=125.3&p=5",
            },
            {
              deckA: deckIds.geo["一斗双岩-Sherry"],
              deckB: deckIds.geo["钟离双岩-狗神儿"],
              startWith: "A",
              winner: "B",
              turns: 11,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=1917.0&p=5",
            },
          ],
        },
        {
          playerA: "卡密sama",
          playerB: "魔法绵阳Tobby",
          winner: "A",
          games: [
            {
              deckA: deckIds.other["水皇草-卡密sama"],
              deckB: deckIds.pyro["火刻-魔法绵阳Tobby"],
              startWith: "B",
              winner: "A",
              turns: 3,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=174.4&p=6",
            },
            {
              deckA: deckIds.dendro["提八激化-卡密sama"],
              deckB: deckIds.other["水皇草-魔法绵羊Tobby"],
              startWith: "B",
              winner: "B",
              turns: 4,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=1136.6&p=6",
            },
            {
              deckA: deckIds.hydro["双水凝光-卡密sama"],
              deckB: deckIds.dendro["提八激化-魔法绵阳Tobby"],
              startWith: "B",
              winner: "A",
              turns: 8,
              video: "https://www.bilibili.com/video/BV1WL411i7gF?t=2061.7&p=6",
            },
          ],
        },
      ],
    },
    {
      name: "6月9日线上预选赛C组",
      date: "2023-06-09",
      matches: [
        {
          playerA: "男总",
          playerB: "吴意",
          winner: "B",
          games: [
            {
              deckA: deckIds.other["水皇草-男总"],
              deckB: deckIds.dendro["提八激化-吴意"],
              startWith: "B",
              winner: "B",
              turns: 3,
            },
            {
              deckA: deckIds.cryo["雷申重-男总"],
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
              deckA: deckIds.other["莫皇草-Soul"],
              deckB: deckIds.dendro["提八激化-皮皮猪"],
              startWith: "B",
              winner: "B",
              turns: 3,
            },
            {
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
              deckA: deckIds.pyro["胡桃愚人众-阿阮"],
              deckB: deckIds.cryo["雷申重-齿轮"],
              startWith: "B",
              winner: "B",
            },
            {
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
              deckA: deckIds.dendro["提八激化-唐傀"],
              deckB: deckIds.geo["雷钟凝-莉莉芭"],
              startWith: "B",
              winner: "B",
            },
            {
              deckA: deckIds.cryo["雷申重-唐傀"],
              deckB: deckIds.dendro["提八激化-古明地觉"],
              startWith: "A",
              winner: "A",
            },
            {
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
              deckA: deckIds.dendro["提八激化-吴意"],
              deckB: deckIds.other["水皇草-皮皮猪"],
              startWith: "B",
              winner: "B",
            },
            {
              deckA: deckIds.other["水皇草-吴意"],
              deckB: deckIds.cryo["雷申重-皮皮猪"],
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
              deckA: deckIds.dendro["提八草神-齿轮"],
              deckB: deckIds.pyro["火刻-古明地觉"],
              startWith: "A",
              winner: "B",
            },
            {
              deckA: deckIds.cryo["雷申重-齿轮"],
              deckB: deckIds.other["水皇草-莉莉芭"],
              startWith: "A",
              winner: "B",
            },
          ],
        },
      ],
    },
    {
      name: "6月10日线上预选赛D组",
      date: "2023-06-10",
      matches: [
        {
          playerA: "雪国Ink",
          playerB: "多肉",
          winner: "A",
          games: [
            {
              deckA: deckIds.other["水债皇-雪国Ink"],
              deckB: deckIds.hydro["双水凝光-多肉"],
              startWith: "A",
              winner: "A",
            },
            {
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
              deckA: deckIds.cryo["雷申重-周正福"],
              deckB: deckIds.dendro["提八激化-长安大魔王"],
              startWith: "B",
              winner: "B",
            },
            {
              deckA: deckIds.geo["一斗双岩-周正福"],
              deckB: deckIds.electro["长安大魔王-雷神雷泽重云"],
              startWith: "B",
              winner: "A",
            },
            {
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
              deckA: deckIds.cryo["雷申重-今天不想吃苹果"],
              deckB: deckIds.geo["雷钟凝-啊乔巴"],
              startWith: "A",
              winner: "A",
            },
            {
              deckA: deckIds.other["水皇草-今天不想吃苹果"],
              deckB: deckIds.cryo["砂糖申重-啊乔巴"],
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
              deckA: deckIds.other["水皇草-音尘"],
              deckB: deckIds.other["水债皇-月话音月"],
              startWith: "B",
              winner: "B",
            },
            {
              deckA: deckIds.cryo["雷申重-柠柠七喵"],
              deckB: deckIds.dendro["提八激化-月话音月"],
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
              deckA: deckIds.other["水债皇-雪国Ink"],
              deckB: deckIds.geo["一斗双岩-周正福"],
              startWith: "A",
              winner: "B",
            },
            {
              deckA: deckIds.hydro["双水凝光-雪国Ink"],
              deckB: deckIds.cryo["雷申重-周正福"],
              startWith: "B",
              winner: "A",
            },
            {
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
              deckA: deckIds.other["水皇草-今天不想吃苹果"],
              deckB: deckIds.dendro["提八激化-月话音月"],
              startWith: "B",
              winner: "A",
            },
            {
              deckA: deckIds.dendro["提八激化-今天不想吃苹果"],
              deckB: deckIds.other["水债皇-月话音月"],
              startWith: "B",
              winner: "B",
            },
            {
              deckA: deckIds.cryo["雷申重-今天不想吃苹果"],
              deckB: deckIds.pyro["火刻-月话音月"],
              startWith: "B",
              winner: "A",
            },
          ],
        },
      ],
    },
    {
      name: "6月11日线上晋级赛",
      date: "2023-06-11",
      matches: [],
    },
  ],
};

export default tournament;
