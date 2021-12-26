"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3357],{36014:(e,n,r)=>{r.r(n),r.d(n,{data:()=>l});const l={key:"v-a25d55a6",path:"/zh/vuepress-next/advanced/architecture.html",title:"架构",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"概览",slug:"概览",children:[]},{level:2,title:"核心流程与 Hooks",slug:"核心流程与-hooks",children:[]}],git:{updatedTime:1639839959e3,contributors:[{name:"Starzkg",email:"1600337300@qq.com",commits:1},{name:"shentuzhigang",email:"shentuzhigang@moresec.cn",commits:1}]},readingTime:{minutes:1.48,words:445},filePathRelative:"zh/vuepress-next/advanced/architecture.md",content:"# 架构\n\n## 概览\n\n![vuepress-architecture-overview](/images/guide/vuepress-architecture-overview.png)\n\n上图展示了 VuePress 的简要架构：\n\n- Node App 会生成临时文件，包括布局、页面、路由等。\n- Bundler 会将 Client App 和临时文件一起进行打包，就像处理一个普通的 Vue SPA 一样。\n\n作为开发者，你必须要意识到 VuePress 分为两个主要部分： **Node App** 和 **Client App** ，这一点对于开发插件和主题来说都十分重要。\n\n- 插件或者主题的入口文件会在 Node App 中被加载，因此它们需要使用 CommonJS 格式。\n- 客户端文件会在 Client App 中被加载，也就是会被 Bundler 处理。比如布局、组件、App Setup 文件、App Enhance 文件等。它们最好使用 ESM 格式。\n\n## 核心流程与 Hooks\n\n![vuepress-core-process](/images/guide/vuepress-core-process.png)\n\n上图展示了 VuePress 的核心流程以及 [插件 API](../reference/plugin-api.md) 的 Hooks ：\n\n- 在 **init** 阶段：\n  - 主题和插件会被加载。这意味着插件需要在初始化之前使用。\n  - 由于我们要使用 markdown-it 来解析 Markdown 文件，因此需要在加载页面文件之前创建 markdown-it 实例：\n    - [extendsMarkdownOptions](../reference/plugin-api.md#extendsmarkdownoptions) Hook 会被调用，用以创建 markdown-it 实例。\n    - [extendsMarkdown](../reference/plugin-api.md#extendsmarkdown) Hook 会被调用，用以扩展 markdown-it 实例。\n  - 页面文件会被加载：\n    - [extendsPageOptions](../reference/plugin-api.md#extendspageoptions) Hook 会被调用，用以创建页面。\n    - [extendsPage](../reference/plugin-api.md#extendspage) Hook 会被调用，用以扩展页面对象。\n- 在 **prepare** 阶段：\n  - 临时文件会被生成，因此所有和客户端文件相关的 Hooks 会在此处调用。\n- 在 **dev / build** 阶段：\n  - Bundler 会被加载。由于 [alias](../reference/plugin-api.md#alias) 和 [define](../reference/plugin-api.md#define) 依赖于 Bundler 的配置，所以它们会在此处调用。\n"}},16653:(e,n,r)=>{r.r(n),r.d(n,{default:()=>V});var l=r(66252);const i=(0,l.uE)('<h1 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h1><h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h2><p><img src="/images/guide/vuepress-architecture-overview.png" alt="vuepress-architecture-overview"></p><p>上图展示了 VuePress 的简要架构：</p><ul><li>Node App 会生成临时文件，包括布局、页面、路由等。</li><li>Bundler 会将 Client App 和临时文件一起进行打包，就像处理一个普通的 Vue SPA 一样。</li></ul><p>作为开发者，你必须要意识到 VuePress 分为两个主要部分： <strong>Node App</strong> 和 <strong>Client App</strong> ，这一点对于开发插件和主题来说都十分重要。</p><ul><li>插件或者主题的入口文件会在 Node App 中被加载，因此它们需要使用 CommonJS 格式。</li><li>客户端文件会在 Client App 中被加载，也就是会被 Bundler 处理。比如布局、组件、App Setup 文件、App Enhance 文件等。它们最好使用 ESM 格式。</li></ul><h2 id="核心流程与-hooks" tabindex="-1"><a class="header-anchor" href="#核心流程与-hooks" aria-hidden="true">#</a> 核心流程与 Hooks</h2><p><img src="/images/guide/vuepress-core-process.png" alt="vuepress-core-process"></p>',9),t=(0,l.Uk)("上图展示了 VuePress 的核心流程以及 "),s=(0,l.Uk)("插件 API"),a=(0,l.Uk)(" 的 Hooks ："),u=(0,l.Uk)("在 "),o=(0,l._)("strong",null,"init",-1),p=(0,l.Uk)(" 阶段： "),d=(0,l._)("li",null,"主题和插件会被加载。这意味着插件需要在初始化之前使用。",-1),k=(0,l.Uk)("由于我们要使用 markdown-it 来解析 Markdown 文件，因此需要在加载页面文件之前创建 markdown-it 实例： "),c=(0,l.Uk)("extendsMarkdownOptions"),h=(0,l.Uk)(" Hook 会被调用，用以创建 markdown-it 实例。"),m=(0,l.Uk)("extendsMarkdown"),g=(0,l.Uk)(" Hook 会被调用，用以扩展 markdown-it 实例。"),f=(0,l.Uk)("页面文件会被加载： "),v=(0,l.Uk)("extendsPageOptions"),w=(0,l.Uk)(" Hook 会被调用，用以创建页面。"),x=(0,l.Uk)("extendsPage"),_=(0,l.Uk)(" Hook 会被调用，用以扩展页面对象。"),U=(0,l._)("li",null,[(0,l.Uk)("在 "),(0,l._)("strong",null,"prepare"),(0,l.Uk)(" 阶段： "),(0,l._)("ul",null,[(0,l._)("li",null,"临时文件会被生成，因此所有和客户端文件相关的 Hooks 会在此处调用。")])],-1),A=(0,l.Uk)("在 "),H=(0,l._)("strong",null,"dev / build",-1),P=(0,l.Uk)(" 阶段： "),z=(0,l.Uk)("Bundler 会被加载。由于 "),C=(0,l.Uk)("alias"),S=(0,l.Uk)(" 和 "),b=(0,l.Uk)("define"),B=(0,l.Uk)(" 依赖于 Bundler 的配置，所以它们会在此处调用。"),M={},V=(0,r(83744).Z)(M,[["render",function(e,n){const r=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[i,(0,l._)("p",null,[t,(0,l.Wm)(r,{to:"/zh/vuepress-next/reference/plugin-api.html"},{default:(0,l.w5)((()=>[s])),_:1}),a]),(0,l._)("ul",null,[(0,l._)("li",null,[u,o,p,(0,l._)("ul",null,[d,(0,l._)("li",null,[k,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(r,{to:"/zh/vuepress-next/reference/plugin-api.html#extendsmarkdownoptions"},{default:(0,l.w5)((()=>[c])),_:1}),h]),(0,l._)("li",null,[(0,l.Wm)(r,{to:"/zh/vuepress-next/reference/plugin-api.html#extendsmarkdown"},{default:(0,l.w5)((()=>[m])),_:1}),g])])]),(0,l._)("li",null,[f,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(r,{to:"/zh/vuepress-next/reference/plugin-api.html#extendspageoptions"},{default:(0,l.w5)((()=>[v])),_:1}),w]),(0,l._)("li",null,[(0,l.Wm)(r,{to:"/zh/vuepress-next/reference/plugin-api.html#extendspage"},{default:(0,l.w5)((()=>[x])),_:1}),_])])])])]),U,(0,l._)("li",null,[A,H,P,(0,l._)("ul",null,[(0,l._)("li",null,[z,(0,l.Wm)(r,{to:"/zh/vuepress-next/reference/plugin-api.html#alias"},{default:(0,l.w5)((()=>[C])),_:1}),S,(0,l.Wm)(r,{to:"/zh/vuepress-next/reference/plugin-api.html#define"},{default:(0,l.w5)((()=>[b])),_:1}),B])])])])],64)}]])}}]);