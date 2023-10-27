interface ActionCardInfo {
  readonly name: string;
  readonly nameEn: string;
  readonly type: "Equipment" | "Support" | "Event";
  readonly type2:
  | "Talent" | "Weapon" | "Artifact"
  | "Area" | "Friend" | "Item"
  | "Legend" | "Element" | "Faction"
  | "Other" | "Food";
}

function defineActionCardInfo(info: ActionCardInfo) {
  return info;
}

// cSpell:disable
export const ALL_ACTION_CARDS_INFO = {
  // 天赋
  "唯此一心": defineActionCardInfo({ name: "唯此一心", nameEn: "Undivided Heart", type: "Equipment", type2: "Talent" }),
  "猫爪冰摇": defineActionCardInfo({ name: "猫爪冰摇", nameEn: "Shaken, Not Purred", type: "Equipment", type2: "Talent" }),
  "冷血之剑": defineActionCardInfo({ name: "冷血之剑", nameEn: "Cold-Blooded Strike", type: "Equipment", type2: "Talent" }),
  "吐纳真定": defineActionCardInfo({ name: "吐纳真定", nameEn: "Steady Breathing", type: "Equipment", type2: "Talent" }),
  "寒天宣命祝词": defineActionCardInfo({ name: "寒天宣命祝词", nameEn: "Kanten Senmyou Blessing", type: "Equipment", type2: "Talent" }),
  "战欲涌现": defineActionCardInfo({ name: "战欲涌现", nameEn: "Wellspring of War-Lust", type: "Equipment", type2: "Talent" }),
  "忘玄": defineActionCardInfo({ name: "忘玄", nameEn: "Mystical Abandon", type: "Equipment", type2: "Talent" }),
  "起死回骸": defineActionCardInfo({ name: "起死回骸", nameEn: "Rite of Resurrection", type: "Equipment", type2: "Talent" }),

  "光辉的季节": defineActionCardInfo({ name: "光辉的季节", nameEn: "Glorious Season", type: "Equipment", type2: "Talent" }),
  "重帘留香": defineActionCardInfo({ name: "重帘留香", nameEn: "The Scent Remained", type: "Equipment", type2: "Talent" }),
  "沉没的预言": defineActionCardInfo({ name: "沉没的预言", nameEn: "Prophecy of Submersion", type: "Equipment", type2: "Talent" }),
  "深渊之灾·凝水盛放": defineActionCardInfo({ name: "深渊之灾·凝水盛放", nameEn: "Abyssal Mayhem Hydrospout", type: "Equipment", type2: "Talent" }),
  "匣中玉栉": defineActionCardInfo({ name: "匣中玉栉", nameEn: "Tamakushi Casket", type: "Equipment", type2: "Talent" }),
  "镜华风姿": defineActionCardInfo({ name: "镜华风姿", nameEn: "Kyouka Fuushi", type: "Equipment", type2: "Talent" }),
  "衍溢的汐潮": defineActionCardInfo({ name: "衍溢的汐潮", nameEn: "The Overflow", type: "Equipment", type2: "Talent" }),
  "星天的花雨": defineActionCardInfo({ name: "星天的花雨", nameEn: "Tje Starry Skies Their Flowers Rain", type: "Equipment", type2: "Talent" }),

  "流火焦灼": defineActionCardInfo({ name: "流火焦灼", nameEn: "Flowing Flame", type: "Equipment", type2: "Talent" }),
  "交叉火力": defineActionCardInfo({ name: "交叉火力", nameEn: "Crossfire", type: "Equipment", type2: "Talent" }),
  "冒险憧憬": defineActionCardInfo({ name: "冒险憧憬", nameEn: "Grand Expectation", type: "Equipment", type2: "Talent" }),
  "一触即发": defineActionCardInfo({ name: "一触即发", nameEn: "Bunny Triggered", type: "Equipment", type2: "Talent" }),
  "长野原龙势流星群": defineActionCardInfo({ name: "长野原龙势流星群", nameEn: "Naganohara Meteor Swarm", type: "Equipment", type2: "Talent" }),
  "砰砰礼物": defineActionCardInfo({ name: "砰砰礼物", nameEn: "Pounding Surprise", type: "Equipment", type2: "Talent" }),
  "血之灶火": defineActionCardInfo({ name: "血之灶火", nameEn: "Sanguine Rouge", type: "Equipment", type2: "Talent" }),
  "最终解释权": defineActionCardInfo({ name: "最终解释权", nameEn: "Right of Final Interpretation", type: "Equipment", type2: "Talent" }),
  "崇诚之真": defineActionCardInfo({ name: "崇诚之真", nameEn: "Stalwart and True", type: "Equipment", type2: "Talent" }),

  "噬星魔鸦": defineActionCardInfo({ name: "噬星魔鸦", nameEn: "Stellar Predator", type: "Equipment", type2: "Talent" }),
  "觉醒": defineActionCardInfo({ name: "觉醒", nameEn: "Awakening", type: "Equipment", type2: "Talent" }),
  "抵天雷罚": defineActionCardInfo({ name: "抵天雷罚", nameEn: "Thundering Penance", type: "Equipment", type2: "Talent" }),
  "落羽的裁泽": defineActionCardInfo({ name: "落羽的裁泽", nameEn: "Featherfall Judgment", type: "Equipment", type2: "Talent" }),
  "霹雳连霄": defineActionCardInfo({ name: "霹雳连霄", nameEn: "Lightning Storm", type: "Equipment", type2: "Talent" }),
  "我界": defineActionCardInfo({ name: "我界", nameEn: "Sin of Pride", type: "Equipment", type2: "Talent" }),
  "万千的愿望": defineActionCardInfo({ name: "万千的愿望", nameEn: "Wishes Unnumbered", type: "Equipment", type2: "Talent" }),
  "神篱之御荫": defineActionCardInfo({ name: "神篱之御荫", nameEn: "The Shrine's Sacred Shade", type: "Equipment", type2: "Talent" }),
  "脉冲的魔女": defineActionCardInfo({ name: "脉冲的魔女", nameEn: "Pulsating Witch", type: "Equipment", type2: "Talent" }),
  "酌盈剂虚": defineActionCardInfo({ name: "酌盈剂虚", nameEn: "Discretionary Supplement", type: "Equipment", type2: "Talent" }),

  "混元熵增论": defineActionCardInfo({ name: "混元熵增论", nameEn: "Chaotic Entropy", type: "Equipment", type2: "Talent" }),
  "蒲公英的国土": defineActionCardInfo({ name: "蒲公英的国土", nameEn: "Lands of Dandelion", type: "Equipment", type2: "Talent" }),
  "绪风之拥": defineActionCardInfo({ name: "绪风之拥", nameEn: "Embrace of Winds", type: "Equipment", type2: "Talent" }),
  "降魔·护法夜叉": defineActionCardInfo({ name: "降魔·护法夜叉", nameEn: "Conqueror of Evil Guardian Yaksha", type: "Equipment", type2: "Talent" }),
  "风物之诗咏": defineActionCardInfo({ name: "风物之诗咏", nameEn: "Poetics of Fuubutsu", type: "Equipment", type2: "Talent" }),
  "梦迹一风": defineActionCardInfo({ name: "梦迹一风", nameEn: "Gales of Reverie", type: "Equipment", type2: "Talent" }),

  "储之千日，用之一刻": defineActionCardInfo({ name: "储之千日，用之一刻", nameEn: "Strategic Reserve", type: "Equipment", type2: "Talent" }),
  "支援就交给我吧": defineActionCardInfo({ name: "支援就交给我吧", nameEn: "I Got Your Back", type: "Equipment", type2: "Talent" }),
  "炊金馔玉": defineActionCardInfo({ name: "炊金馔玉", nameEn: "Dominance of Earth", type: "Equipment", type2: "Talent" }),
  "神性之陨": defineActionCardInfo({ name: "神性之陨", nameEn: "Descent of Divinity", type: "Equipment", type2: "Talent" }),
  "荒泷第一": defineActionCardInfo({ name: "荒泷第一", nameEn: "Arataki Ichiban", type: "Equipment", type2: "Talent" }),

  "飞叶迴斜": defineActionCardInfo({ name: "飞叶迴斜", nameEn: "Floral Sidewinder", type: "Equipment", type2: "Talent" }),
  "眼识殊明": defineActionCardInfo({ name: "眼识殊明", nameEn: "Keen Sight", type: "Equipment", type2: "Talent" }),
  "心识蕴藏之种": defineActionCardInfo({ name: "心识蕴藏之种", nameEn: "The Seed of Stored Knowledge", type: "Equipment", type2: "Talent" }),
  "慈惠仁心": defineActionCardInfo({ name: "慈惠仁心", nameEn: "Beneficent", type: "Equipment", type2: "Talent" }),
  "在地为化": defineActionCardInfo({ name: "在地为化", nameEn: "All Things Are of the Earth", type: "Equipment", type2: "Talent" }),

  "冰萤寒光": defineActionCardInfo({ name: "冰萤寒光", nameEn: "Cicin's Cold Glare", type: "Equipment", type2: "Talent" }),
  "百川奔流": defineActionCardInfo({ name: "百川奔流", nameEn: "Streaming Surge", type: "Equipment", type2: "Talent" }),
  "镜锢之笼": defineActionCardInfo({ name: "镜锢之笼", nameEn: "Mirror Cage", type: "Equipment", type2: "Talent" }),
  "悉数讨回": defineActionCardInfo({ name: "悉数讨回", nameEn: "Paid in Full", type: "Equipment", type2: "Talent" }),
  "烬火重燃": defineActionCardInfo({ name: "烬火重燃", nameEn: "Embers Rekindled", type: "Equipment", type2: "Talent" }),
  "汲能棱晶": defineActionCardInfo({ name: "汲能棱晶", nameEn: "Absorbing Prism", type: "Event", type2: "Talent" }),
  "机巧神通": defineActionCardInfo({ name: "机巧神通", nameEn: "Transcendent Automaton", type: "Equipment", type2: "Talent" }),
  "重铸：岩盔": defineActionCardInfo({ name: "重铸：岩盔", nameEn: "Stonehide Reforged", type: "Equipment", type2: "Talent" }),
  "孢子增殖": defineActionCardInfo({ name: "孢子增殖", nameEn: "Proliferating Spores", type: "Equipment", type2: "Talent" }),

  // 武器
  "魔导绪论": defineActionCardInfo({ name: "魔导绪论", nameEn: "Magic Guide", type: "Equipment", type2: "Weapon" }),
  "祭礼残章": defineActionCardInfo({ name: "祭礼残章", nameEn: "Sacrificial Fragments", type: "Equipment", type2: "Weapon" }),
  "天空之卷": defineActionCardInfo({ name: "天空之卷", nameEn: "Skyward Atlas", type: "Equipment", type2: "Weapon" }),
  "千夜浮梦": defineActionCardInfo({ name: "千夜浮梦", nameEn: "A Thousand Floating Dreams", type: "Equipment", type2: "Weapon" }),
  "盈满之实": defineActionCardInfo({ name: "盈满之实", nameEn: "Fruit of Fulfillment", type: "Equipment", type2: "Weapon" }),

  "鸦羽弓": defineActionCardInfo({ name: "鸦羽弓", nameEn: "Raven Bow", type: "Equipment", type2: "Weapon" }),
  "祭礼弓": defineActionCardInfo({ name: "祭礼弓", nameEn: "Sacrificial Bow", type: "Equipment", type2: "Weapon" }),
  "天空之翼": defineActionCardInfo({ name: "天空之翼", nameEn: "Skyward Harp", type: "Equipment", type2: "Weapon" }),
  "阿莫斯之弓": defineActionCardInfo({ name: "阿莫斯之弓", nameEn: "Amos' Bow", type: "Equipment", type2: "Weapon" }),
  "终末嗟叹之诗": defineActionCardInfo({ name: "终末嗟叹之诗", nameEn: "Elegy for the End", type: "Equipment", type2: "Weapon" }),
  "王下近侍": defineActionCardInfo({ name: "王下近侍", nameEn: "King's Squire", type: "Equipment", type2: "Weapon" }),

  "白铁大剑": defineActionCardInfo({ name: "白铁大剑", nameEn: "White Iron Greatsword", type: "Equipment", type2: "Weapon" }),
  "祭礼大剑": defineActionCardInfo({ name: "祭礼大剑", nameEn: "Sacrificial Greatsword", type: "Equipment", type2: "Weapon" }),
  "狼的末路": defineActionCardInfo({ name: "狼的末路", nameEn: "Wolf's Gravestone", type: "Equipment", type2: "Weapon" }),
  "天空之傲": defineActionCardInfo({ name: "天空之傲", nameEn: "Skyward Pride", type: "Equipment", type2: "Weapon" }),
  "钟剑": defineActionCardInfo({ name: "钟剑", nameEn: "The Bell", type: "Equipment", type2: "Weapon" }),

  "白缨枪": defineActionCardInfo({ name: "白缨枪", nameEn: "White Tassel", type: "Equipment", type2: "Weapon" }),
  "千岩长枪": defineActionCardInfo({ name: "千岩长枪", nameEn: "Lithic Spear", type: "Equipment", type2: "Weapon" }),
  "天空之脊": defineActionCardInfo({ name: "天空之脊", nameEn: "Skyward Spine", type: "Equipment", type2: "Weapon" }),
  "贯虹之槊": defineActionCardInfo({ name: "贯虹之槊", nameEn: "Vortex Vanquisher", type: "Equipment", type2: "Weapon" }),
  "薙草之稻光": defineActionCardInfo({ name: "薙草之稻光", nameEn: "Engulfing Lightning", type: "Equipment", type2: "Weapon" }),
  "贯月矢": defineActionCardInfo({ name: "贯月矢", nameEn: "Moonpiercer", type: "Equipment", type2: "Weapon" }),

  "旅行剑": defineActionCardInfo({ name: "旅行剑", nameEn: "Traveler's Handy Sword", type: "Equipment", type2: "Weapon" }),
  "祭礼剑": defineActionCardInfo({ name: "祭礼剑", nameEn: "Sacrificial Sword", type: "Equipment", type2: "Weapon" }),
  "风鹰剑": defineActionCardInfo({ name: "风鹰剑", nameEn: "Aquila Favonia", type: "Equipment", type2: "Weapon" }),
  "天空之刃": defineActionCardInfo({ name: "天空之刃", nameEn: "Skyward Blade", type: "Equipment", type2: "Weapon" }),
  "西风剑": defineActionCardInfo({ name: "西风剑", nameEn: "Favonius Sword", type: "Equipment", type2: "Weapon" }),

  // 圣遗物
  "冒险家头带": defineActionCardInfo({ name: "冒险家头带", nameEn: "Adventurer's Bandana", type: "Equipment", type2: "Artifact" }),
  "幸运儿银冠": defineActionCardInfo({ name: "幸运儿银冠", nameEn: "Lucky Dog's Silver Circlet", type: "Equipment", type2: "Artifact" }),
  "游医的方巾": defineActionCardInfo({ name: "游医的方巾", nameEn: "Traveling Doctor's Handkerchief", type: "Equipment", type2: "Artifact" }),
  "赌徒的耳环": defineActionCardInfo({ name: "赌徒的耳环", nameEn: "Gambler's Earrings", type: "Equipment", type2: "Artifact" }),
  "教官的帽子": defineActionCardInfo({ name: "教官的帽子", nameEn: "Instructor's Cap", type: "Equipment", type2: "Artifact" }),
  "流放者头冠": defineActionCardInfo({ name: "流放者头冠", nameEn: "Exile's Circlet", type: "Equipment", type2: "Artifact" }),
  "华饰之兜": defineActionCardInfo({ name: "华饰之兜", nameEn: "Ornate Kabuto", type: "Equipment", type2: "Artifact" }),
  "绝缘之旗印": defineActionCardInfo({ name: "绝缘之旗印", nameEn: "Emblem of Severed Fate", type: "Equipment", type2: "Artifact" }),
  "将帅兜鍪": defineActionCardInfo({ name: "将帅兜鍪", nameEn: "General's Ancient Helm", type: "Equipment", type2: "Artifact" }),
  "千岩牢固": defineActionCardInfo({ name: "千岩牢固", nameEn: "Tenacity of the Millelith", type: "Equipment", type2: "Artifact" }),
  "虺雷之姿": defineActionCardInfo({ name: "虺雷之姿", nameEn: "Thundering Poise", type: "Equipment", type2: "Artifact" }),
  "辰砂往生录": defineActionCardInfo({ name: "辰砂往生录", nameEn: "Vermillion Hereafter", type: "Equipment", type2: "Artifact" }),
  "无常之面": defineActionCardInfo({ name: "无常之面", nameEn: "Capricious Visage", type: "Equipment", type2: "Artifact" }),
  "追忆之注连": defineActionCardInfo({ name: "追忆之注连", nameEn: "Shimenawa's Reminiscence", type: "Equipment", type2: "Artifact" }),
  "海祇之冠": defineActionCardInfo({ name: "海祇之冠", nameEn: "Crown of Watatsumi", type: "Equipment", type2: "Artifact" }),
  "海染砗磲": defineActionCardInfo({ name: "海染砗磲", nameEn: "Ocean Hued Clam", type: "Equipment", type2: "Artifact" }),
  "沙王的投影": defineActionCardInfo({ name: "沙王的投影", nameEn: "Shadow of the Sand King", type: "Equipment", type2: "Artifact" }),
  "踏破冰雪的回音": defineActionCardInfo({ name: "踏破冰雪的回音", nameEn: "Broken Rime's Echo", type: "Equipment", type2: "Artifact" }),
  "冰风迷途的勇士": defineActionCardInfo({ name: "冰风迷途的勇士", nameEn: "Blizzard Strayer", type: "Equipment", type2: "Artifact" }),
  "酒渍船帽": defineActionCardInfo({ name: "酒渍船帽", nameEn: "Wine-Stained Tricorne", type: "Equipment", type2: "Artifact" }),
  "沉沦之心": defineActionCardInfo({ name: "沉沦之心", nameEn: "Heart of Depth", type: "Equipment", type2: "Artifact" }),
  "焦灼的魔女帽": defineActionCardInfo({ name: "焦灼的魔女帽", nameEn: "Witch's Scorching Hat", type: "Equipment", type2: "Artifact" }),
  "炽烈的炎之魔女": defineActionCardInfo({ name: "炽烈的炎之魔女", nameEn: "Crimson Witch of Flames", type: "Equipment", type2: "Artifact" }),
  "唤雷的头冠": defineActionCardInfo({ name: "唤雷的头冠", nameEn: "Thunder Summoner's Crown", type: "Equipment", type2: "Artifact" }),
  "如雷的盛怒": defineActionCardInfo({ name: "如雷的盛怒", nameEn: "Thundering Fury", type: "Equipment", type2: "Artifact" }),
  "翠绿的猎人之冠": defineActionCardInfo({ name: "翠绿的猎人之冠", nameEn: "Viridescent Venerer's Diadem", type: "Equipment", type2: "Artifact" }),
  "翠绿之影": defineActionCardInfo({ name: "翠绿之影", nameEn: "Viridescent Venerer", type: "Equipment", type2: "Artifact" }),
  "不动玄石之相": defineActionCardInfo({ name: "不动玄石之相", nameEn: "Mask of Solitude Basalt", type: "Equipment", type2: "Artifact" }),
  "悠古的磐岩": defineActionCardInfo({ name: "悠古的磐岩", nameEn: "Archaic Petra", type: "Equipment", type2: "Artifact" }),
  "月桂的宝冠": defineActionCardInfo({ name: "月桂的宝冠", nameEn: "Laurel Coronet", type: "Equipment", type2: "Artifact" }),
  "深林的记忆": defineActionCardInfo({ name: "深林的记忆", nameEn: "Deepwood Memories", type: "Equipment", type2: "Artifact" }),

  // 场地
  "璃月港口": defineActionCardInfo({ name: "璃月港口", nameEn: "Liyue Harbor Wharf", type: "Support", type2: "Area" }),
  "骑士团图书馆": defineActionCardInfo({ name: "骑士团图书馆", nameEn: "Knights of Favonius Library", type: "Support", type2: "Area" }),
  "群玉阁": defineActionCardInfo({ name: "群玉阁", nameEn: "Jade Chamber", type: "Support", type2: "Area" }),
  "晨曦酒庄": defineActionCardInfo({ name: "晨曦酒庄", nameEn: "Dawn Winery", type: "Support", type2: "Area" }),
  "望舒客栈": defineActionCardInfo({ name: "望舒客栈", nameEn: "Wangshu Inn", type: "Support", type2: "Area" }),
  "西风大教堂": defineActionCardInfo({ name: "西风大教堂", nameEn: "Favonius Cathedral", type: "Support", type2: "Area" }),
  "天守阁": defineActionCardInfo({ name: "天守阁", nameEn: "Tenshukaku", type: "Support", type2: "Area" }),
  "鸣神大社": defineActionCardInfo({ name: "鸣神大社", nameEn: "Grand Narukami Shrine", type: "Support", type2: "Area" }),
  "珊瑚宫": defineActionCardInfo({ name: "珊瑚宫", nameEn: "Sangonomiya Shrine", type: "Support", type2: "Area" }),
  "须弥城": defineActionCardInfo({ name: "须弥城", nameEn: "Sumeru City", type: "Support", type2: "Area" }),
  "桓纳兰那": defineActionCardInfo({ name: "桓纳兰那", nameEn: "Vanarana", type: "Support", type2: "Area" }),
  "镇守之森": defineActionCardInfo({ name: "镇守之森", nameEn: "Chinju Forest", type: "Support", type2: "Area" }),
  "黄金屋": defineActionCardInfo({ name: "黄金屋", nameEn: "Golden House", type: "Support", type2: "Area" }),
  "化成郭": defineActionCardInfo({ name: "化成郭", nameEn: "Gandharva Ville", type: "Support", type2: "Area" }),
  "风龙废墟": defineActionCardInfo({ name: "风龙废墟", nameEn: "Stormterror's Lair", type: "Support", type2: "Area" }),

  // 伙伴
  "派蒙": defineActionCardInfo({ name: "派蒙", nameEn: "Paimon", type: "Support", type2: "Friend" }),
  "凯瑟琳": defineActionCardInfo({ name: "凯瑟琳", nameEn: "Katheryne", type: "Support", type2: "Friend" }),
  "蒂玛乌斯": defineActionCardInfo({ name: "蒂玛乌斯", nameEn: "Timaeus", type: "Support", type2: "Friend" }),
  "瓦格纳": defineActionCardInfo({ name: "瓦格纳", nameEn: "Wagner", type: "Support", type2: "Friend" }),
  "卯师傅": defineActionCardInfo({ name: "卯师傅", nameEn: "Chef Mao", type: "Support", type2: "Friend" }),
  "阿圆": defineActionCardInfo({ name: "阿圆", nameEn: "Tubby", type: "Support", type2: "Friend" }),
  "提米": defineActionCardInfo({ name: "提米", nameEn: "Timmie", type: "Support", type2: "Friend" }),
  "立本": defineActionCardInfo({ name: "立本", nameEn: "Liben", type: "Support", type2: "Friend" }),
  "常九爷": defineActionCardInfo({ name: "常九爷", nameEn: "Chang the Ninth", type: "Support", type2: "Friend" }),
  "艾琳": defineActionCardInfo({ name: "艾琳", nameEn: "Ellin", type: "Support", type2: "Friend" }),
  "田铁嘴": defineActionCardInfo({ name: "田铁嘴", nameEn: "Iron Tongue Tian", type: "Support", type2: "Friend" }),
  "刘苏": defineActionCardInfo({ name: "刘苏", nameEn: "Liu Su", type: "Support", type2: "Friend" }),
  "花散里": defineActionCardInfo({ name: "花散里", nameEn: "Hanachirusato", type: "Support", type2: "Friend" }),
  "鲸井小弟": defineActionCardInfo({ name: "鲸井小弟", nameEn: "Kid Kujirai", type: "Support", type2: "Friend" }),
  "旭东": defineActionCardInfo({ name: "旭东", nameEn: "Xudong", type: "Support", type2: "Friend" }),
  "迪娜泽黛": defineActionCardInfo({ name: "迪娜泽黛", nameEn: "Dunyarzad", type: "Support", type2: "Friend" }),
  "拉娜": defineActionCardInfo({ name: "拉娜", nameEn: "Rana", type: "Support", type2: "Friend" }),
  "老章": defineActionCardInfo({ name: "老章", nameEn: "Master Zhang", type: "Support", type2: "Friend" }),
  "塞塔蕾": defineActionCardInfo({ name: "塞塔蕾", nameEn: "Setaria", type: "Support", type2: "Friend" }),
  "弥生七月": defineActionCardInfo({ name: "弥生七月", nameEn: "Yayoi Nanatsuki", type: "Support", type2: "Friend" }),

  // 道具
  "参量质变仪": defineActionCardInfo({ name: "参量质变仪", nameEn: "Parametric Transformer", type: "Support", type2: "Item" }),
  "便携营养袋": defineActionCardInfo({ name: "便携营养袋", nameEn: "NRE", type: "Support", type2: "Item" }),
  "红羽团扇": defineActionCardInfo({ name: "红羽团扇", nameEn: "Red Feather Fan", type: "Support", type2: "Item" }),
  "寻宝仙灵": defineActionCardInfo({ name: "寻宝仙灵", nameEn: "Treasure-Seeking Seelie", type: "Support", type2: "Item" }),

  // 秘传
  "旧时庭园": defineActionCardInfo({ name: "旧时庭园", nameEn: "Ancient Courtyard", type: "Event", type2: "Legend" }),
  "磐岩盟契": defineActionCardInfo({ name: "磐岩盟契", nameEn: "Covenant of Rock", type: "Event", type2: "Legend" }),
  "愉舞欢游": defineActionCardInfo({ name: "愉舞欢游", nameEn: "Joyous Celebration", type: "Event", type2: "Legend" }),
  "自由的新风": defineActionCardInfo({ name: "自由的新风", nameEn: "Fresh Wind of Freedom", type: "Event", type2: "Legend" }),
  "万家灶火": defineActionCardInfo({ name: "万家灶火", nameEn: "In Every House a Stove", type: "Event", type2: "Legend" }),

  // 元素共鸣
  "元素共鸣：交织之冰": defineActionCardInfo({ name: "元素共鸣：交织之冰", nameEn: "Elemental Resonance Woven Ice", type: "Event", type2: "Element" }),
  "元素共鸣：粉碎之冰": defineActionCardInfo({ name: "元素共鸣：粉碎之冰", nameEn: "Elemental Resonance Shattering Ice", type: "Event", type2: "Element" }),
  "元素共鸣：交织之水": defineActionCardInfo({ name: "元素共鸣：交织之水", nameEn: "Elemental Resonance Woven Waters", type: "Event", type2: "Element" }),
  "元素共鸣：疗愈之水": defineActionCardInfo({ name: "元素共鸣：疗愈之水", nameEn: "Elemental Resonance Soothing Water", type: "Event", type2: "Element" }),
  "元素共鸣：交织之火": defineActionCardInfo({ name: "元素共鸣：交织之火", nameEn: "Elemental Resonance Woven Flames", type: "Event", type2: "Element" }),
  "元素共鸣：热诚之火": defineActionCardInfo({ name: "元素共鸣：热诚之火", nameEn: "Elemental Resonance Fervent Flames", type: "Event", type2: "Element" }),
  "元素共鸣：交织之雷": defineActionCardInfo({ name: "元素共鸣：交织之雷", nameEn: "Elemental Resonance Woven Thunder", type: "Event", type2: "Element" }),
  "元素共鸣：强能之雷": defineActionCardInfo({ name: "元素共鸣：强能之雷", nameEn: "Elemental Resonance High Voltage", type: "Event", type2: "Element" }),
  "元素共鸣：交织之风": defineActionCardInfo({ name: "元素共鸣：交织之风", nameEn: "Elemental Resonance Woven Winds", type: "Event", type2: "Element" }),
  "元素共鸣：迅捷之风": defineActionCardInfo({ name: "元素共鸣：迅捷之风", nameEn: "Elemental Resonance Impetuous Winds", type: "Event", type2: "Element" }),
  "元素共鸣：交织之岩": defineActionCardInfo({ name: "元素共鸣：交织之岩", nameEn: "Elemental Resonance Woven Stone", type: "Event", type2: "Element" }),
  "元素共鸣：坚定之岩": defineActionCardInfo({ name: "元素共鸣：坚定之岩", nameEn: "Elemental Resonance Enduring Rock", type: "Event", type2: "Element" }),
  "元素共鸣：交织之草": defineActionCardInfo({ name: "元素共鸣：交织之草", nameEn: "Elemental Resonance Woven Weeds", type: "Event", type2: "Element" }),
  "元素共鸣：蔓生之草": defineActionCardInfo({ name: "元素共鸣：蔓生之草", nameEn: "Elemental Resonance Sprawling Greenery", type: "Event", type2: "Element" }),

  // 阵营
  "风与自由": defineActionCardInfo({ name: "风与自由", nameEn: "Wind and Freedom", type: "Event", type2: "Faction" }),
  "岩与契约": defineActionCardInfo({ name: "岩与契约", nameEn: "Stone and Contracts", type: "Event", type2: "Faction" }),
  "雷与永恒": defineActionCardInfo({ name: "雷与永恒", nameEn: "Thunder and Eternity", type: "Event", type2: "Faction" }),
  "草与智慧": defineActionCardInfo({ name: "草与智慧", nameEn: "Nature and Wisdom", type: "Event", type2: "Faction" }),

  // “法术”
  "最好的伙伴！": defineActionCardInfo({ name: "最好的伙伴！", nameEn: "The Bestest Travel Companion!", type: "Event", type2: "Other" }),
  "换班时间": defineActionCardInfo({ name: "换班时间", nameEn: "Changing Shifts", type: "Event", type2: "Other" }),
  "一掷乾坤": defineActionCardInfo({ name: "一掷乾坤", nameEn: "Toss-Up", type: "Event", type2: "Other" }),
  "运筹帷幄": defineActionCardInfo({ name: "运筹帷幄", nameEn: "Strategize", type: "Event", type2: "Other" }),
  "本大爷还没有输！": defineActionCardInfo({ name: "本大爷还没有输！", nameEn: "I Haven't Lost Yet!", type: "Event", type2: "Other" }),
  "交给我吧！": defineActionCardInfo({ name: "交给我吧！", nameEn: "Leave It to Me!", type: "Event", type2: "Other" }),
  "鹤归之时": defineActionCardInfo({ name: "鹤归之时", nameEn: "When the Crane Returned", type: "Event", type2: "Other" }),
  "星天之兆": defineActionCardInfo({ name: "星天之兆", nameEn: "Starsigns", type: "Event", type2: "Other" }),
  "白垩之术": defineActionCardInfo({ name: "白垩之术", nameEn: "Calx's Arts", type: "Event", type2: "Other" }),
  "诸武精通": defineActionCardInfo({ name: "诸武精通", nameEn: "Master of Weaponry", type: "Event", type2: "Other" }),
  "神宝迁宫祝词": defineActionCardInfo({ name: "神宝迁宫祝词", nameEn: "Blessing of the Divine Relic's Installation", type: "Event", type2: "Other" }),
  "快快缝补术": defineActionCardInfo({ name: "快快缝补术", nameEn: "Quick Knit", type: "Event", type2: "Other" }),
  "送你一程": defineActionCardInfo({ name: "送你一程", nameEn: "Send Off", type: "Event", type2: "Other" }),
  "护法之誓": defineActionCardInfo({ name: "护法之誓", nameEn: "Guardian's Oath", type: "Event", type2: "Other" }),
  "深渊的呼唤": defineActionCardInfo({ name: "深渊的呼唤", nameEn: "Abyssal Summons", type: "Event", type2: "Faction" }),
  "愚人众的阴谋": defineActionCardInfo({ name: "愚人众的阴谋", nameEn: "Fatui Conspiracy", type: "Event", type2: "Faction" }),
  "下落斩": defineActionCardInfo({ name: "下落斩", nameEn: "Plunging Strike", type: "Event", type2: "Other" }),
  "重攻击": defineActionCardInfo({ name: "重攻击", nameEn: "Heavy Strike", type: "Event", type2: "Other" }),
  "温妮莎传奇": defineActionCardInfo({ name: "温妮莎传奇", nameEn: "The Legend of Vennessa", type: "Event", type2: "Other" }),
  "永远的友谊": defineActionCardInfo({ name: "永远的友谊", nameEn: "Friendship Eternal", type: "Event", type2: "Other" }),
  "大梦的曲调": defineActionCardInfo({ name: "大梦的曲调", nameEn: "Rhythm of the Great Dream", type: "Event", type2: "Other" }),
  "藏锋何处": defineActionCardInfo({ name: "藏锋何处", nameEn: "Where Is the Unseen Razor", type: "Event", type2: "Other" }),
  "拳力斗技！": defineActionCardInfo({ name: "拳力斗技！", nameEn: "Pankration!", type: "Event", type2: "Other" }),
  "琴音之诗": defineActionCardInfo({ name: "琴音之诗", nameEn: "Lyresong", type: "Event", type2: "Other" }),

  // 料理
  "绝云锅巴": defineActionCardInfo({ name: "绝云锅巴", nameEn: "Jueyun Guoba", type: "Event", type2: "Food" }),
  "仙跳墙": defineActionCardInfo({ name: "仙跳墙", nameEn: "Adeptus' Temptation", type: "Event", type2: "Food" }),
  "莲花酥": defineActionCardInfo({ name: "莲花酥", nameEn: "Lotus Flower Crisp", type: "Event", type2: "Food" }),
  "北地烟熏鸡": defineActionCardInfo({ name: "北地烟熏鸡", nameEn: "Northern Smoked Chicken", type: "Event", type2: "Food" }),
  "甜甜花酿鸡": defineActionCardInfo({ name: "甜甜花酿鸡", nameEn: "Sweet Madame", type: "Event", type2: "Food" }),
  "蒙德土豆饼": defineActionCardInfo({ name: "蒙德土豆饼", nameEn: "Mondstadt Hash Brown", type: "Event", type2: "Food" }),
  "烤蘑菇披萨": defineActionCardInfo({ name: "烤蘑菇披萨", nameEn: "Mushroom Pizza", type: "Event", type2: "Food" }),
  "兽肉薄荷卷": defineActionCardInfo({ name: "兽肉薄荷卷", nameEn: "Minty Meat Rolls", type: "Event", type2: "Food" }),
  "提瓦特煎蛋": defineActionCardInfo({ name: "提瓦特煎蛋", nameEn: "Teyvat Fried Egg", type: "Event", type2: "Food" }),
  "刺身拼盘": defineActionCardInfo({ name: "刺身拼盘", nameEn: "Sashimi Platter", type: "Event", type2: "Food" }),
  "唐杜尔烤鸡": defineActionCardInfo({ name: "唐杜尔烤鸡", nameEn: "Tandoori Roast Chicken", type: "Event", type2: "Food" }),
  "黄油蟹蟹": defineActionCardInfo({ name: "黄油蟹蟹", nameEn: "Butter Crab", type: "Event", type2: "Food" }),
};

export type ActionCard = keyof typeof ALL_ACTION_CARDS_INFO;

export const ALL_ACTION_CARDS = Object.keys(ALL_ACTION_CARDS_INFO) as ActionCard[];

const actionCardOrder = Object.fromEntries(ALL_ACTION_CARDS.map((card, i) => [card, i])) as Record<ActionCard, number>;
export const actionCardSorter = (a: ActionCard, b: ActionCard) => actionCardOrder[a] - actionCardOrder[b];
