import type { App } from '@vuepress/core'
import { mergeConfig } from './vite'

export const addViteOptimizeDeps = (app: App, module: string): void => {
  if (app.options.bundler.endsWith('vite'))
    app.options.bundlerConfig.viteOptions = mergeConfig(
      app.options.bundlerConfig.viteOptions as Record<string, unknown>,
      { optimizeDeps: { include: [module] } }
    )
}
