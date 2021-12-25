import type { App, Page } from '@vuepress/core'
import { chalk, fs } from '@vuepress/utils'
import type { FeedInitOptions, FeedOptions } from '../shared'
import { Feed } from './feed'
import { getOutput } from './options'
import { FeedPage } from './page'
import { logger } from './utils'

export class FeedGenerator {
  /** feed 生成器 */
  feed: Feed

  constructor(
    private pages: Page[],
    private options: FeedOptions,
    feedOption: FeedInitOptions,
    private app: App
  ) {
    this.feed = new Feed(feedOption)
  }

  addPages(): void {
    let count = 0
    const pages = this.pages.slice(0, this.options.count)

    for (const page of pages) {
      const item = new FeedPage(
        page,
        this.feed,
        this.options,
        this.app
      ).getFeedItem()

      if (item) {
        this.feed.addItem(item)
        count += 1
      }
    }

    logger.success(`added ${chalk.cyan(`${count} page(s)`)} as feed item(s)`)
  }

  async generateFeed(): Promise<void> {
    const { dest } = this.app.dir
    const output = getOutput(this.options.output)

    this.addPages()

    logger.load('Generating Feed')

    // generate atom files
    if (output.atom.enable) {
      const filePath = dest(output.atom.path)

      await fs.outputFile(filePath, this.feed.atom())

      logger.update(
        `Atom feed file generated and saved to ${chalk.cyan(output.atom.path)}`
      )
      logger.success()
      logger.load('Generating Feed')
    }

    // generate json files
    if (output.json.enable) {
      const filePath = dest(output.json.path)

      await fs.outputFile(filePath, this.feed.json())

      logger.update(
        `JSON feed file generated and saved to ${chalk.cyan(output.json.path)}`
      )
      logger.success()
      logger.load('Generating Feed')
    }

    // generate rss files
    if (output.rss.enable) {
      const filePath = dest(output.rss.path)

      await fs.outputFile(filePath, this.feed.rss())

      logger.update(
        `RSS feed file generated and saved to ${chalk.cyan(output.rss.path)}`
      )
      logger.success()
    }
  }
}
