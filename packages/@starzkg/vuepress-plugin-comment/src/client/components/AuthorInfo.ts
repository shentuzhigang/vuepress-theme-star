// TODO: Support author links
import {
  useAuthor,
  useLocaleConfig,
} from '@starzkg/vuepress-shared/lib/esm/client'
import { defineComponent, h } from 'vue'
import type { VNode } from 'vue'
import { commentOptions, pageInfoI18n } from '../define'
import { AuthorIcon } from './icons'

export default defineComponent({
  name: 'AuthorInfo',

  setup() {
    const author = useAuthor(commentOptions.author)
    const pageInfoLocale = useLocaleConfig(pageInfoI18n)

    return (): VNode | null =>
      author.value.length
        ? h(
            'span',
            {
              class: 'author-info',
              ...(commentOptions.hint !== false
                ? {
                    'ariaLabel': pageInfoLocale.value.author,
                    'data-balloon-pos': 'down',
                  }
                : {}),
            },
            [
              h(AuthorIcon),
              h('span', author.value.join(', ')),
              h('span', {
                property: 'author',
                content: author.value.join(', '),
              }),
            ]
          )
        : null
  },
})
