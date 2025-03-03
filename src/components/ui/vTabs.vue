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

export const injectionKey = Symbol('vTabs') as InjectionKey<{
  withinTabs: boolean
  registerTab: (title: string) => void
  activeTab: Readonly<Ref<string | undefined>>
  activateTab: (title: string) => void
}>
</script>

<template>
  <div class="h-full tabs tabs-border tabs-lg gap-3">
    <a
      role="tab"
      class="btn btn-soft btn-primary"
      v-for="tab in tabs"
      :class="{ 'btn-active': activeTab === tab }"
      @click="activateTab(tab)"
      :key="tab"
      data-test="tab-title"
    >
      {{ tab }}
    </a>

    <div class="tab-content pt-4">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.tab-content {
  height: 100%;
  display: block;
}
</style>
