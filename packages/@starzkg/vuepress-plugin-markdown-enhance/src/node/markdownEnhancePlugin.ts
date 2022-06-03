import type { Plugin } from '@vuepress/core'
import { logger, path } from '@vuepress/utils'
import type {
  ForInlinePluginOptions,
  MarkdownEnhanceOptions,
  MarkdownFavor,
} from '../shared'
import {
  abbr,
  cjkBreaks,
  codeDemoDefaultSetting,
  deflist,
  emoji,
  flowchart,
  footnote,
  forInline,
  ins,
  katex,
  mark,
  mermaid,
  presentation,
  sub,
  sup,
  tasklist,
} from './markdown-it'
import { usePlugins } from './plugins'
import { assignDefaultMarkdownEnhanceOptions } from './utils'

export const markdownEnhancePlugin =
  (options: MarkdownEnhanceOptions | MarkdownFavor | boolean = true): Plugin =>
  (app) => {
    if (app.env.isDebug) logger.info(`Options: ${options.toString()}`)

    const markdownOptions = assignDefaultMarkdownEnhanceOptions(options)

    const alignEnable = markdownOptions.align || false
    const flowchartEnable = markdownOptions.flowchart || false
    const footnoteEnable = markdownOptions.footnote || false
    const tasklistEnable = markdownOptions.tasklist || false
    const mermaidEnable = Boolean(markdownOptions.mermaid) || false
    const presentationEnable = Boolean(markdownOptions.presentation) || false
    const texEnable = Boolean(markdownOptions.tex) || false

    const revealPlugins =
      typeof markdownOptions.presentation === 'object' &&
      Array.isArray(markdownOptions.presentation.plugins)
        ? markdownOptions.presentation.plugins
        : []

    usePlugins(app, markdownOptions)

    return {
      name: '@starzkg/vuepress-plugin-markdown-enhance',

      alias: {
        '@FlowChart': flowchartEnable
          ? path.resolve(__dirname, '../client/components/FlowChart.vue')
          : '@starzkg/vuepress-shared/es/client/noopModule.js',
        '@Mermaid': mermaidEnable
          ? path.resolve(__dirname, '../client/components/MermaidChart.js')
          : '@starzkg/vuepress-shared/es/client/noopModule.js',
        '@Presentation': presentationEnable
          ? path.resolve(
              __dirname,
              '../client/components/PresentationViewer.js'
            )
          : '@starzkg/vuepress-shared/es/client/noopModule.js',
      },

      define: (): Record<string, unknown> => ({
        MARKDOWN_DELAY: markdownOptions.delay || 500,
        MARKDOWN_ENHANCE_ALIGN: alignEnable,
        MARKDOWN_ENHANCE_FOOTNOTE: footnoteEnable,
        MARKDOWN_ENHANCE_FLOWCHART: flowchartEnable,
        MARKDOWN_ENHANCE_MERMAID: mermaidEnable,
        MARKDOWN_ENHANCE_PRESENTATION: presentationEnable,
        MARKDOWN_ENHANCE_TASKLIST: tasklistEnable,
        MARKDOWN_ENHANCE_TEX: texEnable,
        CODE_DEMO_OPTIONS: {
          ...codeDemoDefaultSetting,
          ...(typeof markdownOptions.demo === 'object'
            ? markdownOptions.demo
            : {}),
        },
        MERMAID_OPTIONS:
          typeof markdownOptions.mermaid === 'object'
            ? markdownOptions.mermaid
            : {},
        REVEAL_CONFIG:
          typeof markdownOptions.presentation === 'object' &&
          typeof markdownOptions.presentation.revealConfig === 'object'
            ? markdownOptions.presentation.revealConfig
            : {},
        REVEAL_PLUGIN_HIGHLIGHT: revealPlugins.includes('highlight'),
        REVEAL_PLUGIN_MATH: revealPlugins.includes('math'),
        REVEAL_PLUGIN_NOTES: revealPlugins.includes('notes'),
        REVEAL_PLUGIN_SEARCH: revealPlugins.includes('search'),
        REVEAL_PLUGIN_ZOOM: revealPlugins.includes('zoom'),
      }),

      clientConfigFile: path.resolve(__dirname, '../client/config.js'),

      extendsMarkdown: (markdownIt): void => {
        if (markdownOptions.sup) markdownIt.use(sup)
        if (markdownOptions.sub) markdownIt.use(sub)
        if (markdownOptions.flowchart) markdownIt.use(flowchart)
        if (footnoteEnable) markdownIt.use(footnote)
        if (markdownOptions.ins) markdownIt.use(ins)
        if (markdownOptions.abbr) markdownIt.use(abbr)
        if (markdownOptions.cjkBreaks) markdownIt.use(cjkBreaks)
        if (markdownOptions.deflist) markdownIt.use(deflist)
        if (markdownOptions.emoji) markdownIt.use(emoji)
        if (markdownOptions.forInline) {
          markdownIt.use<ForInlinePluginOptions>(
            forInline,
            markdownOptions.forInline
          )
        }
        if (markdownOptions.mark) markdownIt.use(mark)
        if (tasklistEnable)
          markdownIt.use(tasklist, [
            typeof markdownOptions.tasklist === 'object'
              ? markdownOptions.tasklist
              : {},
          ])
        if (mermaidEnable) markdownIt.use(mermaid)
        if (texEnable)
          markdownIt.use(katex, {
            macros: {
              // support more symbols
              '\\liiiint': '\\int\\!\\!\\!\\iiint',
              '\\iiiint': '\\int\\!\\!\\!\\!\\iiint',
              '\\idotsint': '\\int\\!\\cdots\\!\\int',
            },
            ...(typeof markdownOptions.tex === 'object'
              ? markdownOptions.tex
              : {}),
          })
        if (presentationEnable) markdownIt.use(presentation)
      },
    }
  }