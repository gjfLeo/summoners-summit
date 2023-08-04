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

由于不能保证稳定性且可能发生变更，外部项目如需使用，建议仅用于开发环境而非用户端。

可以使用 Netlify 部署的站点调用：`https://summoners-summit.netlify.app/api/`

