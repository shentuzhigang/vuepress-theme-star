<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client'
import { computed } from 'vue'
import type { StarThemeNormalPageFrontmatter } from '../../shared/index.js'
import AutoLink from './AutoLink.vue'

const frontmatter = usePageFrontmatter<StarThemeNormalPageFrontmatter>()

const type = computed(() => {
  return frontmatter.value.type || '原创'
})
const typeLocale = '文章类型'
</script>

<template>
  <span
    v-if="type"
    class="page-type"
    :class="[frontmatter.type || 'origin']"
    :aria-label="typeLocale"
    data-balloon-pos="down"
  >
    <AutoLink
      v-if="frontmatter.type !== 'origin' && frontmatter.origin"
      :item="{ link: frontmatter.origin, text: type }"
    />
    <span v-else>{{ type }}</span>
  </span>
</template>
