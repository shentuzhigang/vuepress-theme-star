---
title: 快速上手
icon: home
date: 2022-05-18
categories:
  - 教程
tags: 
  - 教程
author: Starzkg
avatar: https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif
intro: 你已经是一个成熟的程序猿了，要学会自己DEBUG了
links:
  - text: QQ
    icon: qq
    url: #
  - text: QZone
    icon: qzone
    url: #
  - text: Wechat
    icon: wechat
    url: #
  - text: WechatFriend
    icon: wechat-friend
    url: #
  - text: CSDN
    icon: csdn
    url: #
  - text: 博客园
    icon: cnblogs
    url: #
  - text: 简书
    icon: jianshu
    url: #
  - text: 掘金
    icon: juejin
    url: #
footer: <a href="http://beian.miit.gov.cn/" target="_blank">浙ICP备19031217号</a> | MIT Licensed | Copyright © 2021-present Starzkg 
footerHtml: true
---
# 快速上手

## 依赖环境

- [Node.js v12+](https://nodejs.org/)
- [Yarn v1 classic](https://classic.yarnpkg.com/zh-Hans/) （可选）

::: tip
- 使用 [pnpm](https://pnpm.io/zh/) 时，你需要在 [`.npmrc`](https://pnpm.io/zh/npmrc#shamefully-hoist) 文件中设置 `shamefully-hoist=true` 。
- 使用 [yarn 2](https://yarnpkg.com/) 时，你需要在 [`.yarnrc.yml`](https://yarnpkg.com/configuration/yarnrc#nodeLinker) 文件中设置 `nodeLinker: 'node-modules'` 。
:::

## 手动安装

这一章节会帮助你从头搭建一个简单的 VuePress 文档网站。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。

- **步骤1**: 创建并进入一个新目录

```bash
mkdir vuepress-starter
cd vuepress-starter
```

- **步骤2**: 初始化项目

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
git init
yarn init
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
git init
npm init
```

  </CodeGroupItem>
</CodeGroup>


- **步骤3**: 将 VuePress 安装为本地依赖

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add -D vuepress@next
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install -D vuepress@next
```

  </CodeGroupItem>
</CodeGroup>


- **步骤4**: 安装 `vuepress-theme-star`

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add -D vuepress-theme-star
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install -D vuepress-theme-star
```

  </CodeGroupItem>
</CodeGroup>

- **步骤5**: 配置主题

创建 `docs/.vuepress/config.js` 或 `docs/.vuepress/config.ts`
```js
module.exports = {
  theme: '@starzkg/star',
}
```

- **步骤6**: 在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

- **步骤7**: 将默认的临时目录和缓存目录添加到 `.gitignore` 文件中

```bash
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

- **步骤8**: 创建你的第一篇文档

```bash
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

- **步骤9**: 在本地启动服务器来开发你的文档网站

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn docs:dev
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm run docs:dev
```

  </CodeGroupItem>
</CodeGroup>

  VuePress 会在 [http://localhost:8080](http://localhost:8080) 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。

现在，你应该已经有了一个使用 `vuepress-theme-star` 主题简单可用的 VuePress 文档网站。接下来，了解一下 VuePress [配置](https://v2.vuepress.vuejs.org/zh/guide/configuration.md) 相关的内容。