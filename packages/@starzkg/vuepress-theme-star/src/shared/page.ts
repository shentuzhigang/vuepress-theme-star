import type { GitData } from '@vuepress/plugin-git'
import type { AuthorData } from './author.js'
import type { BreadcrumbData } from './breadcrumb.js'

export interface StarThemePageData {
  /**
   * relative file path.
   */
  filePathRelative: string | null
  /**
   * page content.
   */
  content: string
  /**
   * length of the page.
   */
  length: number
  /**
   * Icon of the page
   */
  icon: string
  /**
   * Git data
   */
  git: GitData
  /**
   * author
   *
   * 作者
   */
  author: AuthorData
  /**
   * words of content.
   *
   * 字数
   */
  words: number
  /**
   * reading time.
   *
   * 预计的阅读时间
   */
  readingTime: number
  /**
   * breadcrumb.
   *
   * 面包屑
   */
  breadcrumb: BreadcrumbData
}
