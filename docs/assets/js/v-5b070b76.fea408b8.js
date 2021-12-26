"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7133],{95590:(n,s,e)=>{e.r(s),e.d(s,{data:()=>o});const o={key:"v-5b070b76",path:"/guide/markdown/footnote.html",title:"Footnote",lang:"en-US",frontmatter:{title:"Footnote",icon:"footnote",category:"markdown",tags:["feature","markdown"]},excerpt:"<p>Let the Markdown file in your VuePress site support footnotes.</p>\n",headers:[{level:2,title:"Configuration",slug:"configuration",children:[]},{level:2,title:"Syntax",slug:"syntax",children:[]},{level:2,title:"Case",slug:"case",children:[]}],git:{updatedTime:1635925377e3,contributors:[{name:"shentuzhigang",email:"shentuzhigang@moresec.cn",commits:1}]},readingTime:{minutes:.42,words:125},filePathRelative:"guide/markdown/footnote.md",content:'\nLet the Markdown file in your VuePress site support footnotes.\n\n\x3c!-- more --\x3e\n\n## Configuration\n\n```js {7}\nmodule.exports = {\n  plugins: [\n    [\n      "markdown-enhance",\n      {\n        // Enable Footnote\n        footnote: true,\n      },\n    ],\n  ],\n};\n```\n\n## Syntax\n\n- Use `[^Anchor text]` in Markdown to define a footnote\n\n- Use `[^Anchor text]: ...` to describe footnote content\n\n- If there are muti paragraph in footnote, the paragraph show be double indented\n\n## Case\n\nFootnote 1 link[^first].\n\nFootnote 2 link[^second].\n\nInline footnote^[Text of inline footnote] definition.\n\nDuplicated footnote reference[^second].\n\n[^first]: Footnote **can have markup**\n\n    and multiple paragraphs.\n\n[^second]: Footnote text.\n\n```md\nFootnote 1 link[^first].\n\nFootnote 2 link[^second].\n\nInline footnote^[Text of inline footnote] definition.\n\nDuplicated footnote reference[^second].\n\n[^first]: Footnote **can have markup**\n\n    and multiple paragraphs.\n\n[^second]: Footnote text.\n```\n'}},84308:(n,s,e)=>{e.r(s),e.d(s,{default:()=>t});const o=(0,e(66252).uE)('<p>Let the Markdown file in your VuePress site support footnotes.</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&quot;markdown-enhance&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#6A9955;">// Enable Footnote</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">footnote:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">};</span></span>\n<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><ul><li><p>Use <code>[^Anchor text]</code> in Markdown to define a footnote</p></li><li><p>Use <code>[^Anchor text]: ...</code> to describe footnote content</p></li><li><p>If there are muti paragraph in footnote, the paragraph show be double indented</p></li></ul><h2 id="case" tabindex="-1"><a class="header-anchor" href="#case" aria-hidden="true">#</a> Case</h2><p>Footnote 1 link<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p><p>Footnote 2 link<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>.</p><p>Inline footnote<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup> definition.</p><p>Duplicated footnote reference<sup class="footnote-ref"><a href="#footnote2">[2:1]</a><a class="footnote-anchor" id="footnote-ref2:1"></a></sup>.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Footnote 1 link</span><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">^first</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">.</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">Footnote 2 link</span><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">^second</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">.</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">Inline footnote^[Text of inline footnote] definition.</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">Duplicated footnote reference</span><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">^second</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">.</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">^first</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">: Footnote </span><span style="color:#569CD6;font-weight:bold;">**can have markup**</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">    and multiple paragraphs.</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">^second</span><span style="color:#D4D4D4;">]</span><span style="color:#D4D4D4;">: Footnote text.</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>Footnote <strong>can have markup</strong></p><p>and multiple paragraphs. <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>Footnote text. <a href="#footnote-ref2" class="footnote-backref">↩︎</a> <a href="#footnote-ref2:1" class="footnote-backref">↩︎</a></p></li><li id="footnote3" class="footnote-item"><p>Text of inline footnote <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p></li></ol></section>',13),a={},t=(0,e(83744).Z)(a,[["render",function(n,s){return o}]])}}]);