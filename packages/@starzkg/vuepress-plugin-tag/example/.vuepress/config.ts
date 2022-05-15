import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'

export default defineUserConfig<DefaultThemeOptions>({
  base: process.env.VuePress_BASE ? `/${process.env.VuePress_BASE}/` : '/',

  title: 'Tag',

  description: 'VuePress Tag',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'Mr.Hope' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover',
      },
    ],
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },

  themeConfig: {
    logo: '/logo.svg',

    navbar: [{ text: '主页', link: '/' }],

    locales: {
      '/': {
        lang: 'zh-CN',
        selectText: '选择语言',
        lastUpdatedText: '上次编辑于',
        label: '简体中文',
      },
    },
  },

  plugins: ['@starzkg/tag'],
})
