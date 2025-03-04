<script setup lang="ts">
import { computed, inject, readonly, ref } from 'vue'
import { injectionKey } from '@/components/ui/tabs/TabsWrapper.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})

const tabsProvider = inject(injectionKey, {
  withinTabs: false,
  activeTab: readonly(ref()),
  /* eslint-disable @typescript-eslint/no-unused-vars */
  registerTab: (title: string) => {},
  activateTab: (title: string) => {},
  /* eslint-enable @typescript-eslint/no-unused-vars */
})

if (!tabsProvider.withinTabs) {
  throw new Error('Tab must be used within a TabsWrapper component')
}

tabsProvider.registerTab(props.title)

if (!tabsProvider.activeTab.value) {
  tabsProvider.activateTab(props.title)
}

const isActive = computed(() => tabsProvider.activeTab.value === props.title)
</script>

<template>
  <div
    class="tab-content"
    v-show="isActive"
    data-test="tab-content"
    role="tabpanel"
    :id="`tabPanel-${props.title}`"
    :aria-labelledby="`tab-${props.title}`"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.tab-content {
  display: block;
}
</style>
