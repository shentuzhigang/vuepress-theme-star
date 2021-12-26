"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1754],{6804:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a={key:"v-ddf4bb7c",path:"/vuepress-next/reference/cli.html",title:"Command Line Interface",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"dev",slug:"dev",children:[]},{level:2,title:"build",slug:"build",children:[]},{level:2,title:"info",slug:"info",children:[]}],git:{updatedTime:1635758933e3,contributors:[{name:"shentuzhigang",email:"shentuzhigang@moresec.cn",commits:1}]},readingTime:{minutes:1.23,words:370},filePathRelative:"vuepress-next/reference/cli.md",content:'# Command Line Interface\n\n<NpmBadge package="@vuepress/cli" />\n\nVuePress CLI is provided by [@vuepress/cli](https://www.npmjs.com/package/@vuepress/cli) package. It is a dependency of the [vuepress](https://www.npmjs.com/package/vuepress) package, and you can also install it separately.\n\nRun `vuepress --help` to get following help messages:\n\n```bash\nUsage:\n  $ vuepress <command> [options]\n\nCommands:\n  dev [sourceDir]    Start development server\n  build [sourceDir]  Build to static site\n  info               Display environment information\n\nFor more info, run any command with the `--help` flag:\n  $ vuepress dev --help\n  $ vuepress build --help\n  $ vuepress info --help\n\nOptions:\n  -v, --version  Display version number \n  -h, --help     Display this message \n```\n\n::: tip\nVuePress is using [debug](https://www.npmjs.com/package/debug) module.\n\nSet environment variable `DEBUG=vuepress*` to enable debug logs.\n:::\n\n## dev\n\nStart a development server to develop your VuePress site locally.\n\n```bash\nUsage:\n  $ vuepress dev [sourceDir]\n\nOptions:\n  -c, --config <config>  Set path to config file \n  -p, --port <port>      Use specified port (default: 8080) \n  -t, --temp <temp>      Set the directory of the temporary files \n  --host <host>          Use specified host (default: 0.0.0.0) \n  --cache <cache>        Set the directory of the cache files \n  --clean-temp           Clean the temporary files before dev \n  --clean-cache          Clean the cache files before dev \n  --open                 Open browser when ready \n  --debug                Enable debug mode \n  --no-watch             Disable watching page and config files (default: true)\n  -v, --version          Display version number \n  -h, --help             Display this message\n```\n\n::: tip\nOptions set by CLI will override those options with the same name in your config file.\n:::\n\n## build\n\nBuild your VuePress site to static files, which are ready for [deployment](../guide/deployment.md).\n\n```bash\nUsage:\n  $ vuepress build [sourceDir]\n\nOptions:\n  -c, --config <config>  Set path to config file \n  -d, --dest <dest>      Set the directory build output (default: .vuepress/dist) \n  -t, --temp <temp>      Set the directory of the temporary files \n  --cache <cache>        Set the directory of the cache files \n  --clean-temp           Clean the temporary files before build \n  --clean-cache          Clean the cache files before build \n  --debug                Enable debug mode \n  -v, --version          Display version number \n  -h, --help             Display this message\n```\n\n::: tip\nOptions set by CLI will override those options with the same name in your config file.\n:::\n\n## info\n\nOutputs information about your system and dependencies.\n\nThis command would be helpful when you want to check your environment or report an issue.\n'}},35452:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});var a=n(66252);const l=(0,a._)("h1",{id:"command-line-interface",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#command-line-interface","aria-hidden":"true"},"#"),(0,a.Uk)(" Command Line Interface")],-1),p=(0,a.uE)('<p>VuePress CLI is provided by <a href="https://www.npmjs.com/package/@vuepress/cli" target="_blank" rel="noopener noreferrer">@vuepress/cli</a> package. It is a dependency of the <a href="https://www.npmjs.com/package/vuepress" target="_blank" rel="noopener noreferrer">vuepress</a> package, and you can also install it separately.</p><p>Run <code>vuepress --help</code> to get following help messages:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Usage:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  $ vuepress &lt;command&gt; [options]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">Commands:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  dev [sourceDir]    Start development server</span></span>\n<span class="line"><span style="color:#D4D4D4;">  build [sourceDir]  Build to static site</span></span>\n<span class="line"><span style="color:#D4D4D4;">  info               Display environment information</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">For more info, run any </span><span style="color:#DCDCAA;">command</span><span style="color:#D4D4D4;"> with the </span><span style="color:#CE9178;">`--help`</span><span style="color:#D4D4D4;"> flag:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  $ vuepress dev --help</span></span>\n<span class="line"><span style="color:#D4D4D4;">  $ vuepress build --help</span></span>\n<span class="line"><span style="color:#D4D4D4;">  $ vuepress info --help</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">Options:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  -v, --version  Display version number </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -h, --help     Display this message </span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>VuePress is using <a href="https://www.npmjs.com/package/debug" target="_blank" rel="noopener noreferrer">debug</a> module.</p><p>Set environment variable <code>DEBUG=vuepress*</code> to enable debug logs.</p></div><h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev</h2><p>Start a development server to develop your VuePress site locally.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Usage:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  $ vuepress dev [sourceDir]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">Options:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  -c, --config &lt;config&gt;  Set path to config file </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -p, --port &lt;port&gt;      Use specified port (default: 8080) </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -t, --temp &lt;temp&gt;      Set the directory of the temporary files </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --host &lt;host&gt;          Use specified host (default: 0.0.0.0) </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --cache &lt;cache&gt;        Set the directory of the cache files </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --clean-temp           Clean the temporary files before dev </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --clean-cache          Clean the cache files before dev </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --open                 Open browser when ready </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --debug                Enable debug mode </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --no-watch             Disable watching page and config files (default: true)</span></span>\n<span class="line"><span style="color:#D4D4D4;">  -v, --version          Display version number </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -h, --help             Display this message</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h2>',9),r=(0,a.Uk)("Build your VuePress site to static files, which are ready for "),i=(0,a.Uk)("deployment"),t=(0,a.Uk)("."),o=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Usage:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  $ vuepress build [sourceDir]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">Options:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  -c, --config &lt;config&gt;  Set path to config file </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -d, --dest &lt;dest&gt;      Set the directory build output (default: .vuepress/dist) </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -t, --temp &lt;temp&gt;      Set the directory of the temporary files </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --cache &lt;cache&gt;        Set the directory of the cache files </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --clean-temp           Clean the temporary files before build </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --clean-cache          Clean the cache files before build </span></span>\n<span class="line"><span style="color:#D4D4D4;">  --debug                Enable debug mode </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -v, --version          Display version number </span></span>\n<span class="line"><span style="color:#D4D4D4;">  -h, --help             Display this message</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> info</h2><p>Outputs information about your system and dependencies.</p><p>This command would be helpful when you want to check your environment or report an issue.</p>',5),c={},u=(0,n(83744).Z)(c,[["render",function(e,s){const n=(0,a.up)("NpmBadge"),c=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,(0,a.Wm)(n,{package:"@vuepress/cli"}),p,(0,a._)("p",null,[r,(0,a.Wm)(c,{to:"/vuepress-next/guide/deployment.html"},{default:(0,a.w5)((()=>[i])),_:1}),t]),o],64)}]])}}]);