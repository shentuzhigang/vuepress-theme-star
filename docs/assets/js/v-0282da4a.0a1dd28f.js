"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6113],{26671:(e,s,n)=>{n.r(s),n.d(s,{data:()=>t});const t={key:"v-0282da4a",path:"/vuepress-next/contributing.html",title:"Contributing Guide",lang:"en-US",frontmatter:{sidebar:"auto"},excerpt:"",headers:[{level:2,title:"Overview",slug:"overview",children:[]},{level:2,title:"Development Setup",slug:"development-setup",children:[]},{level:2,title:"Scripts",slug:"scripts",children:[{level:3,title:"yarn build",slug:"yarn-build",children:[]},{level:3,title:"yarn copy",slug:"yarn-copy",children:[]},{level:3,title:"yarn dev",slug:"yarn-dev",children:[]},{level:3,title:"yarn clean",slug:"yarn-clean",children:[]},{level:3,title:"yarn docs:*",slug:"yarn-docs",children:[]},{level:3,title:"yarn lint",slug:"yarn-lint",children:[]},{level:3,title:"yarn test",slug:"yarn-test",children:[]}]},{level:2,title:"Documentation",slug:"documentation",children:[]}],git:{updatedTime:1639839959e3,contributors:[{name:"Starzkg",email:"1600337300@qq.com",commits:1},{name:"shentuzhigang",email:"shentuzhigang@moresec.cn",commits:1}]},readingTime:{minutes:2.44,words:731},filePathRelative:"vuepress-next/contributing.md",content:"\n# Contributing Guide\n\n## Overview\n\nThis repository employs a [monorepo](https://en.wikipedia.org/wiki/Monorepo) setup with [yarn classic workspaces](https://classic.yarnpkg.com/en/docs/workspaces), and hosts a number of associated but separated packages in the `packages` directory:\n\n- `@vuepress/core`: The VuePress core. Provides pure Node API to generate VuePress app, including page handling, plugin system and data preparation.\n\n- `@vuepress/client`: The VuePress client package. Provides the client entry, and exports types and composable utils that can be used in client side development.\n\n- `@vuepress/bundler-vite`: The VuePress bundler package with vite. Use vite to `dev` and `build` VuePress app that generated by `@vuepress/core`.\n\n- `@vuepress/bundler-webpack`: The VuePress bundler package with webpack. Use webpack to `dev` and `build` VuePress app that generated by `@vuepress/core`.\n\n- `@vuepress/cli`: The VuePress command line interface (CLI) package. It will resolve user config file, and create VuePress app with `@vuepress/core`, then use `@vuepress/bundler-${name}` to execute corresponding command.\n\n- `@vuepress/theme-default`: The VuePress default theme.\n\n- `@vuepress/plugin-${name}`: Official plugins.\n\n- `@vuepress/shared`: Utilities that shared between node side and client side.\n\n- `@vuepress/utils`: Utilities that should only be used in node side.\n\n- `vuepress`: A wrapper of `vuepress-vite`.\n\n- `vuepress-vite`: A wrapper of `@vuepress/cli` + `@vuepress/bundler-vite` + `@vuepress/theme-default`. If users want to use default theme with vite, they can simply install this package.\n\n- `vuepress-webpack`: A wrapper of `@vuepress/cli` + `@vuepress/bundler-webpack` + `@vuepress/theme-default`. If users want to use default theme with webpack, they can simply install this package.\n\n## Development Setup\n\nPre-requirement:\n\n- [Node.js](http://nodejs.org) **version 14+**\n- [Yarn v1 classic](https://classic.yarnpkg.com/en/docs/install)\n\nClone the repo, and install dependencies:\n\n```bash\nyarn\n```\n\nStart watching source files:\n\n```bash\nyarn dev\n```\n\nOpen another terminal, and start developing the documentation site:\n\n```bash\nyarn docs:dev\n```\n\nMain tools that used in this project:\n\n- [TypeScript](https://www.typescriptlang.org/) as the development language\n- [Jest](https://jestjs.io/) for unit testing\n- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for code linting and formatting\n\n## Scripts\n\n### `yarn build`\n\nThe `build` script uses `tsc` to compile typescript source files to javascript dist files.\n\nYou may need to run this script first after your clone this repository, because the dist files are ignored by `.gitignore`.\n\n### `yarn copy`\n\nThe `copy` script of root project runs `copy` script in all packages, copying some resources from source directory to dist directory.\n\nSome source files (e.g. `.vue`, `.css` files) can not be processed by `build` script, but should keep the same relative path in the dist directory.\n\nYou may need to run this script after your clone this repository, too.\n\n### `yarn dev`\n\nThe `dev` script runs `copy` and `build` scripts in watch mode.\n\n### `yarn clean`\n\nThe `clean` script runs `clean` script in all packages, cleaning all the dist files and caches. In other words, it will remove all the files that generated by `build`, `copy` and `dev` scripts.\n\nIt's used before you want to re-build source files from a clean / initial state.\n\n### `yarn docs:*`\n\n#### `yarn docs:build`, `yarn docs:dev`, `yarn docs:clean`\n\nThe `docs:` prefix indicates that these scripts are for documentation, i.e. the `docs` directory.\n\nVuePress is using itself to build its own documentation site.\n\nYou need to run `yarn build && yarn copy` to build VuePress source files first, then run these `docs:` scripts to develop and build our documentation.\n\n#### `yarn docs:serve`\n\nServe the documentation site locally.\n\nYou need to run `yarn docs:build` first to generate the documentation dist files, and then run `yarn docs:serve` to serve them.\n\n### `yarn lint`\n\nThe `lint` script uses ESLint to check all source files.\n\n### `yarn test`\n\nThe `test` script uses Jest to run unit testings.\n\n## Documentation\n\nVuePress documentation is powered by VuePress itself, which is built from the source code of this repository.\n\nAll the markdown source files are placed in `docs` directory. We are maintaining two translations:\n\n- English (en-US) in `/` path\n- Chinese (zh-CN) in `/zh/` path\n\nWe have two different deployments:\n\n- Release deployment powered by [Netlify](https://www.netlify.com). This deployment is built from the latest released version, so users will not see unreleased changes. The domain name is [https://v2.vuepress.vuejs.org](https://v2.vuepress.vuejs.org).\n- Developer deployment powered by [GitHub Pages](https://pages.github.com). This deployment is built from the latest commit, so developers could preview the latest changes. The domain name is [https://vuepress.github.io](https://vuepress.github.io).\n"}},9464:(e,s,n)=>{n.r(s),n.d(s,{default:()=>a});const t=(0,n(66252).uE)('<h1 id="contributing-guide" tabindex="-1"><a class="header-anchor" href="#contributing-guide" aria-hidden="true">#</a> Contributing Guide</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>This repository employs a <a href="https://en.wikipedia.org/wiki/Monorepo" target="_blank" rel="noopener noreferrer">monorepo</a> setup with <a href="https://classic.yarnpkg.com/en/docs/workspaces" target="_blank" rel="noopener noreferrer">yarn classic workspaces</a>, and hosts a number of associated but separated packages in the <code>packages</code> directory:</p><ul><li><p><code>@vuepress/core</code>: The VuePress core. Provides pure Node API to generate VuePress app, including page handling, plugin system and data preparation.</p></li><li><p><code>@vuepress/client</code>: The VuePress client package. Provides the client entry, and exports types and composable utils that can be used in client side development.</p></li><li><p><code>@vuepress/bundler-vite</code>: The VuePress bundler package with vite. Use vite to <code>dev</code> and <code>build</code> VuePress app that generated by <code>@vuepress/core</code>.</p></li><li><p><code>@vuepress/bundler-webpack</code>: The VuePress bundler package with webpack. Use webpack to <code>dev</code> and <code>build</code> VuePress app that generated by <code>@vuepress/core</code>.</p></li><li><p><code>@vuepress/cli</code>: The VuePress command line interface (CLI) package. It will resolve user config file, and create VuePress app with <code>@vuepress/core</code>, then use <code>@vuepress/bundler-${name}</code> to execute corresponding command.</p></li><li><p><code>@vuepress/theme-default</code>: The VuePress default theme.</p></li><li><p><code>@vuepress/plugin-${name}</code>: Official plugins.</p></li><li><p><code>@vuepress/shared</code>: Utilities that shared between node side and client side.</p></li><li><p><code>@vuepress/utils</code>: Utilities that should only be used in node side.</p></li><li><p><code>vuepress</code>: A wrapper of <code>vuepress-vite</code>.</p></li><li><p><code>vuepress-vite</code>: A wrapper of <code>@vuepress/cli</code> + <code>@vuepress/bundler-vite</code> + <code>@vuepress/theme-default</code>. If users want to use default theme with vite, they can simply install this package.</p></li><li><p><code>vuepress-webpack</code>: A wrapper of <code>@vuepress/cli</code> + <code>@vuepress/bundler-webpack</code> + <code>@vuepress/theme-default</code>. If users want to use default theme with webpack, they can simply install this package.</p></li></ul><h2 id="development-setup" tabindex="-1"><a class="header-anchor" href="#development-setup" aria-hidden="true">#</a> Development Setup</h2><p>Pre-requirement:</p><ul><li><a href="http://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a> <strong>version 14+</strong></li><li><a href="https://classic.yarnpkg.com/en/docs/install" target="_blank" rel="noopener noreferrer">Yarn v1 classic</a></li></ul><p>Clone the repo, and install dependencies:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">yarn</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Start watching source files:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">yarn dev</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Open another terminal, and start developing the documentation site:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">yarn docs:dev</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Main tools that used in this project:</p><ul><li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a> as the development language</li><li><a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">Jest</a> for unit testing</li><li><a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">ESLint</a> + <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">Prettier</a> for code linting and formatting</li></ul><h2 id="scripts" tabindex="-1"><a class="header-anchor" href="#scripts" aria-hidden="true">#</a> Scripts</h2><h3 id="yarn-build" tabindex="-1"><a class="header-anchor" href="#yarn-build" aria-hidden="true">#</a> <code>yarn build</code></h3><p>The <code>build</code> script uses <code>tsc</code> to compile typescript source files to javascript dist files.</p><p>You may need to run this script first after your clone this repository, because the dist files are ignored by <code>.gitignore</code>.</p><h3 id="yarn-copy" tabindex="-1"><a class="header-anchor" href="#yarn-copy" aria-hidden="true">#</a> <code>yarn copy</code></h3><p>The <code>copy</code> script of root project runs <code>copy</code> script in all packages, copying some resources from source directory to dist directory.</p><p>Some source files (e.g. <code>.vue</code>, <code>.css</code> files) can not be processed by <code>build</code> script, but should keep the same relative path in the dist directory.</p><p>You may need to run this script after your clone this repository, too.</p><h3 id="yarn-dev" tabindex="-1"><a class="header-anchor" href="#yarn-dev" aria-hidden="true">#</a> <code>yarn dev</code></h3><p>The <code>dev</code> script runs <code>copy</code> and <code>build</code> scripts in watch mode.</p><h3 id="yarn-clean" tabindex="-1"><a class="header-anchor" href="#yarn-clean" aria-hidden="true">#</a> <code>yarn clean</code></h3><p>The <code>clean</code> script runs <code>clean</code> script in all packages, cleaning all the dist files and caches. In other words, it will remove all the files that generated by <code>build</code>, <code>copy</code> and <code>dev</code> scripts.</p><p>It&#39;s used before you want to re-build source files from a clean / initial state.</p><h3 id="yarn-docs" tabindex="-1"><a class="header-anchor" href="#yarn-docs" aria-hidden="true">#</a> <code>yarn docs:*</code></h3><h4 id="yarn-docs-build-yarn-docs-dev-yarn-docs-clean" tabindex="-1"><a class="header-anchor" href="#yarn-docs-build-yarn-docs-dev-yarn-docs-clean" aria-hidden="true">#</a> <code>yarn docs:build</code>, <code>yarn docs:dev</code>, <code>yarn docs:clean</code></h4><p>The <code>docs:</code> prefix indicates that these scripts are for documentation, i.e. the <code>docs</code> directory.</p><p>VuePress is using itself to build its own documentation site.</p><p>You need to run <code>yarn build &amp;&amp; yarn copy</code> to build VuePress source files first, then run these <code>docs:</code> scripts to develop and build our documentation.</p><h4 id="yarn-docs-serve" tabindex="-1"><a class="header-anchor" href="#yarn-docs-serve" aria-hidden="true">#</a> <code>yarn docs:serve</code></h4><p>Serve the documentation site locally.</p><p>You need to run <code>yarn docs:build</code> first to generate the documentation dist files, and then run <code>yarn docs:serve</code> to serve them.</p><h3 id="yarn-lint" tabindex="-1"><a class="header-anchor" href="#yarn-lint" aria-hidden="true">#</a> <code>yarn lint</code></h3><p>The <code>lint</code> script uses ESLint to check all source files.</p><h3 id="yarn-test" tabindex="-1"><a class="header-anchor" href="#yarn-test" aria-hidden="true">#</a> <code>yarn test</code></h3><p>The <code>test</code> script uses Jest to run unit testings.</p><h2 id="documentation" tabindex="-1"><a class="header-anchor" href="#documentation" aria-hidden="true">#</a> Documentation</h2><p>VuePress documentation is powered by VuePress itself, which is built from the source code of this repository.</p><p>All the markdown source files are placed in <code>docs</code> directory. We are maintaining two translations:</p><ul><li>English (en-US) in <code>/</code> path</li><li>Chinese (zh-CN) in <code>/zh/</code> path</li></ul><p>We have two different deployments:</p><ul><li>Release deployment powered by <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a>. This deployment is built from the latest released version, so users will not see unreleased changes. The domain name is <a href="https://v2.vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">https://v2.vuepress.vuejs.org</a>.</li><li>Developer deployment powered by <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">GitHub Pages</a>. This deployment is built from the latest commit, so developers could preview the latest changes. The domain name is <a href="https://vuepress.github.io" target="_blank" rel="noopener noreferrer">https://vuepress.github.io</a>.</li></ul>',46),r={},a=(0,n(83744).Z)(r,[["render",function(e,s){return t}]])}}]);