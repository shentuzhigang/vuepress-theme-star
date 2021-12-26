"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7887],{96834:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-e57a6d64",path:"/zh/guide/markdown/feature/mark.html",title:"标记",lang:"zh-CN",frontmatter:{title:"标记",icon:"write"},excerpt:'<h1 id="标记" tabindex="-1"><a class="header-anchor" href="#标记" aria-hidden="true">#</a> 标记</h1>\n<p>Make Markdown files in your VuePress site support markup.</p>\n',headers:[{level:2,title:"Configuration",slug:"configuration",children:[]},{level:2,title:"Syntax",slug:"syntax",children:[]},{level:2,title:"Demo",slug:"demo",children:[]}],git:{updatedTime:1636181996e3,contributors:[{name:"Starzkg",email:"1600337300@qq.com",commits:1},{name:"shentuzhigang",email:"shentuzhigang@moresec.cn",commits:1}]},readingTime:{minutes:.14,words:43},filePathRelative:"zh/guide/markdown/feature/mark.md",content:'\n# 标记\n\nMake Markdown files in your VuePress site support markup.\n\n\x3c!-- more --\x3e\n\n## Configuration\n\n```js {7}\nmodule.exports = {\n  plugins: [\n    [\n      "markdown-enhance",\n      {\n        // open tag\n        mark: true,\n      },\n    ],\n  ],\n};\n```\n\n## Syntax\n\nUse `== ==` to mark.\n\n## Demo\n\nMr. Hope is ==handsome==.\n\n```md\nMr. Hope is ==handsome==.\n```\n'}},7506:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});const e=(0,a(66252).uE)('<h1 id="标记" tabindex="-1"><a class="header-anchor" href="#标记" aria-hidden="true">#</a> 标记</h1><p>Make Markdown files in your VuePress site support markup.</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&quot;markdown-enhance&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#6A9955;">// open tag</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">mark:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">};</span></span>\n<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><p>Use <code>== ==</code> to mark.</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><p>Mr. Hope is <mark>handsome</mark>.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Mr. Hope is ==handsome==.</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',9),r={},l=(0,a(83744).Z)(r,[["render",function(n,s){return e}]])}}]);