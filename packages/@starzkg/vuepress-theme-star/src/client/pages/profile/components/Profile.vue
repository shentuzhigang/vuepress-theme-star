<script setup lang="ts">
import { TabPane, Tabs } from '@starzkg/vuepress-star-shared/client'
import {
  Archive,
  CalendarGraph,
  Footer,
  Nav,
  ProfileCard,
  Timeline,
} from '@theme/components'
import { defineAsyncComponent, FunctionalComponent, h } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Category from './Category.vue'
import Tag from './Tag.vue'

const router = useRouter()

const route = useRoute()

const OrderedTabs: FunctionalComponent = () => {
  return h(
    Tabs,
    {
      modelValue: (route.query.tab as string) || 'overview',
      onTabChange: (name) =>
        router.push({
          path: route.path,
          query: {
            tab: name,
          },
        }),
    },
    () =>
      [
        {
          name: 'overview',
          label: 'Overview',
          component: defineAsyncComponent({
            // 加载函数
            loader: () => import('./Overview.vue'),

            // 加载异步组件时使用的组件
            // loadingComponent: LoadingComponent,
            // 展示加载组件前的延迟时间，默认为 200ms
            delay: 200,

            // 加载失败后展示的组件
            // errorComponent: ErrorComponent,
            // 如果提供了一个 timeout 时间限制，并超时了
            // 也会显示这里配置的报错组件，默认值是：Infinity
            timeout: 3000,
          }),
        },
        {
          name: 'article',
          label: 'Article',
          component: defineAsyncComponent({
            // 加载函数
            loader: () => import('./Article.vue'),

            // 加载异步组件时使用的组件
            // loadingComponent: LoadingComponent,
            // 展示加载组件前的延迟时间，默认为 200ms
            delay: 200,

            // 加载失败后展示的组件
            // errorComponent: ErrorComponent,
            // 如果提供了一个 timeout 时间限制，并超时了
            // 也会显示这里配置的报错组件，默认值是：Infinity
            timeout: 3000,
          }),
        },
        {
          name: 'project',
          label: 'Project',
          component: defineAsyncComponent({
            // 加载函数
            loader: () => import('./Project.vue'),

            // 加载异步组件时使用的组件
            // loadingComponent: LoadingComponent,
            // 展示加载组件前的延迟时间，默认为 200ms
            delay: 200,

            // 加载失败后展示的组件
            // errorComponent: ErrorComponent,
            // 如果提供了一个 timeout 时间限制，并超时了
            // 也会显示这里配置的报错组件，默认值是：Infinity
            timeout: 3000,
          }),
        },
        {
          name: 'calendar',
          label: 'Calendar',
          component: CalendarGraph,
        },
        {
          name: 'timeline',
          label: 'Timeline',
          component: Timeline,
        },
        {
          name: 'archive',
          label: 'Archive',
          component: Archive,
        },
      ].map((item) =>
        h(TabPane, { name: item.name, label: item.label }, () =>
          h(item.component)
        )
      )
  )
}
</script>

<template>
  <div class="profile">
    <header class="profile-header">
      <slot name="navbar">
        <Nav>
          <template #before>
            <slot name="navbar-before" />
          </template>
          <template #after>
            <slot name="navbar-after" />
          </template>
        </Nav>
      </slot>
      <div class="profile-banner" />
    </header>

    <section class="profile-body">
      <aside class="profile-aside">
        <ProfileCard class="mobile-show" />
        <div>
          <Tag />
        </div>
        <div>
          <Category />
        </div>
      </aside>
      <main class="profile-main">
        <OrderedTabs />
      </main>
    </section>

    <footer class="profile-footer">
      <Footer />
    </footer>
  </div>
</template>
