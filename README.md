# 召唤之巅

七圣召唤赛事资料。

网站地址：https://gjfleo.github.io/summoners-summit/

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

## API

项目包含内置 API，主要用于静态生成网页时获取数据。

由于不能保证稳定性且可能发生变更，外部项目如需使用，建议仅用于开发环境而非用户端。（最好告知我）

可以使用 Netlify 部署的站点调用：`https://summoners-summit.netlify.app/api/v1`

<details><summary>API示例</summary>

- [`/tournaments`](https://summoners-summit.netlify.app/api/v1/tournaments) - 赛事列表
  - [`?gameVersion=3.8`](https://summoners-summit.netlify.app/api/v1/tournaments?gameVersion=3.8) - 游戏版本，默认为空（不限）
- [`/tournaments/:tournamentId`](https://summoners-summit.netlify.app/api/v1/tournaments/b7f4346442601d80) - 赛事信息
- [`/tournaments/:tournamentId/details`](https://summoners-summit.netlify.app/api/v1/tournaments/b7f4346442601d80/details) - 赛事信息，连同该赛事场次和对局
- [`/matches/:matchId`](https://summoners-summit.netlify.app/api/v1/matches/b7f4346442601d8001) - 场次信息
- [`/games`](https://summoners-summit.netlify.app/api/v1/games) - 对局列表
  - [`?limit=10&offset=10`](https://summoners-summit.netlify.app/api/v1/games?limit=10&offset=10) - 分页，默认`limit=50`
  - 一些其他参数
- [`/decks/:deckId`](https://summoners-summit.netlify.app/api/v1/decks/dd6dae64467a5555) - 牌组信息
- [`/team-stats`](https://summoners-summit.netlify.app/api/v1/team-stats)

</details>
