import type { BasePageFrontMatter } from '@starzkg/vuepress-shared'
import type { App, HeadConfig, Page, PageFrontmatter } from '@vuepress/core'
import type { GitData } from '@vuepress/plugin-git'
import type { SeoContent } from './seo.js'

export * from './seo.js'

export type ExtendPage<ExtendObject = Record<string, unknown>> = Page & {
  frontmatter: PageFrontmatter<BasePageFrontMatter>
  git?: GitData
} & ExtendObject

export interface PageSeoInfo<PageExtends = Record<string, unknown>> {
  page: ExtendPage<PageExtends>
  app: App
  /**
   * Current page link
   *
   * prefer permalink
   */
  permalink: string | null
}

export interface SeoOptions {
  /**
   * 默认作者
   *
   * default author
   */
  author?: string

  /**
   * 你的 Twitter 用户名
   *
   * your twitter username
   */
  twitterID?: string

  /**
   * 内容分级情况
   *
   * Content restrictions
   *
   * The age rating of the content, the format is `[int]+`, such as `'13+'`
   */
  restrictions?: string

  /** Function to generate seo */
  seo?: <PageExtends = Record<string, unknown>>(
    info: PageSeoInfo<PageExtends>
  ) => Partial<SeoContent>

  /** Function to custom head */
  customHead?: <PageExtends = Record<string, unknown>>(
    head: HeadConfig[],
    info: PageSeoInfo<PageExtends>
  ) => void
}
