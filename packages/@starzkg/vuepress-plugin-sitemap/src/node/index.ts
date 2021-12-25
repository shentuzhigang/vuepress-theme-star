import type { Plugin } from '@vuepress/core'
import type { SitemapOptions } from '../shared'
import { generateSiteMap, logger } from './sitemap'

const sitemapPlugin: Plugin<SitemapOptions> = (options, app) => {
  const { themeConfig } = app.options
  const hostname = options.hostname || (themeConfig.hostname as string)

  if (!hostname) {
    logger.error("Required 'hostname' option is missing!")

    return { name: '@starzkg/vuepress-plugin-sitemap' }
  }

  const sitemapOptions =
    Object.keys(options).length > 0
      ? { ...options, hostname }
      : { ...((themeConfig.sitemap as SitemapOptions) || {}), hostname }

  return {
    name: 'sitemap2',

    async onGenerated(): Promise<void> {
      await generateSiteMap(sitemapOptions, app)
    },
  }
}

export default sitemapPlugin
