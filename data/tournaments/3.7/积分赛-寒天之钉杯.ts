import { Amber, AratakiItto, Barbara, Beidou, Bennett, Chongyun, Collei, FatuiPyroAgent, Fischl, HuTao, Keqing, Klee, Mona, Nahida, Ningguang, Noelle, RaidenShogun, RhodeiaOfLoch, Shenhe, Tighnari, Venti, Xingqiu, YaeMiko, Zhongli } from "../../shared/character-cards";
import { defineActions } from "../../shared/utils/decks";
import { defineTournament } from "../../shared/utils/tournaments";

const actions = {
  "StarMeaning-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "提米": 2,
    "立本": 2,
    "寻宝仙灵": 1,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "一掷乾坤": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 1,
    "送你一程": 1,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),
  "StarMeaning-双岩": defineActions({
    "钟剑": 2,
    "千岩牢固": 2,
    "璃月港口": 2,
    "天守阁": 2,
    "须弥城": 2,
    "阿圆": 2,
    "立本": 1,
    "元素共鸣：交织之岩": 2,
    "元素共鸣：坚定之岩": 2,
    "风与自由": 2,
    "运筹帷幄": 2,
    "交给我吧！": 1,
    "护法之誓": 2,
    "重攻击": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "StarMeaning-莫皇草": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "拉娜": 2,
    "寻宝仙灵": 2,
    "风与自由": 1,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "白垩之术": 2,
    "送你一程": 1,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
    "唐杜尔烤鸭": 1,
  }),
  "溺浸の叹王-火刻": defineActions({
    "冒险憧憬": 2,
    "祭礼剑": 1,
    "赌徒的耳环": 2,
    "璃月港口": 1,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之火": 2,
    "元素共鸣：热诚之火": 2,
    "风与自由": 2,
    "最好的伙伴！": 2,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "送你一程": 2,
    "莲花酥": 2,
    "唐杜尔烤鸭": 1,
  }),
  "溺浸の叹王-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "送你一程": 1,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "RR夜莺-莫皇草": defineActions({
    "赌徒的耳环": 2,
    "须弥城": 2,
    "提米": 2,
    "拉娜": 2,
    "风与自由": 1,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "星天之兆": 1,
    "白垩之术": 1,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
    "唐杜尔烤鸭": 2,
  }),
  "RR夜莺-水皇草": defineActions({
    "赌徒的耳环": 1,
    "桓纳兰那": 2,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "拉娜": 2,
    "最好的伙伴！": 2,
    "一掷乾坤": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 2,
    "白垩之术": 2,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "RR夜莺-钟凝": defineActions({
    "贯虹之槊": 2,
    "千岩牢固": 2,
    "璃月港口": 2,
    "西风大教堂": 2,
    "珊瑚宫": 2,
    "须弥城": 2,
    "阿圆": 2,
    "立本": 2,
    "元素共鸣：交织之岩": 2,
    "元素共鸣：坚定之岩": 2,
    "本大爷还没有输！": 1,
    "交给我吧！": 1,
    "送你一程": 2,
    "重攻击": 1,
    "永远的友谊": 1,
    "莲花酥": 2,
    "烤蘑菇披萨": 2,
  }),
  "RR夜莺-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "提米": 2,
    "立本": 2,
    "寻宝仙灵": 1,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 1,
    "送你一程": 2,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "岩van♂deep君-水债皇": defineActions({
    "悉数讨回": 1,
    "幸运儿银冠": 1,
    "璃月港口": 2,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 2,
    "送你一程": 2,
    "重攻击": 1,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
    "烤蘑菇披萨": 1,
  }),
  "岩van♂deep君-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 1,
    "送你一程": 2,
    "重攻击": 1,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),
  "安柏-火刻": defineActions({
    "冒险憧憬": 2,
    "祭礼剑": 2,
    "赌徒的耳环": 2,
    "璃月港口": 1,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之火": 2,
    "元素共鸣：热诚之火": 2,
    "风与自由": 2,
    "最好的伙伴！": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "送你一程": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),
  "安柏-双岩": defineActions({
    "钟剑": 2,
    "千岩牢固": 2,
    "璃月港口": 2,
    "天守阁": 2,
    "桓纳兰那": 2,
    "立本": 2,
    "元素共鸣：交织之岩": 2,
    "元素共鸣：坚定之岩": 2,
    "风与自由": 1,
    "最好的伙伴！": 1,
    "一掷乾坤": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "送你一程": 2,
    "重攻击": 2,
    "莲花酥": 1,
    "蒙德土豆饼": 2,
    "烤蘑菇披萨": 1,
  }),
  "安柏-火双冰": defineActions({
    "冒险憧憬": 2,
    "赌徒的耳环": 2,
    "桓纳兰那": 1,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "莲花酥": 2,
    "北地烟熏鸡": 2,
    "蒙德土豆饼": 2,
  }),
  "清风离-激化": defineActions({
    "阿莫斯之弓": 1,
    "赌徒的耳环": 2,
    "立本": 1,
    "寻宝仙灵": 2,
    "元素共鸣：交织之草": 2,
    "元素共鸣：蔓生之草": 2,
    "草与智慧": 2,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 1,
    "送你一程": 2,
    "重攻击": 1,
    "温妮莎传奇": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),
  "清风离-火刻": defineActions({
    "冒险憧憬": 2,
    "祭礼剑": 1,
    "赌徒的耳环": 2,
    "璃月港口": 1,
    "派蒙": 2,
    "提米": 1,
    "立本": 2,
    "拉娜": 1,
    "元素共鸣：交织之火": 2,
    "元素共鸣：热诚之火": 2,
    "风与自由": 2,
    "最好的伙伴！": 2,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "送你一程": 2,
    "莲花酥": 2,
    "唐杜尔烤鸭": 1,
  }),
  "清风离-胡桃": defineActions({
    "血之灶火": 1,
    "钟剑": 1,
    "千岩长枪": 2,
    "赌徒的耳环": 2,
    "千岩牢固": 2,
    "鸣神大社": 2,
    "桓纳兰那": 2,
    "镇守之森": 2,
    "立本": 2,
    "常九爷": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "送你一程": 2,
    "重攻击": 2,
    "莲花酥": 1,
    "蒙德土豆饼": 1,
    "烤蘑菇披萨": 1,
    "兽肉薄荷卷": 2,
  }),
  "摆烂喵-火刻": defineActions({
    "冒险憧憬": 2,
    "祭礼剑": 1,
    "赌徒的耳环": 2,
    "璃月港口": 1,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "拉娜": 2,
    "元素共鸣：交织之火": 2,
    "元素共鸣：热诚之火": 2,
    "风与自由": 1,
    "最好的伙伴！": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "送你一程": 2,
    "莲花酥": 2,
    "唐杜尔烤鸭": 1,
  }),
  "摆烂喵-双冰": defineActions({
    "赌徒的耳环": 2,
    "璃月港口": 1,
    "桓纳兰那": 1,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 1,
    "送你一程": 2,
    "重攻击": 1,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),
  "摆烂喵-火云鹤": defineActions({
    "冒险憧憬": 2,
    "赌徒的耳环": 2,
    "桓纳兰那": 1,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 2,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "送你一程": 2,
    "莲花酥": 2,
    "北地烟熏鸡": 1,
    "蒙德土豆饼": 2,
  }),
  "xhx-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "提米": 2,
    "立本": 2,
    "寻宝仙灵": 1,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 2,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "xhx-双岩": defineActions({
    "钟剑": 2,
    "千岩牢固": 2,
    "璃月港口": 1,
    "天守阁": 2,
    "桓纳兰那": 2,
    "提米": 1,
    "立本": 2,
    "元素共鸣：交织之岩": 2,
    "元素共鸣：坚定之岩": 2,
    "风与自由": 1,
    "运筹帷幄": 1,
    "本大爷还没有输！": 1,
    "交给我吧！": 1,
    "送你一程": 2,
    "重攻击": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
    "烤蘑菇披萨": 2,
  }),
  "xhx-水皇草": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "一掷乾坤": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 1,
    "白垩之术": 2,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "xhx-水皇胡": defineActions({
    "千岩牢固": 2,
    "璃月港口": 1,
    "天守阁": 2,
    "桓纳兰那": 2,
    "派蒙": 1,
    "提米": 2,
    "立本": 2,
    "换班时间": 2,
    "一掷乾坤": 1,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 1,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
    "烤蘑菇披萨": 2,
  }),
  "曲误周郎-水皇草": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "白垩之术": 2,
    "送你一程": 2,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "曲误周郎-水债皇": defineActions({
    "悉数讨回": 2,
    "幸运儿银冠": 2,
    "璃月港口": 2,
    "天守阁": 2,
    "桓纳兰那": 2,
    "提米": 2,
    "立本": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "送你一程": 2,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
    "烤蘑菇披萨": 1,
  }),
  "曲误周郎-双岩": defineActions({
    "钟剑": 2,
    "千岩牢固": 2,
    "璃月港口": 2,
    "天守阁": 2,
    "须弥城": 2,
    "阿圆": 2,
    "立本": 2,
    "元素共鸣：交织之岩": 2,
    "元素共鸣：坚定之岩": 2,
    "风与自由": 2,
    "运筹帷幄": 1,
    "交给我吧！": 1,
    "送你一程": 2,
    "重攻击": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "零之启-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 1,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 2,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),
  "零之启-莫温刻": defineActions({
    "祭礼剑": 1,
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "提米": 2,
    "鲸井小弟": 1,
    "寻宝仙灵": 2,
    "风与自由": 2,
    "最好的伙伴！": 1,
    "换班时间": 1,
    "一掷乾坤": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "白垩之术": 2,
    "送你一程": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "唐杜尔烤鸭": 2,
  }),
  "零之启-双岩": defineActions({
    "钟剑": 2,
    "千岩牢固": 2,
    "璃月港口": 2,
    "天守阁": 2,
    "桓纳兰那": 2,
    "立本": 1,
    "元素共鸣：交织之岩": 2,
    "元素共鸣：坚定之岩": 2,
    "风与自由": 2,
    "运筹帷幄": 1,
    "本大爷还没有输！": 1,
    "交给我吧！": 1,
    "送你一程": 1,
    "护法之誓": 1,
    "重攻击": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
    "烤蘑菇披萨": 2,
  }),
  "柚恩柚恩了-水债皇": defineActions({
    "幸运儿银冠": 2,
    "璃月港口": 2,
    "天守阁": 2,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 2,
    "送你一程": 2,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
    "烤蘑菇披萨": 2,
  }),
  "柚恩柚恩了-激化": defineActions({
    "阿莫斯之弓": 1,
    "赌徒的耳环": 2,
    "提米": 2,
    "立本": 1,
    "寻宝仙灵": 2,
    "元素共鸣：交织之草": 2,
    "元素共鸣：蔓生之草": 2,
    "草与智慧": 2,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 1,
    "送你一程": 1,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "柚恩柚恩了-双冰": defineActions({
    "赌徒的耳环": 2,
    "璃月港口": 1,
    "桓纳兰那": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 1,
    "送你一程": 1,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "trepas_angel-莫温刻": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "立本": 2,
    "拉娜": 2,
    "风与自由": 2,
    "最好的伙伴！": 1,
    "一掷乾坤": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "白垩之术": 2,
    "送你一程": 2,
    "温妮莎传奇": 2,
    "仙跳墙": 2,
    "莲花酥": 1,
    "蒙德土豆饼": 2,
    "唐杜尔烤鸭": 1,
  }),
  "trepas_angel-水债皇": defineActions({
    "悉数讨回": 1,
    "幸运儿银冠": 2,
    "璃月港口": 2,
    "桓纳兰那": 1,
    "派蒙": 2,
    "立本": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "白垩之术": 1,
    "送你一程": 2,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
    "烤蘑菇披萨": 1,
  }),
  "trepas_angel-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "提米": 2,
    "立本": 2,
    "寻宝仙灵": 1,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "送你一程": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
};

export default defineTournament({
  name: "寒天之钉杯",
  tag: "全民积分赛",
  gameVersion: "3.7",
  image: "https://webstatic.mihoyo.com/upload/op-public/2023/05/23/e960a0b3bca0a59b91f864c816b7a336_8583411093250351866.jpg",
  stages: [
    {
      name: "16进8淘汰赛",
      parts: [
        {
          name: "DAY1",
          date: "2023-06-24",
          matches: [
            {
              playerA: "StarMeaning",
              playerB: "溺浸の叹王",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1Xg4y1P7Uu",
              games: [
                {
                  playerACharacters: [RaidenShogun, Shenhe, Chongyun],
                  playerAActions: actions["StarMeaning-双冰"],
                  playerBCharacters: [Keqing, Bennett, Klee],
                  playerBActions: actions["溺浸の叹王-火刻"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [RaidenShogun, Shenhe, Chongyun],
                  playerAActions: actions["StarMeaning-双冰"],
                  playerBCharacters: [RaidenShogun, Shenhe, Chongyun],
                  playerBActions: actions["溺浸の叹王-双冰"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Nahida, Mona],
                  playerAActions: actions["StarMeaning-莫皇草"],
                  playerBCharacters: [RaidenShogun, Shenhe, Chongyun],
                  playerBActions: actions["溺浸の叹王-双冰"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Amber, AratakiItto, Noelle],
                  playerAActions: actions["StarMeaning-双岩"],
                  playerBCharacters: [RaidenShogun, Shenhe, Chongyun],
                  playerBActions: actions["溺浸の叹王-双冰"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "RR夜莺",
              playerB: "岩van♂deep君",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1kz4y1H7yX",
              games: [
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerAActions: actions["RR夜莺-莫皇草"],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  playerBActions: actions["岩van♂deep君-水债皇"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [YaeMiko, Zhongli, Ningguang],
                  playerAActions: actions["RR夜莺-钟凝"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["岩van♂deep君-双冰"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [RaidenShogun, Shenhe, Chongyun],
                  playerAActions: actions["RR夜莺-双冰"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["岩van♂deep君-双冰"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerAActions: actions["RR夜莺-莫皇草"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["岩van♂deep君-双冰"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "清风离",
              playerB: "安柏",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1qV411u7Xp",
              games: [
                {
                  playerACharacters: [YaeMiko, Tighnari, Collei],
                  playerAActions: actions["清风离-激化"],
                  playerBCharacters: [Bennett, Klee, Keqing],
                  playerBActions: actions["安柏-火刻"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Bennett, Klee, Keqing],
                  playerAActions: actions["清风离-火刻"],
                  playerBCharacters: [Noelle, Amber, AratakiItto],
                  playerBActions: actions["安柏-双岩"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [YaeMiko, Tighnari, Collei],
                  playerAActions: actions["清风离-激化"],
                  playerBCharacters: [Chongyun, Bennett, Shenhe],
                  playerBActions: actions["安柏-火双冰"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Bennett, Klee, Keqing],
                  playerAActions: actions["清风离-火刻"],
                  playerBCharacters: [Chongyun, Bennett, Shenhe],
                  playerBActions: actions["安柏-火双冰"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Xingqiu, Beidou, HuTao],
                  playerAActions: actions["清风离-胡桃"],
                  playerBCharacters: [Chongyun, Bennett, Shenhe],
                  playerBActions: actions["安柏-火双冰"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "摆烂喵",
              playerB: "xhx",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1eh4y1g73J",
              games: [
                {
                  playerACharacters: [Bennett, Klee, Keqing],
                  playerAActions: actions["摆烂喵-火刻"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["xhx-双冰"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["摆烂喵-双冰"],
                  playerBCharacters: [Barbara, AratakiItto, Noelle],
                  playerBActions: actions["xhx-双岩"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Bennett, Klee, Keqing],
                  playerAActions: actions["摆烂喵-火刻"],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, HuTao],
                  playerBActions: actions["xhx-水皇胡"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, Bennett, Shenhe],
                  playerAActions: actions["摆烂喵-火云鹤"],
                  playerBCharacters: [Barbara, AratakiItto, Noelle],
                  playerBActions: actions["xhx-双岩"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, Bennett, Shenhe],
                  playerAActions: actions["摆烂喵-火云鹤"],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, HuTao],
                  playerBActions: actions["xhx-水皇胡"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
          ],
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
          matches: [
            {
              playerA: "清风离",
              playerB: "曲误周郎",
              winner: "B",
              video: "https://www.bilibili.com/video/BV14j411S77K",
              games: [
                {
                  playerACharacters: [Bennett, Klee, Keqing],
                  playerAActions: actions["清风离-火刻"],
                  playerBCharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerBActions: actions["曲误周郎-水皇草"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Bennett, Klee, Keqing],
                  playerAActions: actions["清风离-火刻"],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  playerBActions: actions["曲误周郎-水债皇"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Bennett, Klee, Keqing],
                  playerAActions: actions["清风离-火刻"],
                  playerBCharacters: [Noelle, Barbara, AratakiItto],
                  playerBActions: actions["曲误周郎-双岩"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "RR夜莺",
              playerB: "零之启",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1Vh4y1M7YP",
              games: [
                {
                  playerACharacters: [YaeMiko, Zhongli, Ningguang],
                  playerAActions: actions["RR夜莺-钟凝"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["零之启-双冰"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [RaidenShogun, Shenhe, Chongyun],
                  playerAActions: actions["RR夜莺-双冰"],
                  playerBCharacters: [Keqing, Mona, Venti],
                  playerBActions: actions["零之启-莫温刻"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [YaeMiko, Zhongli, Ningguang],
                  playerAActions: actions["RR夜莺-钟凝"],
                  playerBCharacters: [Keqing, Mona, Venti],
                  playerBActions: actions["零之启-莫温刻"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["RR夜莺-水皇草"],
                  playerBCharacters: [Keqing, Mona, Venti],
                  playerBActions: actions["零之启-莫温刻"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["RR夜莺-水皇草"],
                  playerBCharacters: [Barbara, AratakiItto, Noelle],
                  playerBActions: actions["零之启-双岩"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-06-28",
          matches: [
            {
              playerA: "StarMeaning",
              playerB: "柚恩柚恩了",
              winner: "B",
              video: "",
              games: [
                {
                  playerACharacters: [RaidenShogun, Shenhe, Chongyun],
                  playerAActions: actions["StarMeaning-双冰"],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBActions: actions["柚恩柚恩了-水债皇"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Fischl, Nahida, Mona],
                  playerAActions: actions["StarMeaning-莫皇草"],
                  playerBCharacters: [YaeMiko, Tighnari, Collei],
                  playerBActions: actions["柚恩柚恩了-激化"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [RaidenShogun, Shenhe, Chongyun],
                  playerAActions: actions["StarMeaning-双冰"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["柚恩柚恩了-双冰"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "trepas_angel",
              playerB: "xhx",
              winner: "B",
              video: "",
              games: [
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["trepas_angel-双冰"],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerBActions: actions["xhx-水皇草"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["trepas_angel-双冰"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["xhx-双冰"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Fischl, RhodeiaOfLoch, FatuiPyroAgent],
                  playerAActions: actions["trepas_angel-水债皇"],
                  playerBCharacters: [Barbara, AratakiItto, Noelle],
                  playerBActions: actions["xhx-双岩"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Mona, Venti, Keqing],
                  playerAActions: actions["trepas_angel-莫温刻"],
                  playerBCharacters: [Barbara, AratakiItto, Noelle],
                  playerBActions: actions["xhx-双岩"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
          ],
        },
      ],
    },
    // {
    //   name: "半决赛",
    //   parts: [
    //     {
    //       name: "",
    //       date: "2023-06-30",
    //       matches: [
    //         {
    //           playerA: "零之启",
    //           playerB: "曲误周郎",
    //           winner: "B",
    //           video: "https://www.bilibili.com/video/BV1vN411U7yM",
    //           games: [],
    //         },
    //         {
    //           playerA: "xhx",
    //           playerB: "柚恩柚恩了",
    //           winner: "A",
    //           video: "https://www.bilibili.com/video/BV1Jm4y1Y7zp",
    //           games: [],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "决赛",
    //   parts: [
    //     {
    //       name: "",
    //       date: "2023-07-02",
    //       matches: [],
    //     },
    //   ],
    // },
  ],
});
