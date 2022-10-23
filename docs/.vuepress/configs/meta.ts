import { createRequire } from 'node:module'
import { fs } from '@vuepress/utils'

const require = createRequire(import.meta.url)

export const version = fs.readJsonSync(
  require.resolve('@starzkg/vuepress-theme-star/package.json')
).version
