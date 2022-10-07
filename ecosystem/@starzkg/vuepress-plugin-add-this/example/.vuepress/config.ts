import type { UserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'

const config: UserConfig<DefaultThemeOptions> = {
  base: process.env.VuePress_BASE || '/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Add this',
      description: 'VuePress 的 Add this 插件',
    },
  },

  themeConfig: {
    logo: '/logo.svg',

    locales: {
      '/': {
        navbar: [{ text: '主页', link: '/' }],
        lang: 'zh-CN',
        selectText: '选择语言',
        lastUpdatedText: '上次编辑于',
        label: '简体中文',
      },
    },
  },

  plugins: [['@starzkg/add-this', { pubid: 'ra-601bf7e7c332daca' }]],
}

export default config
