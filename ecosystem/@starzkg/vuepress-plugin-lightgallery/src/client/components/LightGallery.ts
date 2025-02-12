import lightGallery from 'lightgallery'
import type { LightGallerySettings } from 'lightgallery/lg-settings.js'
import type { GalleryItem } from 'lightgallery/lg-utils.js'
import type { LgQuery } from 'lightgallery/lgQuery.js'
import type { LightGallery } from 'lightgallery/lightgallery.js'
import type { VNode } from 'vue'
import { defineComponent, h, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import 'lightgallery/scss/lightgallery.scss'

declare const IMAGE_SELECTOR: string
declare const LIGHT_GALLERY_DELAY: number
declare const LIGHT_GALLERY_OPTIONS: LightGallerySettings
declare const LIGHT_GALLERY_AUTOPLAY: boolean
declare const LIGHT_GALLERY_FULLSCREEN: boolean
declare const LIGHT_GALLERY_PAGER: boolean
declare const LIGHT_GALLERY_THUMBNAIL: boolean
declare const LIGHT_GALLERY_ROTATE: boolean
declare const LIGHT_GALLERY_SHARE: boolean
declare const LIGHT_GALLERY_ZOOM: boolean

const getImages = (images: HTMLImageElement[]): GalleryItem[] =>
  images.map(
    ({ alt, srcset, src }) =>
      ({
        alt,
        src,
        thumb: src || srcset,
        srcset,
        subHtml: alt,
      } as GalleryItem)
  )

export default defineComponent({
  name: 'LightGallery',

  setup(_props, { slots }) {
    const route = useRoute()
    const container = ref<HTMLElement | null>(null)
    const instance = ref<LightGallery | null>(null)
    let id: number

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const delay = new Promise<void>((resolve) =>
      setTimeout(() => resolve(), LIGHT_GALLERY_DELAY)
    )
    const plugins: Promise<{
      default: new (
        instance: LightGallery,
        $LG: LgQuery
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ) => any
    }>[] = []
    const pluginsStyles: unknown[] = []

    if (LIGHT_GALLERY_AUTOPLAY) {
      plugins.push(import('lightgallery/plugins/autoplay/lg-autoplay.min.js'))
      pluginsStyles.push(import('lightgallery/scss/lg-autoplay.scss'))
    }

    if (LIGHT_GALLERY_FULLSCREEN) {
      plugins.push(
        import('lightgallery/plugins/fullscreen/lg-fullscreen.min.js')
      )
      pluginsStyles.push(import('lightgallery/scss/lg-fullscreen.scss'))
    }

    if (LIGHT_GALLERY_PAGER) {
      plugins.push(import('lightgallery/plugins/pager/lg-pager.min.js'))
      pluginsStyles.push(import('lightgallery/scss/lg-pager.scss'))
    }

    if (LIGHT_GALLERY_ROTATE) {
      plugins.push(import('lightgallery/plugins/rotate/lg-rotate.min.js'))
      pluginsStyles.push(import('lightgallery/scss/lg-rotate.scss'))
    }

    if (LIGHT_GALLERY_SHARE) {
      plugins.push(import('lightgallery/plugins/share/lg-share.min.js'))
      pluginsStyles.push(import('lightgallery/scss/lg-share.scss'))
    }

    if (LIGHT_GALLERY_THUMBNAIL) {
      plugins.push(import('lightgallery/plugins/thumbnail/lg-thumbnail.min.js'))
      pluginsStyles.push(import('lightgallery/scss/lg-thumbnail.scss'))
    }

    if (LIGHT_GALLERY_ZOOM) {
      plugins.push(import('lightgallery/plugins/zoom/lg-zoom.min.js'))
      pluginsStyles.push(import('lightgallery/scss/lg-zoom.scss'))
    }

    const initLightGallery = (): void => {
      const timeID = (id = new Date().getTime())

      Promise.all([
        Promise.all(plugins),
        Promise.all(pluginsStyles),
        delay,
      ]).then(([plugins]) => {
        if (timeID === id) {
          instance.value?.destroy()

          const images = Array.from(
            document.querySelectorAll<HTMLImageElement>(IMAGE_SELECTOR)
          )

          instance.value = lightGallery.default(
            container.value as HTMLElement,
            {
              ...LIGHT_GALLERY_OPTIONS,
              dynamic: true,
              dynamicEl: getImages(images),
              // this is a licenseKey to make this project under MIT, special thanks to @Sachin
              licenseKey: 'VSY7R-J@WED-CJY76-UMDXQ',
              plugins: plugins.map(({ default: plugin }) => plugin),
            }
          )

          images.forEach((image, index) => {
            image.addEventListener('click', () => {
              instance.value?.openGallery(index)
            })
          })
        }
      })
    }

    watch(
      () => route,
      () => initLightGallery()
    )

    onMounted(() => initLightGallery())

    onUnmounted(() => instance.value?.destroy())

    return (): VNode =>
      h(
        'div',
        { ref: container, class: 'lightgallery-vuepress' },
        slots.default?.()
      )
  },
})
