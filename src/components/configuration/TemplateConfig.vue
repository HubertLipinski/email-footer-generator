<script setup lang="ts">
import TemplateDefault from '@/components/templates/TemplateDefault.vue'
import TemplateCorporate from '@/components/templates/TemplateCorporate.vue'
import TemplateCreative from '@/components/templates/TemplateCreative.vue'
import TemplateMinimalistic from '@/components/templates/TemplateMinimalistic.vue'
import TemplateLuxury from '../templates/TemplateLuxury.vue'
import TemplateModern from '@/components/templates/TemplateModern.vue'

import { ref } from 'vue'
import { useTranslation } from '@/composables/useTranslation.ts'
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'
import type { Component } from 'vue'

const { t } = useTranslation()

const store = useConfiguratorStore()
const { template } = storeToRefs(store)

const templates = ref([
  {
    name: 'default',
    img: 'https://placehold.co/1280x400', // TODO: images from assets
    component: TemplateDefault,
  },
  {
    name: 'corporate',
    img: 'https://placehold.co/1280x400',
    component: TemplateCorporate,
  },
  {
    name: 'creative',
    img: 'https://placehold.co/1280x400',
    component: TemplateCreative,
  },
  {
    name: 'minimalistic',
    img: 'https://placehold.co/1280x400',
    component: TemplateMinimalistic,
  },
  {
    name: 'luxury',
    img: 'https://placehold.co/1280x400',
    component: TemplateLuxury,
  },
  {
    name: 'modern',
    img: 'https://placehold.co/1280x400',
    component: TemplateModern,
    disabled: true,
  },
])

const selectedTemplate = ref('default')

function selectTemplate({ name, component }: { name: string; component: Component }) {
  selectedTemplate.value = name
  template.value.selected.name = name
  template.value.selected.component = component
}
</script>

<template>
  <div class="flex flex-col tab-content pt-2">
    <h3 class="text-md font-semibold">{{ t('editor.form.selectTemplate') }}</h3>
    <!--    TODO: disclaimer?-->
    <!--    <span class="text-base-content/70 text-sm">Based on the template selected, the available options in the configurator may change</span>-->

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
      <button
        v-for="template in templates"
        :key="template.name"
        class="flex flex-col p-2 gap-1 transition-all duration-300 hover:scale-98 hover:cursor-pointer brightness-95 hover:brightness-100 rounded-lg disabled:brightness-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
        :class="
          selectedTemplate === template.name
            ? 'border-1 border-primary font-semibold hover:scale-100 brightness-100'
            : 'border-1 border-transparent'
        "
        @click="selectTemplate(template)"
        :disabled="template.disabled"
      >
        <img :src="template.img" :alt="template.name" class="rounded-sm" />
        <span class="py-1">{{ t(`template.${template.name}`) }}</span>
      </button>
    </div>

    <div class="w-full flex justify-end mt-4 pt-4">
      <button class="btn btn-primary btn-block">Next</button>
    </div>
  </div>
</template>

<style scoped></style>
