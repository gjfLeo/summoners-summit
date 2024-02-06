# Summoners' Summit

<p> </p>

[![Crowdin](https://badges.crowdin.net/summoners-summit/localized.svg)](https://crowdin.com/project/summoners-summit)

七圣召唤赛事资料。

Website: https\://gjfleo.github.io/summoners-summit/

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

使用此命令生成静态页面，用于将网站部分部署至 GitHub Pages 等。

```bash
pnpm run generate
```

预览：

```bash
pnpm run preview:ssg
```

### 构建

For building a Node.js server that serves API calls.

```bash
pnpm run build
```

预览：

```bash
pnpm run preview
```

</details>

## 关于数据

As this is a purely front-end project, all data is currently stored in the source code. However, since the pages are generated using SSG, it's not a big problem for now\.For generating static pages of the website to be uploaded to GitHub Pages or another hosting service of choice.

- 比赛对局等信息维护在[这里](./server/data/tournaments)。
- 选手马甲对应关系维护在[这里](./server/data/players/index.ts)。

## API

项目包含内置 API，主要用于静态生成网页时获取数据。

Due to exceeding of building usage, the API no longer keeps updated on Netlify. Still available by starting a local server.Still available by starting a local server.

<details><summary>API示例</summary>

- [`/tournaments`](https://summoners-summit.netlify.app/api/v1/tournaments) - 赛事列表
  - [`?gameVersion=3.8`](https://summoners-summit.netlify.app/api/v1/tournaments?gameVersion=3.8) - 游戏版本，默认为空（不限）
- [`/tournaments/:tournamentId`](https://summoners-summit.netlify.app/api/v1/tournaments/b7f4346442601d80) - 赛事信息
- [`/tournaments/:tournamentId/details`](https://summoners-summit.netlify.app/api/v1/tournaments/b7f4346442601d80/details) - 赛事信息，连同该赛事场次和对局
- [`/matches/:matchId`](https://summoners-summit.netlify.app/api/v1/matches/b7f4346442601d8001) - 场次信息
- [`/games`](https://summoners-summit.netlify.app/api/v1/games) - 对局列表
  - [`?limit=10&offset=10`](https://summoners-summit.netlify.app/api/v1/games?limit=10\&offset=10) - Game count and offset for pagination. Default is `limit=50`.
  - 一些其他参数
- [`/decks/:deckId`](https://summoners-summit.netlify.app/api/v1/decks/dd6dae64467a5555) - 牌组信息
- [`/team-stats`](https://summoners-summit.netlify.app/api/v1/team-stats) - Get statistics of all main deck combinations.

</details>
