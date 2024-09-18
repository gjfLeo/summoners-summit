# 召唤之巅

<p>
<b>简体中文</b> | <a href="https://github.com/gjfleo/summoners-summit/blob/main/README.en.md">English</a>
</p>

七圣召唤赛事资料。

网站地址：https://www.summoners.top/

项目主要基于 [Nuxt](https://nuxt.com/)，网站部分通过 SSG 形式部署在 Vercel。

## 关于数据

目前采用 Nuxt 开发的 API 维护数据，但采用无服务器形式，数据文件存放在代码库中。

<details><summary>数据维护</summary>

### 1. 将代码库克隆到本地

注意项目当前使用 `v3` 分支。

```bash
git checkout v3
git pull
```

### 2. 安装依赖，并在本地启动项目

需要环境：Node.js 20+，pnpm

```bash
pnpm i && pnpm dev
```

### 3. 在浏览器中操作数据，相应的本地数据文件将更新

项目默认运行于 `http://localhost:3000`，本地运行时右上角可进入管理模式。

### 4. 提交变更的数据文件到代码库

推荐使用 Git 工具，也可使用本地页面上右上角的按钮。

参考 Git 命令：

```bash
git add server/data
git commit -m "data"
git push
```

</details>
