// cSpell:disable

import { getImageUrl } from "./shared";
import { AbyssLectorFathomlessFlames, type ActionCard, Albedo, Amber, AratakiItto, Barbara, Beidou, Bennett, Candace, type CharacterCard, Chongyun, Collei, Cyno, Dehya, Diluc, Diona, ElectroHypostasis, Eula, FatuiCyroCicinMage, FatuiMirrorMaiden, FatuiPyroAgent, Fischl, Ganyu, HuTao, JadeplumeTerrorshroom, Jean, KaedeharaKazuha, Kaeya, KamisatoAyaka, KamisatoAyato, Keqing, Klee, KujouSara, Lisa, MaguuKenki, Mona, Nahida, Ningguang, Noelle, Qiqi, RaidenShogun, Razor, RhodeiaOfLoch, SangonomiyaKokomi, Shenhe, StonehideLawachurl, Sucrose, Tartaglia, Tighnari, Venti, Wanderer, Xiangling, Xiao, Xingqiu, YaeMiko, Yanfei, Yaoyao, Yoimiya, Zhongli } from "~/utils/types";

const characterCardFilenames: Record<CharacterCard, string> = {
  [Ganyu]: "Ganyu Character Card.png",
  [Diona]: "Diona Character Card.png",
  [Kaeya]: "Kaeya Character Card.png",
  [Chongyun]: "Chongyun Character Card.png",
  [KamisatoAyaka]: "Kamisato Ayaka Character Card.png",
  [Eula]: "Eula Character Card.png",
  [Shenhe]: "Shenhe Character Card.png",
  [Qiqi]: "Qiqi Character Card.png",
  [Barbara]: "Barbara Character Card.png",
  [Xingqiu]: "Xingqiu Character Card.png",
  [Mona]: "Mona Character Card.png",
  [Tartaglia]: "Tartaglia Character Card.png",
  [SangonomiyaKokomi]: "Sangonomiya Kokomi Character Card.png",
  [KamisatoAyato]: "Kamisato Ayato Character Card.png",
  [Candace]: "Candace Character Card.png",
  [Diluc]: "Diluc Character Card.png",
  [Xiangling]: "Xiangling Character Card.png",
  [Bennett]: "Bennett Character Card.png",
  [Amber]: "Amber Character Card.png",
  [Yoimiya]: "Yoimiya Character Card.png",
  [Klee]: "Klee Character Card.png",
  [HuTao]: "Hu Tao Character Card.png",
  [Yanfei]: "Yanfei Character Card.png",
  [Dehya]: "Dehya Character Card.png",
  [Fischl]: "Fischl Character Card.png",
  [Razor]: "Razor Character Card.png",
  [Keqing]: "Keqing Character Card.png",
  [Cyno]: "Cyno Character Card.png",
  [Beidou]: "Beidou Character Card.png",
  [KujouSara]: "Kujou Sara Character Card.png",
  [RaidenShogun]: "Raiden Shogun Character Card.png",
  [YaeMiko]: "Yae Miko Character Card.png",
  [Lisa]: "Lisa Character Card.png",
  [Sucrose]: "Sucrose Character Card.png",
  [Jean]: "Jean Character Card.png",
  [Venti]: "Venti Character Card.png",
  [Xiao]: "Xiao Character Card.png",
  [KaedeharaKazuha]: "Kaedehara Kazuha Character Card.png",
  [Wanderer]: "Wanderer Character Card.png",
  [Ningguang]: "Ningguang Character Card.png",
  [Noelle]: "Noelle Character Card.png",
  [Zhongli]: "Zhongli Character Card.png",
  [Albedo]: "Albedo Character Card.png",
  [AratakiItto]: "Arataki Itto Character Card.png",
  [Collei]: "Collei Character Card.png",
  [Tighnari]: "Tighnari Character Card.png",
  [Nahida]: "Nahida Character Card.png",
  [Yaoyao]: "Yaoyao Character Card.png",
  [FatuiCyroCicinMage]: "Fatui Cryo Cicin Mage Character Card.png",
  [RhodeiaOfLoch]: "Rhodeia of Loch Character Card.png",
  [FatuiMirrorMaiden]: "Mirror Maiden Character Card.png",
  [FatuiPyroAgent]: "Fatui Pyro Agent Character Card.png",
  [AbyssLectorFathomlessFlames]: "Abyss Lector Fathomless Flames Character Card.png",
  [ElectroHypostasis]: "Electro Hypostasis Character Card.png",
  [MaguuKenki]: "Maguu Kenki Character Card.png",
  [StonehideLawachurl]: "Stonehide Lawachurl Character Card.png",
  [JadeplumeTerrorshroom]: "Jadeplume Terrorshroom Character Card.png",
};

const actionCardFilenames: Record<ActionCard, string> = {
  "唯此一心": "Undivided Heart Equipment Card.png",
  "猫爪冰摇": "Shaken, Not Purred Equipment Card.png",
  "冷血之剑": "Cold-Blooded Strike Equipment Card.png",
  "吐纳真定": "Steady Breathing Equipment Card.png",
  "寒天宣命祝词": "Kanten Senmyou Blessing Equipment Card.png",
  "战欲涌现": "Wellspring of War-Lust Equipment Card.png",
  "忘玄": "Mystical Abandon Equipment Card.png",
  "起死回骸": "Rite of Resurrection Equipment Card.png",

  "光辉的季节": "Glorious Season Equipment Card.png",
  "重帘留香": "The Scent Remained Equipment Card.png",
  "沉没的预言": "Prophecy of Submersion Equipment Card.png",
  "深渊之灾·凝水盛放": "Abyssal Mayhem Hydrospout Equipment Card.png",
  "匣中玉栉": "Tamakushi Casket Equipment Card.png",
  "镜华风姿": "Kyouka Fuushi Equipment Card.png",
  "衍溢的汐潮": "The Overflow Equipment Card.png",

  "流火焦灼": "Flowing Flame Equipment Card.png",
  "交叉火力": "Crossfire Equipment Card.png",
  "冒险憧憬": "Grand Expectation Equipment Card.png",
  "一触即发": "Bunny Triggered Equipment Card.png",
  "长野原龙势流星群": "Naganohara Meteor Swarm Equipment Card.png",
  "砰砰礼物": "Pounding Surprise Equipment Card.png",
  "血之灶火": "Sanguine Rouge Equipment Card.png",
  "最终解释权": "Right of Final Interpretation Equipment Card.png",
  "崇诚之真": "Stalwart and True Equipment Card.png",

  "噬星魔鸦": "Stellar Predator Equipment Card.png",
  "觉醒": "Awakening Equipment Card.png",
  "抵天雷罚": "Thundering Penance Equipment Card.png",
  "落羽的裁泽": "Featherfall Judgment Equipment Card.png",
  "霹雳连霄": "Lightning Storm Equipment Card.png",
  "我界": "Sin of Pride Equipment Card.png",
  "万千的愿望": "Wishes Unnumbered Equipment Card.png",
  "神篱之御荫": "The Shrine's Sacred Shade Equipment Card.png",
  "脉冲的魔女": "Pulsating Witch Equipment Card.png",

  "混元熵增论": "Chaotic Entropy Equipment Card.png",
  "蒲公英的国土": "Lands of Dandelion Equipment Card.png",
  "绪风之拥": "Embrace of Winds Equipment Card.png",
  "降魔·护法夜叉": "Conqueror of Evil Guardian Yaksha Equipment Card.png",
  "风物之诗咏": "Poetics of Fuubutsu Equipment Card.png",
  "梦迹一风": "Gales of Reverie Equipment Card.png",

  "储之千日，用之一刻": "Strategic Reserve Equipment Card.png",
  "支援就交给我吧": "I Got Your Back Equipment Card.png",
  "炊金馔玉": "Dominance of Earth Equipment Card.png",
  "神性之陨": "Descent of Divinity Equipment Card.png",
  "荒泷第一": "Arataki Ichiban Equipment Card.png",

  "飞叶迴斜": "Floral Sidewinder Equipment Card.png",
  "眼识殊明": "Keen Sight Equipment Card.png",
  "心识蕴藏之种": "The Seed of Stored Knowledge Equipment Card.png",
  "慈惠仁心": "Beneficent Equipment Card.png",

  "冰萤寒光": "Cicin's Cold Glare Equipment Card.png",
  "百川奔流": "Streaming Surge Equipment Card.png",
  "镜锢之笼": "Mirror Cage Equipment Card.png",
  "悉数讨回": "Paid in Full Equipment Card.png",
  "烬火重燃": "Embers Rekindled Equipment Card.png",
  "汲能棱晶": "Absorbing Prism Event Card.png",
  "机巧神通": "Transcendent Automaton Equipment Card.png",
  "重铸：岩盔": "Stonehide Reforged Equipment Card.png",
  "孢子增殖": "Proliferating Spores Equipment Card.png",

  "魔导绪论": "Magic Guide Equipment Card.png",
  "祭礼残章": "Sacrificial Fragments Equipment Card.png",
  "天空之卷": "Skyward Atlas Equipment Card.png",
  "千夜浮梦": "A Thousand Floating Dreams Equipment Card.png",
  "盈满之实": "Fruit of Fulfillment Equipment Card.png",

  "鸦羽弓": "Raven Bow Equipment Card.png",
  "祭礼弓": "Sacrificial Bow Equipment Card.png",
  "天空之翼": "Skyward Harp Equipment Card.png",
  "阿莫斯之弓": "Amos' Bow Equipment Card.png",
  "终末嗟叹之诗": "Elegy for the End Equipment Card.png",
  "王下近侍": "King's Squire Equipment Card.png",

  "白铁大剑": "White Iron Greatsword Equipment Card.png",
  "祭礼大剑": "Sacrificial Greatsword Equipment Card.png",
  "狼的末路": "Wolf's Gravestone Equipment Card.png",
  "天空之傲": "Skyward Pride Equipment Card.png",
  "钟剑": "The Bell Equipment Card.png",

  "白缨枪": "White Tassel Equipment Card.png",
  "千岩长枪": "Lithic Spear Equipment Card.png",
  "天空之脊": "Skyward Spine Equipment Card.png",
  "贯虹之槊": "Vortex Vanquisher Equipment Card.png",
  "薙草之稻光": "Engulfing Lightning Equipment Card.png",
  "贯月矢": "Moonpiercer Equipment Card.png",

  "旅行剑": "Traveler's Handy Sword Equipment Card.png",
  "祭礼剑": "Sacrificial Sword Equipment Card.png",
  "风鹰剑": "Aquila Favonia Equipment Card.png",
  "天空之刃": "Skyward Blade Equipment Card.png",
  "西风剑": "Favonius Sword Equipment Card.png",

  "冒险家头带": "Adventurer's Bandana Equipment Card.png",
  "幸运儿银冠": "Lucky Dog's Silver Circlet Equipment Card.png",
  "游医的方巾": "Traveling Doctor's Handkerchief Equipment Card.png",
  "赌徒的耳环": "Gambler's Earrings Equipment Card.png",
  "教官的帽子": "Instructor's Cap Equipment Card.png",
  "流放者头冠": "Exile's Circlet Equipment Card.png",
  "华饰之兜": "Ornate Kabuto Equipment Card.png",
  "绝缘之旗印": "Emblem of Severed Fate Equipment Card.png",
  "将帅兜鍪": "General's Ancient Helm Equipment Card.png",
  "千岩牢固": "Tenacity of the Millelith Equipment Card.png",
  "虺雷之姿": "Thundering Poise Equipment Card.png",
  "辰砂往生录": "Vermillion Hereafter Equipment Card.png",
  "无常之面": "Capricious Visage Equipment Card.png",
  "追忆之注连": "Shimenawa's Reminiscence Equipment Card.png",
  "海祇之冠": "Crown of Watasumi Equipment Card.png",
  "踏破冰雪的回音": "Broken Rime's Echo Equipment Card.png",
  "冰风迷途的勇士": "Blizzard Strayer Equipment Card.png",
  "酒渍船帽": "Wine-Stained Tricorne Equipment Card.png",
  "沉沦之心": "Heart of Depth Equipment Card.png",
  "焦灼的魔女帽": "Witch's Scorching Hat Equipment Card.png",
  "炽烈的炎之魔女": "Crimson Witch of Flames Equipment Card.png",
  "唤雷的头冠": "Thunder Summoner's Crown Equipment Card.png",
  "如雷的盛怒": "Thundering Fury Equipment Card.png",
  "翠绿的猎人之冠": "Viridescent Venerer's Diadem Equipment Card.png",
  "翠绿之影": "Viridescent Venerer Equipment Card.png",
  "不动玄石之相": "Mask of Solitude Basalt Equipment Card.png",
  "悠古的磐岩": "Archaic Petra Equipment Card.png",
  "月桂的宝冠": "Laurel Coronet Equipment Card.png",
  "深林的记忆": "Deepwood Memories Equipment Card.png",

  "璃月港口": "Liyue Harbor Wharf Support Card.png",
  "骑士团图书馆": "Knights of Favonius Library Support Card.png",
  "群玉阁": "Jade Chamber Support Card.png",
  "晨曦酒庄": "Dawn Winery Support Card.png",
  "望舒客栈": "Wangshu Inn Support Card.png",
  "西风大教堂": "Favonius Cathedral Support Card.png",
  "天守阁": "Tenshukaku Support Card.png",
  "鸣神大社": "Grand Narukami Shrine Support Card.png",
  "珊瑚宫": "Sangonomiya Shrine Support Card.png",
  "须弥城": "Sumeru City Support Card.png",
  "桓纳兰那": "Vanarana Support Card.png",
  "镇守之森": "Chinju Forest Support Card.png",
  "黄金屋": "Golden House Support Card.png",
  "化成郭": "Gandharva Ville Support Card.png",

  "派蒙": "Paimon Support Card.png",
  "凯瑟琳": "Katheryne Support Card.png",
  "蒂玛乌斯": "Timaeus Support Card.png",
  "瓦格纳": "Wagner Support Card.png",
  "卯师傅": "Chef Mao Support Card.png",
  "阿圆": "Tubby Support Card.png",
  "提米": "Timmie Support Card.png",
  "立本": "Liben Support Card.png",
  "常九爷": "Chang the Ninth Support Card.png",
  "艾琳": "Ellin Support Card.png",
  "田铁嘴": "Iron Tongue Tian Support Card.png",
  "刘苏": "Liu Su Support Card.png",
  "花散里": "Hanachirusato Support Card.png",
  "鲸井小弟": "Kid Kujirai Support Card.png",
  "旭东": "Xudong Support Card.png",
  "迪娜泽黛": "Dunyarzad Support Card.png",
  "拉娜": "Rana Support Card.png",
  "老章": "Master Zhang Support Card.png",
  "塞塔蕾": "Setaria Support Card.png",
  "弥生七月": "Yayoi Nanatsuki Support Card.png",

  "参量质变仪": "Parametric Transformer Support Card.png",
  "便携营养袋": "NRE Support Card.png",
  "红羽团扇": "Red Feather Fan Support Card.png",
  "寻宝仙灵": "Treasure-Seeking Seelie Support Card.png",

  "旧时庭园": "Ancient Courtyard Event Card.png",
  "磐岩盟契": "Covenant of Rock Event Card.png",
  "愉舞欢游": "Joyous Celebration Event Card.png",
  "自由的新风": "Fresh Wind of Freedom Event Card.png",

  "元素共鸣：交织之冰": "Elemental Resonance Woven Ice Event Card.png",
  "元素共鸣：粉碎之冰": "Elemental Resonance Shattering Ice Event Card.png",
  "元素共鸣：交织之水": "Elemental Resonance Woven Waters Event Card.png",
  "元素共鸣：疗愈之水": "Elemental Resonance Soothing Water Event Card.png",
  "元素共鸣：交织之火": "Elemental Resonance Woven Flames Event Card.png",
  "元素共鸣：热诚之火": "Elemental Resonance Fervent Flames Event Card.png",
  "元素共鸣：交织之雷": "Elemental Resonance Woven Thunder Event Card.png",
  "元素共鸣：强能之雷": "Elemental Resonance High Voltage Event Card.png",
  "元素共鸣：交织之风": "Elemental Resonance Woven Winds Event Card.png",
  "元素共鸣：迅捷之风": "Elemental Resonance Impetuous Winds Event Card.png",
  "元素共鸣：交织之岩": "Elemental Resonance Woven Stone Event Card.png",
  "元素共鸣：坚定之岩": "Elemental Resonance Enduring Rock Event Card.png",
  "元素共鸣：交织之草": "Elemental Resonance Woven Weeds Event Card.png",
  "元素共鸣：蔓生之草": "Elemental Resonance Sprawling Greenery Event Card.png",
  "风与自由": "Wind and Freedom Event Card.png",
  "岩与契约": "Stone and Contracts Event Card.png",
  "雷与永恒": "Thunder and Eternity Event Card.png",
  "草与智慧": "Nature and Wisdom Event Card.png",
  "最好的伙伴！": "The Bestest Travel Companion! Event Card.png",
  "换班时间": "Changing Shifts Event Card.png",
  "一掷乾坤": "Toss-Up Event Card.png",
  "运筹帷幄": "Strategize Event Card.png",
  "本大爷还没有输！": "I Haven't Lost Yet! Event Card.png",
  "交给我吧！": "Leave It to Me! Event Card.png",
  "鹤归之时": "When the Crane Returned Event Card.png",
  "星天之兆": "Starsigns Event Card.png",
  "白垩之术": "Calx's Arts Event Card.png",
  "诸武精通": "Master of Weaponry Event Card.png",
  "神宝迁宫祝词": "Blessing of the Divine Relic's Installation Event Card.png",
  "快快缝补术": "Quick Knit Event Card.png",
  "送你一程": "Send Off Event Card.png",
  "护法之誓": "Guardian's Oath Event Card.png",
  "深渊的呼唤": "Abyssal Summons Event Card.png",
  "愚人众的阴谋": "Fatui Conspiracy Event Card.png",
  "下落斩": "Plunging Strike Event Card.png",
  "重攻击": "Heavy Strike Event Card.png",
  "温妮莎传奇": "The Legend of Vennessa Event Card.png",
  "永远的友谊": "Friendship Eternal Event Card.png",
  "大梦的曲调": "Rhythm of the Great Dream Event Card.png",
  "藏锋何处": "Where Is the Unseen Razor Event Card.png",
  "拳力斗技！": "Pankration Event Card.png",

  "绝云锅巴": "Jueyun Guoba Event Card.png",
  "仙跳墙": "Adeptus' Temptation Event Card.png",
  "莲花酥": "Lotus Flower Crisp Event Card.png",
  "北地烟熏鸡": "Northern Smoked Chicken Event Card.png",
  "甜甜花酿鸡": "Sweet Madame Event Card.png",
  "蒙德土豆饼": "Mondstadt Hash Brown Event Card.png",
  "烤蘑菇披萨": "Mushroom Pizza Event Card.png",
  "兽肉薄荷卷": "Minty Meat Rolls Event Card.png",
  "提瓦特煎蛋": "Teyvat Fried Egg Event Card.png",
  "刺身拼盘": "Sashimi Platter Event Card.png",
  "唐杜尔烤鸡": "Tandoori Roast Chicken Event Card.png",
  "黄油蟹蟹": "Butter Crab Event Card.png",
};

export const cardImages = Object.fromEntries(
  [
    ...Object.entries(characterCardFilenames)
      .map(([card, filename]) => [card, getImageUrl(filename)]),
    ...Object.entries(actionCardFilenames)
      .map(([card, filename]) => [card, getImageUrl(filename)]),
  ],
) as Record<CharacterCard | ActionCard, string>;
