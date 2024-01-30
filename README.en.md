# Summoners' Summit

七圣召唤赛事资料。

网站地址：https\://gjfleo.github.io/summoners-summit/

项目主要基于 [Nuxt](https://nuxt.com/)，网站部分通过 SSG 形式部署在 GitHub Pages。

## 项目部署

<details><summary>项目部署</summary>

### 项目环境

- Node: 18.x
- pnpm

### 安装依赖

```bash
pnpm i
```

### 本地服务器

```bash
pnpm run dev
```

### 生成静态页面

```bash
pnpm run generate
```

预览：

```bash
pnpm run preview:ssg
```

使用此命令生成静态页面，用于将网站部分部署至 GitHub Pages 等。

### 构建

```bash
pnpm run build
```

预览：

```bash
pnpm run preview
```

使用此命令构建 Node.js Server，可用于 API 调用。

</details>

## 关于数据

由于是纯前端项目，目前数据全部存放于源代码中。不过因为采用了 SSG 生成页面，所以至少目前为止问题倒也不大。

- 比赛对局等信息维护在[这里](./server/data/tournaments)。
- 选手马甲对应关系维护在[这里](./server/data/players/index.ts)。

## API

项目包含内置 API，主要用于静态生成网页时获取数据。

由于构建用量问题，不再在 Netlify 上保持更新。仍可通过启动本地服务来调用。

<details><summary>API示例</summary>

- [`/tournaments`](https://summoners-summit.netlify.app/api/v1/tournaments) - 赛事列表
  - [`?gameVersion=3.8`](https://summoners-summit.netlify.app/api/v1/tournaments?gameVersion=3.8) - 游戏版本，默认为空（不限）
- [`/tournaments/:tournamentId`](https://summoners-summit.netlify.app/api/v1/tournaments/b7f4346442601d80) - 赛事信息
- [`/tournaments/:tournamentId/details`](https://summoners-summit.netlify.app/api/v1/tournaments/b7f4346442601d80/details) - 赛事信息，连同该赛事场次和对局
- [`/matches/:matchId`](https://summoners-summit.netlify.app/api/v1/matches/b7f4346442601d8001) - 场次信息
- [`/games`](https://summoners-summit.netlify.app/api/v1/games) - 对局列表
  - [`?limit=10&offset=10`](https://summoners-summit.netlify.app/api/v1/games?limit=10\&offset=10) - 分页，默认`limit=50`
  - 一些其他参数
- [`/decks/:deckId`](https://summoners-summit.netlify.app/api/v1/decks/dd6dae64467a5555) - 牌组信息
- [`/team-stats`](https://summoners-summit.netlify.app/api/v1/team-stats)

</details>
