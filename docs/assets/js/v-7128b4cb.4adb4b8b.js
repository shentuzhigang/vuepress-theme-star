"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3362],{12528:(s,n,e)=>{e.r(n),e.d(n,{data:()=>a});const a={key:"v-7128b4cb",path:"/vuepress-next/advanced/cookbook/passing-data-to-client-code.html",title:"Passing Data to Client Code",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Use define Hook",slug:"use-define-hook",children:[]},{level:2,title:"Write and Load Temp Files",slug:"write-and-load-temp-files",children:[]}],git:{updatedTime:1635758933e3,contributors:[{name:"shentuzhigang",email:"shentuzhigang@moresec.cn",commits:1}]},readingTime:{minutes:.84,words:252},filePathRelative:"vuepress-next/advanced/cookbook/passing-data-to-client-code.md",content:"# Passing Data to Client Code\n\nAs we know, VuePress plugin entries and theme entries are processed in Node side, but sometimes you might need to pass data to client side. For example, you want to generate different data when users use different options.\n\n## Use `define` Hook\n\nPlugin API provides a [define](../../reference/plugin-api.md#define) hook to define global constants for client code. You can make use of it to pass data to client.\n\nFirst, define some constants in `define` hook:\n\n```js\nmodule.exports = (options) => ({\n  define: {\n    __FOO__: options.foo || 'str',\n    __OBJ__: {\n      bar: options.bar || 123,\n    },\n  },\n})\n```\n\nThen use them in client code directly:\n\n```js\nconst foo = __FOO__\nconst obj = __OBJ__\n```\n\nIf you are using TypeScript in client code, you may need to declare the types of the global constants manually:\n\n```ts\ndeclare const __FOO__: string\ndeclare const __OBJ__: { bar: number }\n```\n\n## Write and Load Temp Files\n\nIf you need to achieve some more complex features, you can write temp files and load them dynamically in client code.\n\nFirst, write a temp file `foo.js`, which will be generated in the [temp](../../reference/config.md#temp) directory:\n\n```js\nmodule.exports = (options) => ({\n  async onPrepared(app) {\n    // write temp file\n    await app.writeTemp('foo.js', `export const foo = ${JSON.stringify(options.foo)}`)\n  },\n})\n```\n\nThen, load the temp file via `@temp` alias in client code:\n\n```js\nimport { foo } from '@temp/foo'\n```\n\nIf you are using TypeScript in client code, you may need to declare the type of the temp module manually:\n\n```ts\ndeclare module '@temp/foo' {\n  export const foo: string\n}\n```\n"}},38274:(s,n,e)=>{e.r(n),e.d(n,{default:()=>b});var a=e(66252);const o=(0,a._)("h1",{id:"passing-data-to-client-code",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#passing-data-to-client-code","aria-hidden":"true"},"#"),(0,a.Uk)(" Passing Data to Client Code")],-1),l=(0,a._)("p",null,"As we know, VuePress plugin entries and theme entries are processed in Node side, but sometimes you might need to pass data to client side. For example, you want to generate different data when users use different options.",-1),p=(0,a._)("h2",{id:"use-define-hook",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#use-define-hook","aria-hidden":"true"},"#"),(0,a.Uk)(" Use "),(0,a._)("code",null,"define"),(0,a.Uk)(" Hook")],-1),t=(0,a.Uk)("Plugin API provides a "),r=(0,a.Uk)("define"),c=(0,a.Uk)(" hook to define global constants for client code. You can make use of it to pass data to client."),i=(0,a.uE)('<p>First, define some constants in <code>define</code> hook:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> ({</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">define:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">__FOO__:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> || </span><span style="color:#CE9178;">&#39;str&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">__OBJ__:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">bar:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> || </span><span style="color:#B5CEA8;">123</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    },</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">})</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Then use them in client code directly:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">__FOO__</span></span>\n<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">obj</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">__OBJ__</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>If you are using TypeScript in client code, you may need to declare the types of the global constants manually:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">declare</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__FOO__</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"><span style="color:#569CD6;">declare</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__OBJ__</span><span style="color:#D4D4D4;">: { </span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;"> }</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="write-and-load-temp-files" tabindex="-1"><a class="header-anchor" href="#write-and-load-temp-files" aria-hidden="true">#</a> Write and Load Temp Files</h2><p>If you need to achieve some more complex features, you can write temp files and load them dynamically in client code.</p>',8),D=(0,a.Uk)("First, write a temp file "),d=(0,a._)("code",null,"foo.js",-1),y=(0,a.Uk)(", which will be generated in the "),u=(0,a.Uk)("temp"),m=(0,a.Uk)(" directory:"),f=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> ({</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">onPrepared</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// write temp file</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">writeTemp</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;foo.js&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">`export const foo = </span><span style="color:#569CD6;">${</span><span style="color:#4EC9B0;">JSON</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">stringify</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">)</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">`</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">})</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Then, load the temp file via <code>@temp</code> alias in client code:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@temp/foo&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>If you are using TypeScript in client code, you may need to declare the type of the temp module manually:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">declare</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">module</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@temp/foo&#39;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">foo</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',5),C={},b=(0,e(83744).Z)(C,[["render",function(s,n){const e=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,l,p,(0,a._)("p",null,[t,(0,a.Wm)(e,{to:"/vuepress-next/reference/plugin-api.html#define"},{default:(0,a.w5)((()=>[r])),_:1}),c]),i,(0,a._)("p",null,[D,d,y,(0,a.Wm)(e,{to:"/vuepress-next/reference/config.html#temp"},{default:(0,a.w5)((()=>[u])),_:1}),m]),f],64)}]])}}]);