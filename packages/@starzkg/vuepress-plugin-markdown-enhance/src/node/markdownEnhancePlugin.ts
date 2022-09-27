import { addCustomElement } from '@starzkg/vuepress-star-shared'
import type { Plugin } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import { abbr } from '../markdown-it/plugins/abbr.js'
import { attrs } from '../markdown-it/plugins/attrs.js'
import { chart } from '../markdown-it/plugins/chart.js'
import { cjkBreaks } from '../markdown-it/plugins/cjk-breaks.js'
import { colorModel } from '../markdown-it/plugins/color-model.js'
import { deflist } from '../markdown-it/plugins/deflist.js'
import { echarts } from '../markdown-it/plugins/echarts.js'
import { emoji } from '../markdown-it/plugins/emoji.js'
import { flowchart } from '../markdown-it/plugins/flowchart.js'
import { footnote } from '../markdown-it/plugins/footnote.js'
import { forInline } from '../markdown-it/plugins/for-inline.js'
import { ins } from '../markdown-it/plugins/ins.js'
import { katex } from '../markdown-it/plugins/katex.js'
import { mark } from '../markdown-it/plugins/mark.js'
import { mathjax } from '../markdown-it/plugins/mathjax.js'
import { mermaid } from '../markdown-it/plugins/mermaid.js'
import { reveal } from '../markdown-it/plugins/reveal.js'
import { sub } from '../markdown-it/plugins/sub.js'
import { sup } from '../markdown-it/plugins/sup.js'
import { taskList } from '../markdown-it/plugins/task-list.js'
import type { MarkdownFavor, MarkdownOptions } from '../shared/index.js'
import { usePlugins } from './plugins/index.js'
import {
  assignDefaultMarkdownOptions,
  logger,
  MATHML_TAGS,
} from './utils/index.js'

const __dirname = getDirname(import.meta.url)

export declare type MarkdownEnhancePluginOptions =
  | MarkdownOptions
  | MarkdownFavor
  | boolean

export const markdownEnhancePlugin =
  (options: MarkdownEnhancePluginOptions = true): Plugin =>
  (app) => {
    if (app.env.isDebug) {
      logger.info(`source Options:\n${JSON.stringify(options, null, '\t')}`)
    }

    const markdownOptions = assignDefaultMarkdownOptions(options)

    if (app.env.isDebug) {
      logger.info(
        `merged Options:\n${JSON.stringify(markdownOptions, null, '\t')}`
      )
    }

    const alignEnable = markdownOptions.align || false
    const flowchartEnable = markdownOptions.flowchart || false
    const footnoteEnable = markdownOptions.footnote || false
    const tasklistEnable = markdownOptions.tasklist || false
    const mermaidEnable = Boolean(markdownOptions.mermaid) || false
    const revealEnable = Boolean(markdownOptions.reveal) || false
    const texEnable = Boolean(markdownOptions.tex) || false

    const revealPlugins =
      typeof markdownOptions.reveal === 'object' &&
      Array.isArray(markdownOptions.reveal.plugins)
        ? markdownOptions.reveal.plugins
        : []

    usePlugins(app, markdownOptions)

    return {
      name: '@starzkg/vuepress-plugin-markdown-enhance',

      define: (): Record<string, unknown> => ({
        MARKDOWN_DELAY: markdownOptions.delay || 500,
        MARKDOWN_ENHANCE_ALIGN: alignEnable,
        MARKDOWN_ENHANCE_FOOTNOTE: footnoteEnable,
        MARKDOWN_ENHANCE_FLOWCHART: flowchartEnable,
        MARKDOWN_ENHANCE_MERMAID: mermaidEnable,
        MARKDOWN_ENHANCE_PRESENTATION: revealEnable,
        MARKDOWN_ENHANCE_TASKLIST: tasklistEnable,
        MARKDOWN_ENHANCE_TEX: texEnable,
        CODE_DEMO_OPTIONS: {
          ...(typeof markdownOptions.demo === 'object'
            ? markdownOptions.demo
            : {}),
        },
        MERMAID_OPTIONS:
          typeof markdownOptions.mermaid === 'object'
            ? markdownOptions.mermaid
            : {},
        REVEAL_CONFIG:
          typeof markdownOptions.reveal === 'object' &&
          typeof markdownOptions.reveal.revealConfig === 'object'
            ? markdownOptions.reveal.revealConfig
            : {},
        REVEAL_PLUGIN_HIGHLIGHT: revealPlugins.includes('highlight'),
        REVEAL_PLUGIN_MATH: revealPlugins.includes('math'),
        REVEAL_PLUGIN_NOTES: revealPlugins.includes('notes'),
        REVEAL_PLUGIN_SEARCH: revealPlugins.includes('search'),
        REVEAL_PLUGIN_ZOOM: revealPlugins.includes('zoom'),
      }),

      clientConfigFile: path.resolve(__dirname, '../client/config.js'),

      extendsMarkdownOptions: (mdOptions): void => {
        Object.assign(mdOptions, {
          ...mdOptions,
          ...markdownOptions,
        })
      },

      extendsMarkdown: (markdownIt): void => {
        if (markdownOptions.abbr) markdownIt.use(abbr)
        if (markdownOptions.attrs) {
          markdownIt.use(
            attrs,
            typeof markdownOptions.attrs === 'object'
              ? markdownOptions.attrs
              : {}
          )
        }
        if (markdownOptions.chart) markdownIt.use(chart)
        if (markdownOptions.cjkBreaks) markdownIt.use(cjkBreaks)
        if (markdownOptions.colorModel) markdownIt.use(colorModel)
        if (markdownOptions.deflist) markdownIt.use(deflist)
        if (markdownOptions.echarts) markdownIt.use(echarts)
        if (markdownOptions.emoji) markdownIt.use(emoji)
        if (markdownOptions.flowchart) markdownIt.use(flowchart)
        if (markdownOptions.footnote) markdownIt.use(footnote)
        if (markdownOptions.forInline) {
          markdownIt.use(
            forInline,
            typeof markdownOptions.forInline === 'object'
              ? markdownOptions.forInline
              : {}
          )
        }
        if (markdownOptions.ins) markdownIt.use(ins)
        if (markdownOptions.mark) markdownIt.use(mark)
        if (markdownOptions.mermaid) markdownIt.use(mermaid)
        if (markdownOptions.reveal) markdownIt.use(reveal)
        if (markdownOptions.sup) markdownIt.use(sup)
        if (markdownOptions.sub) markdownIt.use(sub)
        if (markdownOptions.tasklist) {
          markdownIt.use(taskList, [
            typeof markdownOptions.tasklist === 'object'
              ? markdownOptions.tasklist
              : {},
          ])
        }
        if (markdownOptions.tex) {
          if (markdownOptions.tex === 'katex' || markdownOptions.tex === true) {
            markdownIt.use(
              katex,
              typeof markdownOptions.katex === 'object'
                ? markdownOptions.katex
                : {}
            )
          } else if (markdownOptions.mathjax) {
            markdownIt.use(
              mathjax,
              typeof markdownOptions.mathjax === 'object'
                ? markdownOptions.mathjax
                : {}
            )
          }
        }
      },

      extendsBundlerOptions: (config, app) => {
        addCustomElement(app, config, MATHML_TAGS)
      },
    }
  }
