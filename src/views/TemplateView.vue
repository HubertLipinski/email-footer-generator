<script setup lang="ts">
import TemplateDefault from '@/components/templates/TemplateDefault.vue' // TODO: update
import TemplateCreative from '@/components/templates/TemplateCreative.vue'
import TemplateCorporate from '@/components/templates/TemplateCorporate.vue'
import TemplateLuxury from '@/components/templates/TemplateLuxury.vue'
import TemplateMinimalistic from '@/components/templates/TemplateMinimalistic.vue'
import { shallowRef, useTemplateRef } from 'vue'
import { useHtmlPreview } from '@/composables/useHtmlPreview.ts'
import TemplateModern from '@/components/templates/TemplateModern.vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const templates = shallowRef([
  {
    name: 'Default',
    component: TemplateDefault,
  },
  {
    name: 'Creative',
    component: TemplateCreative,
  },
  {
    name: 'Corporate',
    component: TemplateCorporate,
  },
  {
    name: 'Luxury',
    component: TemplateLuxury,
  },
  {
    name: 'Minimalistic',
    component: TemplateMinimalistic,
  },
  {
    name: 'Modern',
    component: TemplateModern,
  },
])

const tmp = shallowRef({
  name: 'WIP',
  component: TemplateMinimalistic,
})

const template = useTemplateRef('devPreview')

const { iframeSrcDoc, renderHash, iframeHeight, render } = useHtmlPreview(template)
</script>

<template>
  <div>
    <div class="py-6">
      <p class="py-2">{{ tmp.name }}</p>
      <div ref="devPreview" v-show="false">
        <component :is="tmp.component" :key="renderHash" />
      </div>
      <iframe :key="renderHash" :srcdoc="iframeSrcDoc" class="w-full" :style="{ height: iframeHeight }" tabindex="-1" />
    </div>
    <button class="btn btn-primary float-right" @click="render">Reload</button>
  </div>
</template>

<style scoped></style>
