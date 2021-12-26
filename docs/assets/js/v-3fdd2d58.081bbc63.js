"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[605],{93355:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-3fdd2d58",path:"/vuepress-next/reference/plugin/google-analytics.html",title:"google-analytics",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install",slug:"install",children:[]},{level:2,title:"Reporting Events",slug:"reporting-events",children:[]},{level:2,title:"Options",slug:"options",children:[{level:3,title:"id",slug:"id",children:[]}]}],git:{updatedTime:1635758933e3,contributors:[{name:"shentuzhigang",email:"shentuzhigang@moresec.cn",commits:1}]},readingTime:{minutes:.66,words:198},filePathRelative:"vuepress-next/reference/plugin/google-analytics.md",content:"# google-analytics\n\n<NpmBadge package=\"@vuepress/plugin-google-analytics\" />\n\nIntegrate [Google Analytics](https://analytics.google.com/) into VuePress.\n\nThis plugin will import [gtag.js](https://developers.google.com/analytics/devguides/collection/gtagjs) for [Google Analytics 4](https://support.google.com/analytics/answer/10089681).\n\n## Install\n\n```bash\nnpm i -D @vuepress/plugin-google-analytics@next\n```\n\n## Reporting Events\n\nGoogle Analytics will [automatically collect some events](https://support.google.com/analytics/answer/9234069), such as `page_view`, `first_visit`, etc.\n\nSo if you only want to collect some basic data of your site, you don't need to do anything else except setting the [Measurement ID](#id) correctly.\n\nAfter using this plugin, the global `gtag()` function is available on the `window` object, and you can use it for [custom events reporting](https://developers.google.com/analytics/devguides/collection/ga4/events).\n\n## Options\n\n### id\n\n- Type: `string`\n\n- Details:\n\n  The Measurement ID of Google Analytics 4, which should start with `'G-'`.\n\n  You can follow the instructions [here](https://support.google.com/analytics/answer/9539598) to find your Measurement ID. Notice the difference between Google Analytics 4 Measurement ID (i.e. \"G-\" ID) and Universal Analytics Tracking ID (i.e. \"UA-\" ID).\n\n- Example:\n\n```js\nmodule.exports = {\n  plugins: [\n    [\n      '@vuepress/plugin-google-analytics',\n      {\n        id: 'G-XXXXXXXXXX',\n      },\n    ],\n  ],\n}\n```\n"}},86166:(e,n,s)=>{s.r(n),s.d(n,{default:()=>i});var a=s(66252);const l=(0,a._)("h1",{id:"google-analytics",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#google-analytics","aria-hidden":"true"},"#"),(0,a.Uk)(" google-analytics")],-1),o=(0,a.uE)('<p>Integrate <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">Google Analytics</a> into VuePress.</p><p>This plugin will import <a href="https://developers.google.com/analytics/devguides/collection/gtagjs" target="_blank" rel="noopener noreferrer">gtag.js</a> for <a href="https://support.google.com/analytics/answer/10089681" target="_blank" rel="noopener noreferrer">Google Analytics 4</a>.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-google-analytics@next</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="reporting-events" tabindex="-1"><a class="header-anchor" href="#reporting-events" aria-hidden="true">#</a> Reporting Events</h2><p>Google Analytics will <a href="https://support.google.com/analytics/answer/9234069" target="_blank" rel="noopener noreferrer">automatically collect some events</a>, such as <code>page_view</code>, <code>first_visit</code>, etc.</p><p>So if you only want to collect some basic data of your site, you don&#39;t need to do anything else except setting the <a href="#id">Measurement ID</a> correctly.</p><p>After using this plugin, the global <code>gtag()</code> function is available on the <code>window</code> object, and you can use it for <a href="https://developers.google.com/analytics/devguides/collection/ga4/events" target="_blank" rel="noopener noreferrer">custom events reporting</a>.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>The Measurement ID of Google Analytics 4, which should start with <code>&#39;G-&#39;</code>.</p><p>You can follow the instructions <a href="https://support.google.com/analytics/answer/9539598" target="_blank" rel="noopener noreferrer">here</a> to find your Measurement ID. Notice the difference between Google Analytics 4 Measurement ID (i.e. &quot;G-&quot; ID) and Universal Analytics Tracking ID (i.e. &quot;UA-&quot; ID).</p></li><li><p>Example:</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    [</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;@vuepress/plugin-google-analytics&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      {</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">id:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;G-XXXXXXXXXX&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">      },</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',12),t={},i=(0,s(83744).Z)(t,[["render",function(e,n){const s=(0,a.up)("NpmBadge");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,(0,a.Wm)(s,{package:"@vuepress/plugin-google-analytics"}),o],64)}]])}}]);