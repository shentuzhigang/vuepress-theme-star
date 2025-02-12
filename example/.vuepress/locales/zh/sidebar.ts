export default {
  '/zh/guide/': [
    {
      text: '指南',
      icon: 'guide',
      link: '/zh/guide/',
      children: [
        '/zh/guide/introduction.md',
        '/zh/guide/getting-started.md',
        '/zh/guide/install.md',
        '/zh/guide/using.md',
        '/zh/guide/configuration.md',
        '/zh/guide/page.md',
        '/zh/guide/assets.md',
        '/zh/guide/i18n.md',
        '/zh/guide/accessibility.md',
        '/zh/guide/deployment.md',
        '/zh/guide/theme.md',
        '/zh/guide/plugin.md',
        '/zh/guide/bundler.md',
      ],
    },
    {
      text: 'MarkDown',
      icon: 'markdown',
      link: '/zh/guide/markdown/',
      children: [
        {
          text: '基础语法',
          link: '/zh/guide/markdown/basic/',
          children: [
            '/zh/guide/markdown/basic/html-tags.md',
            '/zh/guide/markdown/basic/styling-text.md',
            '/zh/guide/markdown/basic/quote.md',
            '/zh/guide/markdown/basic/color-model.md',
            '/zh/guide/markdown/basic/footnote.md',
            '/zh/guide/markdown/basic/deflist.md',
            '/zh/guide/markdown/basic/task-list.md',
          ],
        },
        {
          text: '高级语法',
          link: '/zh/guide/markdown/advanced/',
          children: [
            '/zh/guide/markdown/advanced/vuepress.md',
            '/zh/guide/markdown/advanced/vue.md',
            '/zh/guide/markdown/advanced/align.md',
            '/zh/guide/markdown/advanced/container.md',
            '/zh/guide/markdown/advanced/v-pre.md',
            '/zh/guide/markdown/advanced/attrs.md',
            '/zh/guide/markdown/advanced/chart.md',
            '/zh/guide/markdown/advanced/echarts.md',
            '/zh/guide/markdown/advanced/flowchart.md',
            '/zh/guide/markdown/advanced/plantuml.md',
            '/zh/guide/markdown/advanced/mermaid.md',
            '/zh/guide/markdown/advanced/markmap.md',
            '/zh/guide/markdown/advanced/code-demo/README.md',
            '/zh/guide/markdown/advanced/tex.md',
            '/zh/guide/markdown/advanced/reveal/README.md',
            '/zh/guide/markdown/advanced/include/README.md',
            '/zh/guide/markdown/advanced/import/README.md',
          ],
        },
        {
          text: '外部引入',
          link: '/zh/guide/markdown/external/',
          children: [
            '/zh/guide/markdown/external/embedded-file-viewer.md',
            '/zh/guide/markdown/external/shields.io.md',
            '/zh/guide/markdown/external/codpen.md',
            '/zh/guide/markdown/external/youtobe.md',
            '/zh/guide/markdown/external/bilibili.md',
          ],
        },
        {
          text: '配置预设',
          link: '/zh/guide/markdown/spec/',
          children: [
            '/zh/guide/markdown/spec/commonmark.md',
            '/zh/guide/markdown/spec/gfm.md',
          ],
        },
      ],
    },
    {
      text: '组件',
      link: '/zh/guide/component/',
      children: [
        '/zh/guide/component/badge.md',
        '/zh/guide/component/code-group.md',
        '/zh/guide/component/icon.md',
        '/zh/guide/component/external-link.md',
        '/zh/guide/component/element-plus.md',
      ],
    },
    {
      text: '功能',
      link: '/zh/guide/feature/',
      children: [
        '/zh/guide/feature/page-enhance.md',
        '/zh/guide/feature/copy-code.md',
        '/zh/guide/feature/photo-swipe.md',
        '/zh/guide/feature/copyright.md',
        '/zh/guide/feature/git.md',
        '/zh/guide/feature/encrypt.md',
        '/zh/guide/feature/typescript.md',
      ],
    },
    {
      text: '页面',
      link: '/zh/guide/page/',
      children: [
        '/zh/guide/page/home.md',
        '/zh/guide/page/normal.md',
        '/zh/guide/page/document.md',
        '/zh/guide/page/spreadsheet.md',
        '/zh/guide/page/presentation.md',
        '/zh/guide/page/blog.md',
        '/zh/guide/page/wiki.md',
      ],
    },
    {
      text: '布局',
      link: '/zh/guide/layout/',
      children: [
        '/zh/guide/layout/navbar.md',
        '/zh/guide/layout/sidebar.md',
        '/zh/guide/layout/home.md',
        '/zh/guide/layout/page.md',
        '/zh/guide/layout/custom.md',
      ],
    },
    {
      text: '站点',
      link: '/zh/guide/site/',
      children: [
        '/zh/guide/site/feed.md',
        '/zh/guide/site/pwa.md',
        '/zh/guide/site/seo.md',
        '/zh/guide/site/sitemap.md',
        '/zh/guide/site/analytics.md',
      ],
    },
  ],
  '/zh/docs/': [
    {
      text: 'Get Started',
      children: ['/zh/guide/README.md', '/zh/guide/getting-started.md'],
    },
  ],
}
