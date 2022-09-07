import type { StarThemePageFrontmatter } from './page.js'

export interface StarThemeHomePageFrontmatter extends StarThemePageFrontmatter {
  heroImage?: string
  heroImageDark?: string
  heroAlt?: string
  heroText?: string | null
  tagline?: string | null
  actions?: {
    text: string
    link: string
    type?: 'primary' | 'secondary'
  }[]
  links?: {
    text: string
    icon: string
    url: string
  }[]
  features?: {
    title: string
    icon: string
    details: string
  }[]
  footer?: string
  footerHtml?: boolean
}
