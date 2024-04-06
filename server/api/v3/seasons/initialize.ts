export default defineEventHandler(async () => {
  writeData(
    "misc/season-phrases",
    ZSeasonPhrase.array().parse([
      {
        id: "1.1",
        gameVersions: ["3.7", "3.8"],
        cardBackName: {
          zh: "龙脊雪山·寻迹",
          en: "Dragonspine: Traces",
        },
        cardBackDescription: {
          zh: "静谧星夜中的龙脊雪山，是冒险家们难以征服的险境，至高的目标……",
          en: "Silent Dragonspine under the starry night is one of the highest goals and most dangerous places for an adventurer to conquer.",
        },
      },
      {
        id: "1.2",
        gameVersions: ["4.0"],
        cardBackName: {
          zh: "龙脊雪山·冠冕",
          en: "Dragonspine: Crown",
        },
        cardBackDescription: {
          zh: "破晓之时的龙脊雪山，如同冒险家生涯的冠冕，作为牌手的象征之物时，则代表着「顶峰」级的实力……",
          en: 'The splendor of Dragonspine at daybreak, as the symbol of a duelist, symbolizes the "summit" of their skill...',
        },
      },
      {
        id: "2.1",
        gameVersions: ["4.1", "4.2"],
        cardBackName: {
          zh: "层岩巨渊·坚铁",
          en: "The Chasm: Solid Iron",
        },
        cardBackDescription: {
          zh: "坚铁之色的矿体，是农具与兵器的底色。层岩巨渊蕴藏的诸多矿产，仍是令人敬畏的巨大财富……",
          en: "An iron-colored mineral that forms the base of farm tools and weapons alike. With its abundant mineral reservers, who knows what untold riches The Chasm still holds...",
        },
      },
      {
        id: "2.2",
        gameVersions: ["4.3", "4.4", "4.5", "4.6"],
        cardBackName: {
          zh: "层岩巨渊·靛晶",
          en: "The Chasm: Blue Crystal",
        },
        cardBackDescription: {
          zh: "靛青之色的矿体，是冒险之路向远方延展的信号。层岩巨渊蕴藏的诸多矿产，仍是令人敬畏的巨大财富……",
          en: "An indigo-colored mineral that signals the way forward, telling you that more adventures lie ahead. With its abundant mineral reservers, who knows what untold riches The Chasm still holds...",
        },
      },
      {
        id: "2.3",
        gameVersions: ["4.7"],
        cardBackName: {
          zh: "层岩巨渊·冠冕",
          en: "The Chasm: Crown",
        },
        cardBackDescription: {
          zh: "黄金代表最为辉煌的财富，无论冒险家、矿工还是牌手，都将这色彩视为事业的冠冕……",
          en: "Gold, the most glorious form that wealth can take. Whether you're an adventurer, miner, or card player, it represents the crowning achievement of your career...",
        },
      },
    ]),
  );

  return responseOk({});
});
