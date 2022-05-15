import {
  addViteOptimizeDepsInclude,
  addViteSsrNoExternal,
  getLocales,
  useCustomDevServer,
} from '@starzkg/vuepress-shared'
import type { PluginFunction } from '@vuepress/core'
import { path } from '@vuepress/utils'
import { useSassPalettePlugin } from 'vuepress-plugin-sass-palette'
import type { PWAOptions } from '../shared'
import { generateManifest, getManifest } from './generateManifest'
import { generateServiceWorker } from './generateServiceWorker'
import { appendBase } from './helper'
import { injectLinkstoHead } from './injectHead'
import { pwaLocales } from './locales'

export const pwaPlugin =
  (options: PWAOptions = {}): PluginFunction =>
  (app) => {
    const { base } = app.options

    if (options.appendBase) appendBase(base, options)

    const manifest = getManifest(app, options)

    app.options.head = injectLinkstoHead(options, base, app.options.head)

    useSassPalettePlugin(app, { id: 'star' })

    return {
      name: 'vuepress-plugin-pwa2',

      define: () => ({
        PWA_LOCALES: getLocales({
          app,
          name: 'pwa',
          default: pwaLocales,
          config: options.locales,
        }),
        SW_FORCE_UPDATE: options.update === 'force',
        SW_PATH: options.swPath || 'service-worker.js',
      }),

      extendsBundlerOptions: (config: unknown, app): void => {
        addViteOptimizeDepsInclude({ app, config }, 'register-service-worker')

        addViteSsrNoExternal({ app, config }, 'register-service-worker')

        useCustomDevServer(
          config,
          app,
          '/manifest.webmanifest',
          async () => JSON.stringify(await manifest),
          'Unexpected manifest generate error'
        )
      },

      onGenerated: async (app): Promise<void> => {
        await generateManifest(app, manifest)
        await generateServiceWorker(app, options)
      },

      clientAppRootComponentFiles: [
        ...(options.update === 'hint'
          ? [
              options.hintComponent ||
                path.resolve(
                  __dirname,
                  '../client/global-components/SWHintPopup.js'
                ),
            ]
          : []),
        ...(options.update !== 'disable' && options.update !== 'force'
          ? [
              options.updateComponent ||
                path.resolve(
                  __dirname,
                  '../client/global-components/SWUpdatePopup.js'
                ),
            ]
          : []),
        ...(options.showInstall !== false
          ? [
              path.resolve(
                __dirname,
                '../client/global-components/PWAInstall.js'
              ),
            ]
          : []),
      ],

      clientAppSetupFiles: path.resolve(__dirname, '../client/appSetup.js'),
    }
  }
