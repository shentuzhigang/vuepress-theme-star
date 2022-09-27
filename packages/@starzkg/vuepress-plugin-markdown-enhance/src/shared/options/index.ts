import type { LocaleConfig } from '@vuepress/core'
import type { MarkdownOptions as _MarkdownOptions } from '@vuepress/markdown'
import type { AttrsPluginOptions } from '../../markdown-it/plugins/attrs.js'
import type { EmojiPluginOptions } from '../../markdown-it/plugins/emoji.js'
import type { ForInlinePluginOptions } from '../../markdown-it/plugins/for-inline.js'
import type { KatexOptions } from '../../markdown-it/plugins/katex.js'
import type { MathJaxOptions } from '../../markdown-it/plugins/mathjax.js'
import type { TaskListOptions } from '../../markdown-it/plugins/task-list.js'
import type { MarkdownEnhancePluginLocaleData } from '../locales.js'
import type { CodeDemoOptions } from './code-demo.js'
import type { RevealOptions } from './reveal.js'

export * from './code-demo.js'
export * from './reveal.js'
/**
 * markdown-enhance plugin configuration
 */
export interface MarkdownEnhanceOptions {
  /**
   * 是否启用Abbreviation支持
   *
   * Whether to enable abbreviation format support
   *
   * @default false
   */
  abbr?: boolean
  /**
   * 是否启用属性支持。
   *
   * Whether to enable attr support
   *
   * @default false
   */
  attrs?: AttrsPluginOptions | boolean
  /**
   * 是否启用 chart 图表支持
   *
   * Whether to enable chart support
   *
   * @default false
   */
  chart?: boolean
  /**
   * 是否禁止汉字字符之间的换行
   *
   * Whether to enable suppress linebreaks between east asian characters
   *
   * @default false
   */
  cjkBreaks?: boolean
  /**
   * 是否启用颜色格式
   *
   * Whether to enable Color Model
   *
   * @default false
   */
  colorModel?: boolean
  /**
   * 是否启用定义列表支持
   *
   * Whether to enable def list format support
   *
   * @default false
   */
  deflist?: boolean
  /**
   * 是否启用 echarts 图表支持
   *
   * Whether to enable echarts support
   *
   * @default false
   */
  echarts?: boolean
  /**
   * 是否启用 emoji
   *
   * Whether to enable emoji
   *
   * @default false
   */
  emoji?: false | EmojiPluginOptions
  /**
   * 是否启用流程图
   *
   * Whether to enable flowchart format support
   *
   * @default false
   */
  flowchart?: boolean
  /**
   * 是否启用脚注格式支持
   *
   * Whether to enable footnote format support
   *
   * @default false
   */
  footnote?: boolean
  /**
   * 是否启用内联标记迭代器支持
   *
   * Whether to enable inline tokens iterator support
   *
   * @default false
   */
  forInline?: false | ForInlinePluginOptions
  /**
   * 是否启用ins支持
   *
   * Whether to enable ins format support
   *
   * @default false
   */
  ins?: boolean
  /**
   * 是否启用 KaTeX 语法支持
   *
   * Whether to enable KaTeX syntax support
   *
   * @default false
   */
  katex?: KatexOptions | boolean
  /**
   * 是否启用标注支持
   *
   * Whether to enable mark format support
   *
   * @default false
   */
  mark?: boolean
  /**
   * 是否启用 MathJax 语法支持
   *
   * Whether to enable MathJax syntax support
   *
   * @default false
   */
  mathjax?: MathJaxOptions | boolean
  /**
   * 是否启用 Mermaid 流程图支持
   *
   * Whether to enable mermaid support
   *
   * @default false
   */
  mermaid?: boolean
  /**
   * 是否启用自定义容器
   *
   * - info
   * - tip
   * - warning
   * - danger
   * - details
   *
   * ⚠ 最后四个会和默认主题冲突，且可能会覆盖默认主题的样式与行为
   *
   * Whether to enable custom container including
   *
   * - info
   * - tip
   * - warning
   * - danger
   * - details
   *
   * ⚠ The last 4 is conflict with default theme and may overide it.
   *
   * @default false
   */
  container?: boolean

  /**
   * 是否启用自定义对齐支持
   *
   * Whether to enable align support
   *
   * @default false
   */
  align?: boolean

  /**
   * Whether to enable v-pre wrapper.
   *
   * 是否启用 v-pre 容器。
   *
   * @default false
   */
  vPre?: boolean
  /**
   * 是否启用 reveal.js 支持
   *
   * Whether to enable reveal.js support
   *
   * @default false
   */
  reveal?: RevealOptions | boolean
  /**
   * 是否启用上角标格式支持
   *
   * Whether to enable superscript format support
   *
   * @default false
   */
  sup?: boolean

  /**
   * 是否启用下角标格式支持
   *
   * Whether to enable subscript format support
   *
   * @default false
   */
  sub?: boolean

  /**
   * 是否启用任务里表支持
   *
   * Whether to enable tastlist format support
   *
   * @default false
   */
  tasklist?: TaskListOptions | boolean

  /**
   * 是否启用 TeX 语法支持
   *
   * Whether to enable TeX syntax support
   *
   * @see katex
   * @see mathjax
   * @default false
   */
  tex?: 'katex' | 'mathjax' | boolean

  /**
   * 是否启用代码示例功能
   *
   * Whether to enable code-demo support
   *
   * @default false
   */
  demo?: Partial<CodeDemoOptions> | boolean

  /**
   * 操作页面 DOM 的延时，单位 ms
   *
   * 如果你使用的主题有切换动画，建议配置此选项为 `切换动画时长 + 200`
   *
   * The delay of operating dom, in ms
   *
   * If the theme you are using has a switching animation, it is recommended to configure this option to `Switch animation duration + 200`
   *
   * @default 500
   */
  delay?: number

  /**
   * 国际化配置选项
   *
   * locales config
   */
  locales?: LocaleConfig<MarkdownEnhancePluginLocaleData>
}

export declare type MarkdownOptions = MarkdownEnhanceOptions & _MarkdownOptions
