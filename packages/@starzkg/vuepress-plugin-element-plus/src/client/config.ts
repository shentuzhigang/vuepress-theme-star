import { default as ElementPlusIcons } from '@element-plus/icons-vue/global'
import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

export default defineClientConfig({
  enhance: ({ app }) => {
    app.use(ElementPlus)
    app.use(ElementPlusIcons)
  },
})
