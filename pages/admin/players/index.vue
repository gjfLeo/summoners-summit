<script lang="ts" setup>
import Pinyin from "pinyin-match";
import { AdminPlayerDelete, AdminPlayerEditor, NButton, NTag } from "#components";

definePageMeta({
  layout: "admin",
});

const { t } = useI18n();

const { data, refresh: queryPlayers, pending } = await useFetch("/api/v3/players/getPlayerList");

const players = computed(() => data.value?.players ?? []);

const filterText = ref("");

const filteredPlayers = computed(() => {
  if (!filterText.value) {
    return players.value;
  }
  return players.value.filter((player) => {
    if (player.uid === filterText.value || player.id === filterText.value) {
      return true;
    };
    if ([player.uniqueName, ...player.aliases ?? []].some(name => Pinyin.match(name, filterText.value))) {
      return true;
    };
    return false;
  });
});

const columns: DataTableColumn<typeof players.value[number]>[] = [
  {
    key: "id",
    title: "ID",
    width: "8rem",
    className: "font-mono text-xs",
  },
  {
    key: "uniqueName",
    title: t("player.mainNickname"),
    minWidth: "8rem",
  },
  {
    key: "aliases",
    title: t("player.otherNicknames"),
    render: (row) => {
      return h(
        "div",
        { class: "flex flex-wrap gap-2" },
        [
          ...(row.aliases ?? []).map(alias => h(
            NTag,
            () => alias,
          )),
        ],
      );
    },
  },
  {
    key: "operations",
    title: t("action.operations"),
    width: "8rem",
    render: (row) => {
      return h(
        "div",
        { class: "flex gap-2" },
        [
          h(
            NButton,
            { text: true, onClick: () => editPlayer(row) },
            () => h("div", { class: "i-carbon:edit" }),
          ),
          h(
            AdminPlayerDelete,
            { player: row, onDone: queryPlayers },
          ),
        ],
      );
    },
  },
];

const playerEditorRef = ref<InstanceType<typeof AdminPlayerEditor>>();
async function editPlayer(player?: Player) {
  try {
    await playerEditorRef.value?.edit(player);
    queryPlayers();
  }
  catch (error) {
  }
}

const message = useMessage();

async function importOldData() {
  const messageInstance = message.create(`删除旧数据：0/${players.value.length}`, {
    duration: 0,
    type: "loading",
  });
  let done = 0;
  for (const player of players.value) {
    await $fetch("/api/v3/players/deletePlayer", {
      method: "POST",
      body: { id: player.id },
    });
    messageInstance.content = `删除旧数据：${++done}/${players.value.length}`;
  }
  const oldData = {
    "夜莺": "LL起翼夜鹰",
    "RR夜莺": "LL起翼夜鹰",
    "RR抒情夜莺": "LL起翼夜鹰",
    "夜鹰": "LL起翼夜鹰",
    "卡密sama42": "卡密sama",
    "原皮鸭": "皮皮鸭",
    "臭臭鸭": "原皮鸭",
    "原来是筱梦": "岚落尘",
    "洛甄黎": "妞妞嘛",
    "八重妞妞": "妞妞嘛",
    "阿源今晚吃派蒙": "阿源",
    "蓬莱寺九霄啊": "蓬莱寺九霄",
    "幽羊": "一不小欣z",
    "月话牌社-音月": "月话音月",
    "梦一夕林": "萌萌哒的梦酱",
    "音尘Voicend": "音尘",
    "飘逸之风": "吃猫萝",
    "柚恩柚恩了": "柚柚恩",
    "本大爷还有仙跳": "道道不哭",
    "那菈琉環冰": "琉環冰",
    "齿轮": "齿轮mog",
    "牌手Aurora": "Aurora",
    "皮皮猪今晚吃阿源": "皮皮猪",
    "七圣小铭同学": "小铭同学qaQ233",
    "Septorz": "Sept",
    "不足中行醉梦中": "今天不想吃苹果",
    "沉湎丶": "桔梗",
    "小宇cyy": "小宇",
    "魔法绵羊Tobby": "Tobby",
    "水果鲨啦": "蛋黄汐夕",
    "Shana": "明暗螺旋",
    "只玩水草皇呜呜": "只玩水皇草呜呜",
    "「亦然」": "亦然",
    "zjyang": "宇宙蓝色闪光",
    "今天不想吃苹果_": "今天不想吃苹果",
    "一不小欣x": "一不小欣z",
    "冰糖蕊梨": "蕊梨",
    "干瘪的小果核": "小果核",
    "取悦诗风吟": "取悦",
    "召唤王": "吾虽年迈",
    "卡牌狂魔张老伯": "老伯",
    "全都是失误": "全都是错误",
    "葬送の鏡蓮華で": "雪乃",
    "镜莲华的葬送": "雪乃",
    "芙桃桃大魔王": "胡桃桃大魔王",
    "胡芙芙大魔王": "胡桃桃大魔王",
    "小瓜皮王": "瓜皮儿",
    "瓜皮儿err": "瓜皮儿",
    "道诡异仙李火旺": "小果核",
    "素未谋面": "陳十一",
    "浅冽（重生版）": "浅冽",
    "永远滴_神": "Dr.666",
    "终末本是我家": "终末我家",
    "和大名32145": "和大名",
    "Tonbo_桐柏": "Tonbo",
    "七圣古明地觉": "古明地觉",
    "莫莉安wink": "莫莉安",
    "LLRiseFalcon": "LL起翼夜鹰",
    "Voicend": "音尘",
    "PPpig": "皮皮猪",
    "小铭同学qaQ233": "小铭同学",
    "牛马牛牛马": "Star",
    "xxxxxhope": "XHope",
    "icedtea": "今天不想吃苹果",
    "皮皮喵": "喵帕斯",
    "RedY": "赤佬RedY",
    "WilliemKmetsch": "贝尔格里",
    "暖冰扔进冷火里": "长门有希",
    "冷たい空": "雪乃",
    "无光": "无光之眼",
    "红颜~nano": "红颜",
    "理塘牢桐": "梧桐",
    "小红帽的大兔子": "小梦",
    "聿九音": "轻篱",
    "胡桃小姐单推人": "胡桃花开青雀鸣",
    "武响尾蛇": "丶响尾蛇丶",
    "子祺●百特": "子祺粨特",
    "白雀": "蓬莱寺九霄",
    "空寻的小迷妹": "pupa",
    "hl": "Glyou_HZ",
    "只玩水皇草呜呜": "雷伊",
    "胡猫": "雷伊",
    "魑魅魍魉": "小果核",
    "Fuwoo": "岩van♂deep君",
    "坐忘道": "春风不扰过客",
    "你给我果赖": "Sherry",
    "相夷": "陳十一",
    "♡招财小喵♡": "柠柠七喵",
    "甘琳鸢": "Glyou_HZ",
    "吃雀萝": "吃猫萝",
    "Zima": "ZIMA",
    "呆…呆jio布？": "雪乃",
    "魈宝我老公": "魈宝我老公！",
    "自信的胡小菠": "自信的菠萝蜜",
    "螳螂螂小魔虾": "螳螂虾",
    "屁屁猪公主": "原皮鸭",
    "雨夜": "雨夜Mhz",
    "胡胡伯": "老伯",
    "XXXXXHope": "XHope",
    "007": "小果核",
    "黑钰袖": "｜蓝兰岚｜",
    "哀酱从小就可爱": "Sherry",
    "古月方源": "春秋蝉",
    "冰红茶心甘晴愿": "冰红茶|荧",
    "幸运": "夭九",
    "浅冽": "鱼儿化音的迷妹",
    "偶尔来打牌": "某七圣召唤选手",
    "胡胡夜闪光": "宇宙蓝色闪光",
    "枨枘⠀": "枨枘",
    "萌萌哒的汐酱": "蛋黄汐夕",
    "帝子降兮": "帝之降兮",
    "握碎柠檬": "吾虽年迈",
    "薄学..红温啦": "薄学",
    "吉更": "桔梗",
    "燕藩阿楼": "阿楼Riricho",
    "纤育鼎": "霓特",
    "派大蒙": "MaRiA",

    "Kirisa": "きりさ",
    "chikuwa": "ちくわ",
    "kamisama": "卡密sama",
    "Proxy": "KevinZ",
    "quijano": "ΚΥΡΑΝΟΣ",
    "maya": "zCrimlet",
    "SI2": "StupidIdiot",
    "StupidIdiot": "RobotWizard",
    "Komorebi": "王小雨",
    "meaningless": "吴意",
    "Sumi": "diarin",
    "AFKay": "唐傀",
    "CJRzzZ": "自古二楼",
    "Lp|葉山": "葉山",
  };
  done = 0;
  for (const [alias, uniqueName] of Object.entries(oldData)) {
    await $fetch("/api/v3/players/addAlias", {
      method: "POST",
      body: { alias, uniqueName },
    });
    messageInstance.content = `重置旧数据：${++done}/${Object.keys(oldData).length}`;
  }
  messageInstance.destroy();
  message.success("已完成");
  queryPlayers();
}
</script>

<template>
  <div flex="~ col gap-4">
    <div flex="~ gap-2">
      <NButton @click="importOldData()">（测试用）重置数据</NButton>
    </div>
    <div flex="~ gap-2">
      <div>
        <NInput v-model:value="filterText" />
      </div>
      <NButton type="primary" @click="editPlayer()">
        <template #icon><div class="i-carbon:add" /></template>
        <template #default>{{ $t("action.add") }}</template>
      </NButton>
    </div>
    <NDataTable :data="filteredPlayers" :columns="columns" :loading="pending" :pagination="{ pageSize: 10 }" />
  </div>
  <AdminPlayerEditor ref="playerEditorRef" />
</template>
