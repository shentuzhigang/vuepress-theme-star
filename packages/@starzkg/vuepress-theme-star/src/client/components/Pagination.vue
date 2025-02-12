<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Pagination',

  props: {
    /** Number of total items */
    total: { type: Number, default: 10 },
    /** Items per page */
    perPage: { type: Number, default: 10 },
    currentPage: { type: Number, default: 1 },
  },

  emits: ['update:currentPage'],

  setup(props, { emit }) {
    const route = useRoute()
    const router = useRouter()

    const input = ref('')
    const totalPages = computed(() => Math.ceil(props.total / props.perPage))
    const enable = computed(
      () => Boolean(totalPages.value) && totalPages.value !== 1
    )
    const displayLeftEllipsis = computed(() => {
      if (totalPages.value < 7) return false

      return props.currentPage > 4
    })
    const displayRightEllipsis = computed(() => {
      if (totalPages.value < 7) return false

      return props.currentPage < totalPages.value - 3
    })

    /** Page indexs */
    const indexs = computed(() => {
      const { currentPage } = props
      let min = 1
      let max = totalPages.value
      const arr: number[] = []

      if (totalPages.value >= 7)
        if (currentPage <= 4 && currentPage < totalPages.value - 3) {
          min = 1
          max = 5
        } else if (currentPage > 4 && currentPage >= totalPages.value - 3) {
          max = totalPages.value
          min = totalPages.value - 4
        } else if (totalPages.value > 7) {
          min = currentPage - 2
          max = currentPage + 2
        }

      // Generate page index
      for (let i = min; i <= max; i++) arr.push(i)

      return arr
    })

    const i18n = computed(() => ({
      prev: '上一页',
      next: '下一页',
      navigate: '跳转到',
      action: '前往',
      errorText: '请输入 1 到 $page 之前的页码！',
    }))

    /** Navigate to certain page */
    const navigate = (page: number): void => {
      const query = { ...route.query }

      if (query.page === page.toString() || (page === 1 && !query.page)) return

      emit('update:currentPage', page)

      if (page === 1) delete query.page
      else query.page = page.toString()

      router.push({ path: route.path, query })
    }

    /** Check and navigate to certain page */
    const jumpPage = (index: string): void => {
      const pageNum = parseInt(index)

      if (pageNum <= totalPages.value && pageNum > 0) navigate(pageNum)
      else
        alert(
          i18n.value.errorText.replace(/\$page/g, totalPages.value.toString())
        )
    }

    onMounted(() => {
      const { index } = route.query

      navigate(index ? Number(index) : 1)
    })

    return {
      displayLeftEllipsis,
      displayRightEllipsis,
      enable,
      i18n,
      indexs,
      input,
      jumpPage,
      navigate,
      totalPages,
    }
  },
})
</script>

<template>
  <div class="pagination-wrapper">
    <div v-if="enable" class="pagination-list">
      <div class="btn-group">
        <div
          v-if="currentPage > 1"
          class="prev"
          role="navigation"
          unselectable="on"
          @click="navigate(currentPage - 1)"
        >
          {{ i18n.prev }}
        </div>
        <div v-if="displayLeftEllipsis" role="navigation" @click="navigate(1)">
          1
        </div>
        <div v-if="displayLeftEllipsis" class="ellipsis">...</div>
        <div
          v-for="num in indexs"
          :key="num"
          :class="{ active: currentPage === num }"
          role="navigation"
          @click="navigate(num)"
        >
          {{ num }}
        </div>
        <div v-if="displayRightEllipsis" class="ellipsis">...</div>
        <div
          v-if="displayRightEllipsis"
          role="navigation"
          @click="navigate(totalPages)"
        >
          {{ totalPages }}
        </div>
        <div
          v-if="currentPage < totalPages"
          class="next"
          role="navigation"
          @click="navigate(currentPage + 1)"
        >
          {{ i18n.next }}
        </div>
      </div>
      <div class="navigate-wrapper">
        <label for="navigation-text">{{ i18n.navigate }}:&nbsp;</label>
        <input
          id="navigation-text"
          v-model="input"
          type="text"
          @keypress.enter="jumpPage(input)"
        />
        <button
          class="navigate"
          role="navigation"
          :title="i18n.button"
          @click="jumpPage(input)"
        >
          {{ i18n.button }}
        </button>
      </div>
    </div>
  </div>
</template>
