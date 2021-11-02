import { usePageFrontmatter } from '@vuepress/client'
import type { RevealOptions } from 'reveal.js'
import { defineComponent, h, onMounted, ref } from 'vue'
import type { PropType, VNode } from 'vue'
import { LoadingIcon } from './icons'

declare const MARKDOWN_DELAY: number
declare const REVEAL_CONFIG: Partial<RevealOptions>
declare const REVEAL_PLUGIN_HIGHLIGHT: boolean
declare const REVEAL_PLUGIN_MATH: boolean
declare const REVEAL_PLUGIN_NOTES: boolean
declare const REVEAL_PLUGIN_SEARCH: boolean
declare const REVEAL_PLUGIN_ZOOM: boolean

type ThemeType =
  | 'auto'
  | 'black'
  | 'white'
  | 'league'
  | 'beige'
  | 'sky'
  | 'night'
  | 'serif'
  | 'simple'
  | 'solarized'
  | 'blood'
  | 'moon'

export default defineComponent({
  name: 'PresentationViewer',

  props: {
    id: { type: String, required: true },
    theme: { type: String as PropType<ThemeType>, default: 'auto' },
  },

  setup(props) {
    const frontmatter = usePageFrontmatter<{ reveal: RevealOptions }>()
    const code = ref('')
    const loading = ref(false)
    const presentationContainer = ref<HTMLElement | null>(null)
    const presentationElement = ref<HTMLElement | null>(null)

    onMounted(() => {
      if (presentationElement.value) {
        code.value = decodeURIComponent(
          presentationContainer.value?.dataset.code || ''
        )

        presentationElement.value.setAttribute('id', props.id)
        presentationElement.value.setAttribute('data-theme', props.theme)

        // @ts-ignore
        const promises: [
          Promise<void>,
          Promise<typeof import(/* webpackChunkName: "reveal" */ 'reveal.js')>
        ] = [
          new Promise((resolve) => setTimeout(resolve, MARKDOWN_DELAY)),
          import(/* webpackChunkName: "reveal" */ 'reveal.js'),
        ]

        promises.push(
          import(
            /* webpackChunkName: "reveal" */ 'reveal.js/plugin/markdown/markdown.esm.js'
          )
        )

        if (REVEAL_PLUGIN_HIGHLIGHT)
          promises.push(
            import(
              /* webpackChunkName: "reveal" */ 'reveal.js/plugin/highlight/highlight.esm.js'
            )
          )

        if (REVEAL_PLUGIN_MATH)
          promises.push(
            import(
              /* webpackChunkName: "reveal" */ 'reveal.js/plugin/math/math.esm.js'
            )
          )

        if (REVEAL_PLUGIN_SEARCH)
          promises.push(
            import(
              /* webpackChunkName: "reveal" */ 'reveal.js/plugin/search/search.esm.js'
            )
          )

        if (REVEAL_PLUGIN_NOTES)
          promises.push(
            import(
              /* webpackChunkName: "reveal" */ 'reveal.js/plugin/notes/notes.esm.js'
            )
          )

        if (REVEAL_PLUGIN_ZOOM)
          promises.push(
            import(
              /* webpackChunkName: "reveal" */ 'reveal.js/plugin/zoom/zoom.esm.js'
            )
          )

        // if (REVEAL_PLUGINS.includes("anything"))
        //   promises.push(
        //     import(
        //       /* webpackChunkName: "reveal" */ "reveal.js-plugins/anything/anything.js"
        //     )
        //   );

        // if (REVEAL_PLUGINS.includes("audio"))
        //   promises.push(
        //     import(
        //       /* webpackChunkName: "reveal" */ "reveal.js-plugins/audio-slideshow/audio-slideshow.js"
        //     )
        //   );

        // if (REVEAL_PLUGINS.includes("chalkboard"))
        //   promises.push(
        //     import(
        //       /* webpackChunkName: "reveal" */ "reveal.js-plugins/chalkboard/chalkboard.js"
        //     )
        //   );

        Promise.all(promises).then(([, revealJS, ...plugins]) => {
          // @ts-ignore
          const reveal = new revealJS.Default(
            presentationElement.value as HTMLElement,
            {
              plugins: plugins.map(
                (plugin) => (plugin as typeof import('reveal.js')).default
              ),
            }
          )

          reveal
            .initialize({
              backgroundTransition: 'slide',
              hash: frontmatter.value.layout === 'Slide',
              mouseWheel: frontmatter.value.layout === 'Slide',
              transition: 'slide',
              slideNumber: true,
              ...REVEAL_CONFIG,
              ...(frontmatter.value.reveal || {}),
              embedded: frontmatter.value.layout !== 'Slide',
            })
            .then(() => {
              loading.value = false
              reveal.configure({ backgroundTransition: 'slide' })
            })
        })
      }
    })

    return (): VNode =>
      h(
        'div',
        {
          ref: presentationContainer,
          class: {
            'md-enhance-presentation': true,
            'loading': loading.value,
          },
        },
        [
          loading.value ? h(LoadingIcon) : null,
          h(
            'div',
            {
              ref: presentationElement,
              class: ['reveal', 'reveal-viewport'],
            },
            h('div', {
              class: 'slides',
              style: { display: loading.value ? 'none' : 'block' },
              innerHTML: `<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${code.value}</script></section>`,
            })
          ),
        ]
      )
  },
})
