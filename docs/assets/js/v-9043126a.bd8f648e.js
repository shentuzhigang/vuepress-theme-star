"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2396],{31366:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-9043126a",path:"/zh/guide/plugin.html",title:"插件",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"社区插件",slug:"社区插件",children:[]},{level:2,title:"本地插件",slug:"本地插件",children:[]}],git:{updatedTime:1639901643e3,contributors:[{name:"meteorlxy",email:"meteor.lxy@foxmail.com",commits:9},{name:"Starzkg",email:"1600337300@qq.com",commits:2},{name:"shentuzhigang",email:"shentuzhigang@moresec.cn",commits:1}]},readingTime:{minutes:1.5,words:449},filePathRelative:"zh/guide/plugin.md",content:"# 插件\n\n借助于 [插件 API](../reference/plugin-api.md) ， VuePress 插件可以为你提供各种不同的功能。\n\n## 社区插件\n\n社区用户创建了很多插件，并将它们发布到了 [NPM](https://www.npmjs.com/search?q=keywords:vuepress-plugin) 上。 VuePress 团队也在 [@vuepress](https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin) Scope 下维护了一些官方插件。查看插件本身的文档可以获取更详细的指引。\n\n一般而言，你需要在 [plugins](../reference/config.md#plugins) 配置项中设置你要使用的插件名称：\n\n```js\nmodule.exports = {\n  plugins: [\n    'foo',\n    ['bar', { /* 配置项 */ }]\n  ],\n}\n```\n\n你可以使用插件名称或者它的简称：\n\n|          插件名称          |         简称         |\n|---------------------------|---------------------|\n| `vuepress-plugin-foo`     | `foo`               |\n| `@org/vuepress-plugin-bar`| `@org/bar`          |\n| `@vuepress/plugin-foobar` | `@vuepress/foobar`  |\n\n::: tip\n大部分插件只能使用一次，如果同一个插件被多次使用，那么只有最后一次会生效。\n\n然而，部分插件是可以被多次使用的（例如 [@vuepress/plugin-container](../reference/plugin/container.md)），你应该查看插件本身的文档来获取详细指引。\n:::\n\n## 本地插件\n\n如果你想要使用自己的插件，但是又不想发布它，你可以创建一个本地插件。\n\n推荐你直接将 [配置文件](./configuration.md#配置文件) 作为插件使用，因为 [几乎所有的插件 API 都可以在配置文件中使用](../reference/config.md#插件-api)\n，这在绝大多数场景下都更为方便。\n\n但是如果你在配置文件中要做的事情太多了，最好还是将它们提取到单独的插件中，然后通过设置绝对路径或者通过 require 来使用它们：\n\n```js\nmodule.exports = {\n  plugins: [\n    path.resolve(__dirname, './path/to/your-plugin.js'),\n    require('./another-plugin'),\n  ],\n}\n```\n\n前往 [深入 > 开发插件](../advanced/plugin.md) 学习如何开发你自己的插件。\n"}},80751:(n,s,e)=>{e.r(s),e.d(s,{default:()=>P});var a=e(66252);const l=(0,a._)("h1",{id:"插件",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#插件","aria-hidden":"true"},"#"),(0,a.Uk)(" 插件")],-1),p=(0,a.Uk)("借助于 "),r=(0,a.Uk)("插件 API"),o=(0,a.Uk)(" ， VuePress 插件可以为你提供各种不同的功能。"),t=(0,a._)("h2",{id:"社区插件",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#社区插件","aria-hidden":"true"},"#"),(0,a.Uk)(" 社区插件")],-1),c=(0,a._)("p",null,[(0,a.Uk)("社区用户创建了很多插件，并将它们发布到了 "),(0,a._)("a",{href:"https://www.npmjs.com/search?q=keywords:vuepress-plugin",target:"_blank",rel:"noopener noreferrer"},"NPM"),(0,a.Uk)(" 上。 VuePress 团队也在 "),(0,a._)("a",{href:"https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin",target:"_blank",rel:"noopener noreferrer"},"@vuepress"),(0,a.Uk)(" Scope 下维护了一些官方插件。查看插件本身的文档可以获取更详细的指引。")],-1),i=(0,a.Uk)("一般而言，你需要在 "),u=(0,a.Uk)("plugins"),d=(0,a.Uk)(" 配置项中设置你要使用的插件名称："),D=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;foo&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;bar&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#6A9955;">/* 配置项 */</span><span style="color:#D4D4D4;"> }]</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>你可以使用插件名称或者它的简称：</p><table><thead><tr><th>插件名称</th><th>简称</th></tr></thead><tbody><tr><td><code>vuepress-plugin-foo</code></td><td><code>foo</code></td></tr><tr><td><code>@org/vuepress-plugin-bar</code></td><td><code>@org/bar</code></td></tr><tr><td><code>@vuepress/plugin-foobar</code></td><td><code>@vuepress/foobar</code></td></tr></tbody></table>',3),m={class:"custom-container tip"},h=(0,a._)("p",{class:"custom-container-title"},"提示",-1),g=(0,a._)("p",null,"大部分插件只能使用一次，如果同一个插件被多次使用，那么只有最后一次会生效。",-1),y=(0,a.Uk)("然而，部分插件是可以被多次使用的（例如 "),b=(0,a.Uk)("@vuepress/plugin-container"),f=(0,a.Uk)("），你应该查看插件本身的文档来获取详细指引。"),k=(0,a._)("h2",{id:"本地插件",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#本地插件","aria-hidden":"true"},"#"),(0,a.Uk)(" 本地插件")],-1),v=(0,a._)("p",null,"如果你想要使用自己的插件，但是又不想发布它，你可以创建一个本地插件。",-1),_=(0,a.Uk)("推荐你直接将 "),E=(0,a.Uk)("配置文件"),w=(0,a.Uk)(" 作为插件使用，因为 "),C=(0,a.Uk)("几乎所有的插件 API 都可以在配置文件中使用"),U=(0,a.Uk)(" ，这在绝大多数场景下都更为方便。"),x=(0,a.uE)('<p>但是如果你在配置文件中要做的事情太多了，最好还是将它们提取到单独的插件中，然后通过设置绝对路径或者通过 require 来使用它们：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/your-plugin.js&#39;</span><span style="color:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">require</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;./another-plugin&#39;</span><span style="color:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',2),j=(0,a.Uk)("前往 "),z=(0,a.Uk)("深入 > 开发插件"),A=(0,a.Uk)(" 学习如何开发你自己的插件。"),B={},P=(0,e(83744).Z)(B,[["render",function(n,s){const e=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,(0,a._)("p",null,[p,(0,a.Wm)(e,{to:"/zh/reference/plugin-api.html"},{default:(0,a.w5)((()=>[r])),_:1}),o]),t,c,(0,a._)("p",null,[i,(0,a.Wm)(e,{to:"/zh/reference/config.html#plugins"},{default:(0,a.w5)((()=>[u])),_:1}),d]),D,(0,a._)("div",m,[h,g,(0,a._)("p",null,[y,(0,a.Wm)(e,{to:"/zh/reference/plugin/container.html"},{default:(0,a.w5)((()=>[b])),_:1}),f])]),k,v,(0,a._)("p",null,[_,(0,a.Wm)(e,{to:"/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:(0,a.w5)((()=>[E])),_:1}),w,(0,a.Wm)(e,{to:"/zh/reference/config.html#%E6%8F%92%E4%BB%B6-api"},{default:(0,a.w5)((()=>[C])),_:1}),U]),x,(0,a._)("p",null,[j,(0,a.Wm)(e,{to:"/zh/advanced/plugin.html"},{default:(0,a.w5)((()=>[z])),_:1}),A])],64)}]])}}]);