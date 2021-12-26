"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5582],{49874:(s,n,e)=>{e.r(n),e.d(n,{data:()=>a});const a={key:"v-029ba47b",path:"/zh/guide/assets.html",title:"静态资源",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"相对路径",slug:"相对路径",children:[]},{level:2,title:"Public 文件",slug:"public-文件",children:[{level:3,title:"Base Helper",slug:"base-helper",children:[]}]},{level:2,title:"依赖包和路径别名",slug:"依赖包和路径别名",children:[]}],git:{updatedTime:1636181996e3,contributors:[{name:"meteorlxy",email:"meteor.lxy@foxmail.com",commits:6},{name:"Starzkg",email:"1600337300@qq.com",commits:1},{name:"shentuzhigang",email:"shentuzhigang@moresec.cn",commits:1}]},readingTime:{minutes:2.16,words:647},filePathRelative:"zh/guide/assets.md",content:'# 静态资源\n\n## 相对路径\n\n你可以在你的 Markdown 内容中使用相对路径来引用静态资源：\n\n```md\n![图片](./image.png)\n```\n\n一般情况下，我们推荐你使用这种方式来引用图片，因为人们通常会把图片放在引用它的 Markdown 文件附近。\n\n## Public 文件\n\n你可以把一些静态资源放在 Public 目录中，它们会被复制到最终生成的网站的根目录下。\n\n默认的 Public 目录是  `.vuepress/public` ，可以通过配置来修改。\n\n在下列这些情况中，你可能会用到它：\n\n- 你可能需要提供一些静态资源，但是它们并不直接被你的 Markdown 文件引用，比如 favicon 和 PWA 图标。\n- 你可能想要托管一些共享的静态资源，甚至可能需要在你的网站外部引用它，比如 Logo 图片。\n- 你可能想在你的 Markdown 内容中通过绝对路径来引入图片。\n\n以我们文档的源文件为例，我们把 VuePress 的 Logo 放在了 Public 目录下：\n\n```bash\n└─ docs\n   ├─ .vuepress\n   |  └─ public\n   |     └─ images\n   |        └─ hero.png  # <- Logo 文件\n   └─ guide\n      └─ assets.md       # <- 我们在这里\n```\n\n我们可以这样在当前页面引用 Logo ：\n\n**Input**\n\n```md\n![VuePress Logo](/images/hero.png)\n```\n\n**Output**\n\n![VuePress Logo](/images/hero.png)\n\n::: tip\n配置参考： [public](../reference/config.md#public)\n:::\n\n### Base Helper\n\n如果你的网站部署在非根路径下，即 [base](../reference/config.md#base) 不是 `"/"` ，你需要把 `base` 添加到 Public 文件的绝对路径前。\n\n举例来说，如果你想要把网站部署到 `https://foo.github.io/bar/` ，那么应该把 `base` 设置为 `"/bar/"` ，此时你必须在 Markdown 文件中这样引用 Public 文件：\n\n```md\n![VuePress Logo](/bar/images/hero.png)\n```\n\n显然，一旦某一天你修改了 `base`，这样的路径引用将会显得异常脆弱。这也是我们推荐你使用相对路径来引用静态文件的原因。\n\n为了解决这个问题，VuePress 提供了内置的一个 Helper `$withBase` ，它可以帮助你生成正确的路径：\n\n```md\n<img :src="$withBase(\'/images/hero.png\')" alt="VuePress Logo">\n```\n\n在 Markdown 中使用这个 Helper 会显得有些冗长，因此它可能对主题和插件作者更有帮助。\n\n::: tip\n配置参考： [base](../reference/config.md#base)\n:::\n\n## 依赖包和路径别名\n\n尽管这不是常见用法，但是你可以从依赖包中引用图片：\n\n```bash\nnpm install -D package-name\n```\n\n```md\n![来自依赖包的图片](package-name/image.png)\n```\n\n在配置文件中设置的路径别名也同样支持：\n\n```js\nmodule.exports = {\n  alias: {\n    \'@alias\': path.resolve(__dirname, \'./path/to/some/dir\'),\n  },\n}\n```\n\n```md\n![来自路径别名的图片](@alias/image.png)\n```\n\n::: tip\n配置参考： [alias](../reference/config.md#alias)\n:::\n'}},93369:(s,n,e)=>{e.r(n),e.d(n,{default:()=>L});var a=e(66252);const l=(0,a.uE)('<h1 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h1><h2 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径" aria-hidden="true">#</a> 相对路径</h2><p>你可以在你的 Markdown 内容中使用相对路径来引用静态资源：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">图片</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">(</span><span style="color:#D4D4D4;text-decoration:underline;">./image.png</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>一般情况下，我们推荐你使用这种方式来引用图片，因为人们通常会把图片放在引用它的 Markdown 文件附近。</p><h2 id="public-文件" tabindex="-1"><a class="header-anchor" href="#public-文件" aria-hidden="true">#</a> Public 文件</h2><p>你可以把一些静态资源放在 Public 目录中，它们会被复制到最终生成的网站的根目录下。</p><p>默认的 Public 目录是 <code>.vuepress/public</code> ，可以通过配置来修改。</p><p>在下列这些情况中，你可能会用到它：</p><ul><li>你可能需要提供一些静态资源，但是它们并不直接被你的 Markdown 文件引用，比如 favicon 和 PWA 图标。</li><li>你可能想要托管一些共享的静态资源，甚至可能需要在你的网站外部引用它，比如 Logo 图片。</li><li>你可能想在你的 Markdown 内容中通过绝对路径来引入图片。</li></ul><p>以我们文档的源文件为例，我们把 VuePress 的 Logo 放在了 Public 目录下：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">└─ docs</span></span>\n<span class="line"><span style="color:#D4D4D4;">   ├─ .vuepress</span></span>\n<span class="line"><span style="color:#D4D4D4;">   |  └─ public</span></span>\n<span class="line"><span style="color:#D4D4D4;">   |     └─ images</span></span>\n<span class="line"><span style="color:#D4D4D4;">   |        └─ hero.png  </span><span style="color:#6A9955;"># &lt;- Logo 文件</span></span>\n<span class="line"><span style="color:#D4D4D4;">   └─ guide</span></span>\n<span class="line"><span style="color:#D4D4D4;">      └─ assets.md       </span><span style="color:#6A9955;"># &lt;- 我们在这里</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>我们可以这样在当前页面引用 Logo ：</p><p><strong>Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">VuePress Logo</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">(</span><span style="color:#D4D4D4;text-decoration:underline;">/images/hero.png</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Output</strong></p><p><img src="/images/hero.png" alt="VuePress Logo"></p>',17),p={class:"custom-container tip"},o=(0,a._)("p",{class:"custom-container-title"},"提示",-1),r=(0,a.Uk)("配置参考： "),c=(0,a.Uk)("public"),i=(0,a._)("h3",{id:"base-helper",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#base-helper","aria-hidden":"true"},"#"),(0,a.Uk)(" Base Helper")],-1),t=(0,a.Uk)("如果你的网站部署在非根路径下，即 "),d=(0,a.Uk)("base"),u=(0,a.Uk)(" 不是 "),D=(0,a._)("code",null,'"/"',-1),m=(0,a.Uk)(" ，你需要把 "),b=(0,a._)("code",null,"base",-1),g=(0,a.Uk)(" 添加到 Public 文件的绝对路径前。"),h=(0,a.uE)('<p>举例来说，如果你想要把网站部署到 <code>https://foo.github.io/bar/</code> ，那么应该把 <code>base</code> 设置为 <code>&quot;/bar/&quot;</code> ，此时你必须在 Markdown 文件中这样引用 Public 文件：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">VuePress Logo</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">(</span><span style="color:#D4D4D4;text-decoration:underline;">/bar/images/hero.png</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>显然，一旦某一天你修改了 <code>base</code>，这样的路径引用将会显得异常脆弱。这也是我们推荐你使用相对路径来引用静态文件的原因。</p><p>为了解决这个问题，VuePress 提供了内置的一个 Helper <code>$withBase</code> ，它可以帮助你生成正确的路径：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">&lt;img :src=&quot;$withBase(&#39;/images/hero.png&#39;)&quot; alt=&quot;VuePress Logo&quot;&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在 Markdown 中使用这个 Helper 会显得有些冗长，因此它可能对主题和插件作者更有帮助。</p>',6),y={class:"custom-container tip"},k=(0,a._)("p",{class:"custom-container-title"},"提示",-1),v=(0,a.Uk)("配置参考： "),E=(0,a.Uk)("base"),f=(0,a.uE)('<h2 id="依赖包和路径别名" tabindex="-1"><a class="header-anchor" href="#依赖包和路径别名" aria-hidden="true">#</a> 依赖包和路径别名</h2><p>尽管这不是常见用法，但是你可以从依赖包中引用图片：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm install -D package-name</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">来自依赖包的图片</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">(</span><span style="color:#D4D4D4;text-decoration:underline;">package-name/image.png</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在配置文件中设置的路径别名也同样支持：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">alias:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;@alias&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/some/dir&#39;</span><span style="color:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">来自路径别名的图片</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">(</span><span style="color:#D4D4D4;text-decoration:underline;">@alias/image.png</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',7),w={class:"custom-container tip"},P=(0,a._)("p",{class:"custom-container-title"},"提示",-1),x=(0,a.Uk)("配置参考： "),C=(0,a.Uk)("alias"),_={},L=(0,e(83744).Z)(_,[["render",function(s,n){const e=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,(0,a._)("div",p,[o,(0,a._)("p",null,[r,(0,a.Wm)(e,{to:"/zh/reference/config.html#public"},{default:(0,a.w5)((()=>[c])),_:1})])]),i,(0,a._)("p",null,[t,(0,a.Wm)(e,{to:"/zh/reference/config.html#base"},{default:(0,a.w5)((()=>[d])),_:1}),u,D,m,b,g]),h,(0,a._)("div",y,[k,(0,a._)("p",null,[v,(0,a.Wm)(e,{to:"/zh/reference/config.html#base"},{default:(0,a.w5)((()=>[E])),_:1})])]),f,(0,a._)("div",w,[P,(0,a._)("p",null,[x,(0,a.Wm)(e,{to:"/zh/reference/config.html#alias"},{default:(0,a.w5)((()=>[C])),_:1})])])],64)}]])}}]);