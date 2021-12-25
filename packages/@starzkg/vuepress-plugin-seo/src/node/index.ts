import { resolvePagePermalink } from '@vuepress/core'
import type { Plugin } from '@vuepress/core'
import type { ExtendPage, PageSeoInfo, SeoContent, SeoOptions } from '../shared'
import { appendSEO } from './appendHead'
import { generateRobotsTxt, generateSeo } from './seo'

export * from '../shared'

export const seoPlugin: Plugin<SeoOptions> = (options, app) => {
  const { base, themeConfig } = app.options

  const seoOptions =
    Object.keys(options).length > 0
      ? options
      : (themeConfig.seo as SeoOptions) || {}

  return {
    name: 'seo2',

    extendsPage(page): void {
      const head = page.frontmatter.head || []
      const pageSeoInfo: PageSeoInfo = {
        page: page as ExtendPage,
        app,
        permalink: resolvePagePermalink(page),
      }
      const metaContext: SeoContent = {
        ...generateSeo(seoOptions, base, pageSeoInfo),
        ...(seoOptions.seo ? seoOptions.seo(pageSeoInfo) : {}),
      }

      appendSEO(head, metaContext, seoOptions)
      if (seoOptions.customHead) seoOptions.customHead(head, pageSeoInfo)

      page.frontmatter.head = head
    },

    async onGenerated(): Promise<void> {
      await generateRobotsTxt(app.dir)
    },
  }
}

export default seoPlugin
