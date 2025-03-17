<script setup lang="ts">
import TemplateDefault from '@/components/templates/TemplateDefault.vue'
import TemplateCorporate from '@/components/templates/TemplateCorporate.vue'
import TemplateCreative from '@/components/templates/TemplateCreative.vue'
import TemplateMinimalistic from '@/components/templates/TemplateMinimalistic.vue'
import TemplateLuxury from '../templates/TemplateLuxury.vue'
// import TemplateModern from '@/components/templates/TemplateModern.vue'

import { ref } from 'vue'
import { useTranslation } from '@/composables/useTranslation.ts'
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'
import type { Component } from 'vue'

import { THEME_OPTIONS } from '@/types/themeOptions.ts'

const { t } = useTranslation()

const store = useConfiguratorStore()
const { template } = storeToRefs(store)

import imgDefault from '@/assets/templates/default.webp'
import imgCorporate from '@/assets/templates/corporate.webp'
import imgCreative from '@/assets/templates/creative.webp'
import imgMinimalistic from '@/assets/templates/minimalistic.webp'
import imgLuxury from '@/assets/templates/luxury.webp'

const templates = ref([
  {
    name: THEME_OPTIONS.Default,
    img: imgDefault,
    component: TemplateDefault,
  },
  {
    name: THEME_OPTIONS.Creative,
    img: imgCreative,
    component: TemplateCreative,
  },
  {
    name: THEME_OPTIONS.Corporate,
    img: imgCorporate,
    component: TemplateCorporate,
  },
  {
    name: THEME_OPTIONS.Luxury,
    img: imgLuxury,
    component: TemplateLuxury,
  },
  {
    name: THEME_OPTIONS.Minimalistic,
    img: imgMinimalistic,
    component: TemplateMinimalistic,
  },
  // {
  //   name: 'modern',
  //   img: 'https://placehold.co/1280x400',
  //   component: TemplateModern,
  //   disabled: true,
  // },
])

function selectTemplate({ name, component }: { name: string; component: Component }) {
  template.value.selected.name = name
  template.value.selected.component = component

  store.updateTemplateStyles(name)
}
</script>

<template>
  <div class="flex flex-col tab-content pt-2">
    <h3 class="text-md font-semibold">{{ t('editor.form.selectTemplate') }}</h3>
    <span class="text-base-content/70 text-sm" v-show="false"
      >Based on the template selected, the available options and styles in the configurator may change</span
    >

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 items-center">
      <button
        v-for="tmpl in templates"
        :key="tmpl.name"
        class="flex flex-col p-2 gap-3 transition-all justify-between duration-300 hover:scale-98 hover:cursor-pointer brightness-95 hover:brightness-100 rounded-lg disabled:brightness-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
        :class="
          template.selected.name === tmpl.name
            ? 'border-1 border-primary font-semibold hover:scale-100 brightness-100'
            : 'border-1 border-transparent'
        "
        @click="selectTemplate(tmpl)"
        :disabled="tmpl.disabled"
      >
        <img :src="tmpl.img" :alt="`Theme ${tmpl.name}`" class="rounded-sm" />
        <span class="py-1">{{ t(`template.${tmpl.name}`) }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
