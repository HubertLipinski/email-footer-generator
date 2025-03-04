<script setup lang="ts">
import { provide, readonly, ref } from 'vue'

const tabs = ref<string[]>([])
const activeTab = ref<string>()

function activateTab(title: string) {
  activeTab.value = title
}

function registerTab(title: string) {
  if (tabs.value.includes(title)) return
  tabs.value.push(title)
}

provide(injectionKey, {
  withinTabs: true,
  registerTab,
  activateTab,
  activeTab: readonly(activeTab),
})
</script>

<script lang="ts">
import type { InjectionKey, Ref } from 'vue'

export const injectionKey = Symbol('TheTabs') as InjectionKey<{
  withinTabs: boolean
  registerTab: (title: string) => void
  activeTab: Readonly<Ref<string | undefined>>
  activateTab: (title: string) => void
}>
</script>

<template>
  <div class="h-full tabs tabs-border tabs-lg gap-3" role="tablist">
    <a
      role="tab"
      v-for="tab in tabs"
      :key="tab"
      :class="{ 'btn-active': activeTab === tab }"
      class="btn btn-soft btn-primary w-[100px]"
      @click="activateTab(tab)"
      @keydown.enter.space="activateTab(tab)"
      :aria-selected="activeTab === tab"
      :aria-controls="`tabPanel-${tab}`"
      :id="`tab-${tab}`"
      data-test="tab-title"
      tabindex="0"
    >
      {{ tab }}
    </a>

    <slot></slot>
  </div>
</template>

<style scoped>
.tab-content {
  height: 100%;
  display: block;
}
</style>
