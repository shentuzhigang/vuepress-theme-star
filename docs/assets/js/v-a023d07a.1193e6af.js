"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2346],{13397:(n,l,e)=>{e.r(l),e.d(l,{data:()=>t});const t={key:"v-a023d07a",path:"/zh/guide/component/badge.html",title:"徽章",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"属性",slug:"属性",children:[]},{level:2,title:"使用",slug:"使用",children:[]},{level:2,title:"示例",slug:"示例",children:[]}],git:{updatedTime:1638003515e3,contributors:[{name:"Starzkg",email:"1600337300@qq.com",commits:1}]},readingTime:{minutes:.63,words:190},filePathRelative:"zh/guide/component/badge.md",content:'# 徽章\n在MarkDown中使用徽章\n\n## 属性\ntext <Badge text="必填" type="danger" />\n\n- 类型：`string`\n- 默认值：""\n\n  徽章文字内容\n\ntype\n\n- 类型：`"tip" | "wraning" | "danger"`\n- 默认值：`"tip"`\n\n  徽章类型\n  - <Badge text="tip" type="tip" />\n  - <Badge text="warn" type="warning" />\n  - <Badge text="error" type="danger" />\n\ncolor <Badge text="可选" />\n- 类型：`string`\n\n  徽章颜色，CSS合法的颜色值\n\nvertical\n- 类型：`"top" | "middle" | "bottom" | undefined `\n- 默认值：`"undefined"`\n\n  徽章垂直方向的位置\n  -  顶部<Badge text="top" vertical="top" />\n  -  居中<Badge text="middle" vertical="middle" />\n  -  底部<Badge text="bottom" vertical="bottom" />\n\nis-dot\n- 类型：Boolean\n- 默认值：true\n\n  不显示 `text`  内容，显示一个小圆点\n\n小红点 <Badge  type="danger" is-dot/>\n\n\n## 使用\n在MarkDown中为标题或链接添加一些状态\n```markdown\n### Badge <Badge text="Building" type="warning" /> <Badge text="Starzkg" color="grey" />\n```\n\n## 示例\n- <Badge text="type" type="warning" />\n- <Badge text="color" color="grey" />\n'}},16791:(n,l,e)=>{e.r(l),e.d(l,{default:()=>q});var t=e(66252);const a=(0,t._)("h1",{id:"徽章",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#徽章","aria-hidden":"true"},"#"),(0,t.Uk)(" 徽章")],-1),i=(0,t._)("p",null,"在MarkDown中使用徽章",-1),d=(0,t._)("h2",{id:"属性",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),(0,t.Uk)(" 属性")],-1),r=(0,t.Uk)("text "),u=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Uk)("类型："),(0,t._)("code",null,"string")])]),(0,t._)("li",null,[(0,t._)("p",null,'默认值：""'),(0,t._)("p",null,"徽章文字内容")])],-1),o=(0,t._)("p",null,"type",-1),p=(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Uk)("类型："),(0,t._)("code",null,'"tip" | "wraning" | "danger"')])],-1),g=(0,t._)("p",null,[(0,t.Uk)("默认值："),(0,t._)("code",null,'"tip"')],-1),c=(0,t._)("p",null,"徽章类型",-1),s=(0,t.Uk)("color "),_=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Uk)("类型："),(0,t._)("code",null,"string")]),(0,t._)("p",null,"徽章颜色，CSS合法的颜色值")])],-1),m=(0,t._)("p",null,"vertical",-1),h=(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Uk)("类型："),(0,t._)("code",null,'"top" | "middle" | "bottom" | undefined ')])],-1),x=(0,t._)("p",null,[(0,t.Uk)("默认值："),(0,t._)("code",null,'"undefined"')],-1),k=(0,t._)("p",null,"徽章垂直方向的位置",-1),y=(0,t.Uk)("顶部"),B=(0,t.Uk)("居中"),b=(0,t.Uk)("底部"),w=(0,t._)("p",null,"is-dot",-1),v=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,"类型：Boolean")]),(0,t._)("li",null,[(0,t._)("p",null,"默认值：true"),(0,t._)("p",null,[(0,t.Uk)("不显示 "),(0,t._)("code",null,"text"),(0,t.Uk)(" 内容，显示一个小圆点")])])],-1),U=(0,t.Uk)("小红点 "),f=(0,t.uE)('<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>在MarkDown中为标题或链接添加一些状态</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;font-weight:bold;">### Badge &lt;Badge text=&quot;Building&quot; type=&quot;warning&quot; /&gt; &lt;Badge text=&quot;Starzkg&quot; color=&quot;grey&quot; /&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>',4),W={},q=(0,e(83744).Z)(W,[["render",function(n,l){const e=(0,t.up)("Badge");return(0,t.wg)(),(0,t.iD)(t.HY,null,[a,i,d,(0,t._)("p",null,[r,(0,t.Wm)(e,{text:"必填",type:"danger"})]),u,o,(0,t._)("ul",null,[p,(0,t._)("li",null,[g,c,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(e,{text:"tip",type:"tip"})]),(0,t._)("li",null,[(0,t.Wm)(e,{text:"warn",type:"warning"})]),(0,t._)("li",null,[(0,t.Wm)(e,{text:"error",type:"danger"})])])])]),(0,t._)("p",null,[s,(0,t.Wm)(e,{text:"可选"})]),_,m,(0,t._)("ul",null,[h,(0,t._)("li",null,[x,k,(0,t._)("ul",null,[(0,t._)("li",null,[y,(0,t.Wm)(e,{text:"top",vertical:"top"})]),(0,t._)("li",null,[B,(0,t.Wm)(e,{text:"middle",vertical:"middle"})]),(0,t._)("li",null,[b,(0,t.Wm)(e,{text:"bottom",vertical:"bottom"})])])])]),w,v,(0,t._)("p",null,[U,(0,t.Wm)(e,{type:"danger","is-dot":""})]),f,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(e,{text:"type",type:"warning"})]),(0,t._)("li",null,[(0,t.Wm)(e,{text:"color",color:"grey"})])])],64)}]])}}]);