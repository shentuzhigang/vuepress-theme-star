import type { Theme } from '@vuepress/core'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'

const commentTheme: Theme<DefaultThemeOptions> = {
  name: 'comment-theme',

  layouts: path.resolve(__dirname, './layouts'),

  extends: '@vuepress/theme-default',

  plugins: [
    [
      'comment2',
      {
        type: 'waline',
        author: 'Mr.Hope',
        dark: 'html.dark',
        serverURL: 'https://vuepress-theme-hope-comment.vercel.app',
      },
    ],
  ],
}

export default commentTheme
