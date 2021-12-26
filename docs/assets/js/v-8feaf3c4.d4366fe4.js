"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4696],{26662:(e,n,s)=>{s.r(n),s.d(n,{data:()=>l});const l={key:"v-8feaf3c4",path:"/zh/vuepress-next/reference/bundler/vite.html",title:"Vite",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"配置项",slug:"配置项",children:[{level:3,title:"viteOptions",slug:"viteoptions",children:[]},{level:3,title:"vuePluginOptions",slug:"vuepluginoptions",children:[]}]}],git:{updatedTime:1635758933e3,contributors:[{name:"shentuzhigang",email:"shentuzhigang@moresec.cn",commits:1}]},readingTime:{minutes:.92,words:277},filePathRelative:"zh/vuepress-next/reference/bundler/vite.md",content:"# Vite\n\n<NpmBadge package=\"@vuepress/bundler-vite\" />\n\nVite 打包工具是由 [@vuepress/bundler-vite](https://www.npmjs.com/package/@vuepress/bundler-vite) 包提供的。它是 [vuepress-vite](https://www.npmjs.com/package/vuepress-vite) 包的依赖之一，当然你也可以单独安装它：\n\n```bash\nnpm i -D @vuepress/bundler-vite@next\n```\n\n## 配置项\n\nVite 打包工具配置的参考文档，可以通过 [bundlerConfig](../config.md#bundlerconfig) 来设置这些配置。\n\n<CodeGroup>\n  <CodeGroupItem title=\"JS\" active>\n\n```js\nmodule.exports = {\n  // 在使用 vuepress-vite 包的时候，你可以忽略这个字段，因为 Vite 是默认打包工具\n  bundler: '@vuepress/bundler-vite',\n  // Vite 打包工具的配置项\n  bundlerConfig: {\n    // 查看下方\n  },\n}\n```\n\n  </CodeGroupItem>\n\n  <CodeGroupItem title=\"TS\">\n\n```ts\nimport type { ViteBundlerOptions } from '@vuepress/bundler-vite'\nimport { defineUserConfig } from '@vuepress/cli'\nimport type { DefaultThemeOptions } from '@vuepress/theme-default'\n\nexport default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({\n  // 在使用 vuepress-vite 包的时候，你可以忽略这个字段，因为 Vite 是默认打包工具\n  bundler: '@vuepress/bundler-vite',\n  // Vite 打包工具的配置项\n  bundlerConfig: {\n    // 查看下方\n  },\n})\n```\n\n  </CodeGroupItem>\n</CodeGroup>\n\n### viteOptions\n\n- 详情：\n\n  接收 Vite 的所有配置项。\n\n- 参考：\n  - [Vite > Config](https://cn.vitejs.dev/config/)\n\n### vuePluginOptions\n\n- 详情：\n\n  接收 [@vitejs/plugin-vue](https://www.npmjs.com/package/@vitejs/plugin-vue) 的所有配置项。\n\n- 参考：\n  - [Vite > 插件 > 官方插件](https://cn.vitejs.dev/plugins/#vitejsplugin-vue)\n"}},66218:(e,n,s)=>{s.r(n),s.d(n,{default:()=>D});var l=s(66252);const r=(0,l._)("h1",{id:"vite",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#vite","aria-hidden":"true"},"#"),(0,l.Uk)(" Vite")],-1),t=(0,l.uE)('<p>Vite 打包工具是由 <a href="https://www.npmjs.com/package/@vuepress/bundler-vite" target="_blank" rel="noopener noreferrer">@vuepress/bundler-vite</a> 包提供的。它是 <a href="https://www.npmjs.com/package/vuepress-vite" target="_blank" rel="noopener noreferrer">vuepress-vite</a> 包的依赖之一，当然你也可以单独安装它：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/bundler-vite@next</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2>',3),a=(0,l.Uk)("Vite 打包工具配置的参考文档，可以通过 "),o=(0,l.Uk)("bundlerConfig"),p=(0,l.Uk)(" 来设置这些配置。"),i=(0,l._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,l._)("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[(0,l._)("code",null,[(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#4EC9B0"}},"module"),(0,l._)("span",{style:{color:"#D4D4D4"}},"."),(0,l._)("span",{style:{color:"#4EC9B0"}},"exports"),(0,l._)("span",{style:{color:"#D4D4D4"}}," = {")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#6A9955"}},"// 在使用 vuepress-vite 包的时候，你可以忽略这个字段，因为 Vite 是默认打包工具")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#9CDCFE"}},"bundler:"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#CE9178"}},"'@vuepress/bundler-vite'"),(0,l._)("span",{style:{color:"#D4D4D4"}},",")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#6A9955"}},"// Vite 打包工具的配置项")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#9CDCFE"}},"bundlerConfig:"),(0,l._)("span",{style:{color:"#D4D4D4"}}," {")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"    "),(0,l._)("span",{style:{color:"#6A9955"}},"// 查看下方")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  },")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"}")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"})])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br")])],-1),c=(0,l._)("div",{class:"language-typescript ext-ts line-numbers-mode"},[(0,l._)("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[(0,l._)("code",null,[(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#C586C0"}},"import"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#C586C0"}},"type"),(0,l._)("span",{style:{color:"#D4D4D4"}}," { "),(0,l._)("span",{style:{color:"#9CDCFE"}},"ViteBundlerOptions"),(0,l._)("span",{style:{color:"#D4D4D4"}}," } "),(0,l._)("span",{style:{color:"#C586C0"}},"from"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#CE9178"}},"'@vuepress/bundler-vite'")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#C586C0"}},"import"),(0,l._)("span",{style:{color:"#D4D4D4"}}," { "),(0,l._)("span",{style:{color:"#9CDCFE"}},"defineUserConfig"),(0,l._)("span",{style:{color:"#D4D4D4"}}," } "),(0,l._)("span",{style:{color:"#C586C0"}},"from"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#CE9178"}},"'@vuepress/cli'")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#C586C0"}},"import"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#C586C0"}},"type"),(0,l._)("span",{style:{color:"#D4D4D4"}}," { "),(0,l._)("span",{style:{color:"#9CDCFE"}},"DefaultThemeOptions"),(0,l._)("span",{style:{color:"#D4D4D4"}}," } "),(0,l._)("span",{style:{color:"#C586C0"}},"from"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#CE9178"}},"'@vuepress/theme-default'")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"}),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#C586C0"}},"export"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#C586C0"}},"default"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#DCDCAA"}},"defineUserConfig"),(0,l._)("span",{style:{color:"#D4D4D4"}},"<"),(0,l._)("span",{style:{color:"#4EC9B0"}},"DefaultThemeOptions"),(0,l._)("span",{style:{color:"#D4D4D4"}},", "),(0,l._)("span",{style:{color:"#4EC9B0"}},"ViteBundlerOptions"),(0,l._)("span",{style:{color:"#D4D4D4"}},">({")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#6A9955"}},"// 在使用 vuepress-vite 包的时候，你可以忽略这个字段，因为 Vite 是默认打包工具")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#9CDCFE"}},"bundler:"),(0,l._)("span",{style:{color:"#D4D4D4"}}," "),(0,l._)("span",{style:{color:"#CE9178"}},"'@vuepress/bundler-vite'"),(0,l._)("span",{style:{color:"#D4D4D4"}},",")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#6A9955"}},"// Vite 打包工具的配置项")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  "),(0,l._)("span",{style:{color:"#9CDCFE"}},"bundlerConfig:"),(0,l._)("span",{style:{color:"#D4D4D4"}}," {")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"    "),(0,l._)("span",{style:{color:"#6A9955"}},"// 查看下方")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"  },")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"},[(0,l._)("span",{style:{color:"#D4D4D4"}},"})")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"line"})])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"9"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"10"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"11"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"12"),(0,l._)("br")])],-1),u=(0,l.uE)('<h3 id="viteoptions" tabindex="-1"><a class="header-anchor" href="#viteoptions" aria-hidden="true">#</a> viteOptions</h3><ul><li><p>详情：</p><p>接收 Vite 的所有配置项。</p></li><li><p>参考：</p><ul><li><a href="https://cn.vitejs.dev/config/" target="_blank" rel="noopener noreferrer">Vite &gt; Config</a></li></ul></li></ul><h3 id="vuepluginoptions" tabindex="-1"><a class="header-anchor" href="#vuepluginoptions" aria-hidden="true">#</a> vuePluginOptions</h3><ul><li><p>详情：</p><p>接收 <a href="https://www.npmjs.com/package/@vitejs/plugin-vue" target="_blank" rel="noopener noreferrer">@vitejs/plugin-vue</a> 的所有配置项。</p></li><li><p>参考：</p><ul><li><a href="https://cn.vitejs.dev/plugins/#vitejsplugin-vue" target="_blank" rel="noopener noreferrer">Vite &gt; 插件 &gt; 官方插件</a></li></ul></li></ul>',4),_={},D=(0,s(83744).Z)(_,[["render",function(e,n){const s=(0,l.up)("NpmBadge"),_=(0,l.up)("RouterLink"),D=(0,l.up)("CodeGroupItem"),d=(0,l.up)("CodeGroup");return(0,l.wg)(),(0,l.iD)(l.HY,null,[r,(0,l.Wm)(s,{package:"@vuepress/bundler-vite"}),t,(0,l._)("p",null,[a,(0,l.Wm)(_,{to:"/zh/vuepress-next/reference/config.html#bundlerconfig"},{default:(0,l.w5)((()=>[o])),_:1}),p]),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(D,{title:"JS",active:""},{default:(0,l.w5)((()=>[i])),_:1}),(0,l.Wm)(D,{title:"TS"},{default:(0,l.w5)((()=>[c])),_:1})])),_:1}),u],64)}]])}}]);