import type { IncomingMessage, ServerResponse } from 'http'
import type { WebpackDevServer } from '@vuepress/bundler-webpack'
import type { App } from '@vuepress/core'
import type { HandleFunction } from 'connect'
import type { Plugin } from 'vite'
import { mergeConfig } from './vite'

export const useCustomDevServer = (
  app: App,
  path: string,
  getResponse: (request?: IncomingMessage) => Promise<unknown>,
  errMsg = 'The server encounted an error'
): void => {
  // for vite
  if (app.env.isDev && app.options.bundler.endsWith('vite')) {
    const handler: HandleFunction = (
      request: IncomingMessage,
      response: ServerResponse
    ) =>
      getResponse(request)
        .then((data) => {
          response.statusCode = 200
          response.end(data)
        })
        .catch(() => {
          response.statusCode = 500
          response.end(errMsg)
        })

    const viteMockRequestPlugin: Plugin = {
      name: `${path}-mock`,
      configureServer: ({ middlewares }) => {
        middlewares.use(
          `${app.options.base.replace(/\/$/, '')}${path}`,
          handler
        )
      },
    }

    app.options.bundlerConfig.viteOptions = mergeConfig(
      app.options.bundlerConfig.viteOptions as Record<string, unknown>,
      { plugins: [viteMockRequestPlugin] }
    )
  }

  // for webpack
  if (app.env.isDev && app.options.bundler.endsWith('webpack')) {
    app.options.bundlerConfig.devServerSetupMiddlewares = (
      middlewares,
      server: WebpackDevServer
    ): void => {
      server.app?.get(
        `${app.options.base.replace(/\/$/, '')}${path}`,
        (request, response) => {
          getResponse(request)
            .then((data) => response.status(200).send(data))
            .catch(() => response.status(500).send(errMsg))
        }
      )
    }
  }
}
