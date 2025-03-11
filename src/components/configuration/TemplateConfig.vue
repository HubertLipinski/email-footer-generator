<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation } from '@/composables/useTranslation.ts'
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'

const { t } = useTranslation()

const store = useConfiguratorStore()
const { template } = storeToRefs(store)

const templates = ref([
  {
    name: 'default',
    img: 'https://placehold.co/1280x400', // TODO: images from assets
  },
  {
    name: 'corporate',
    img: 'https://placehold.co/1280x400',
  },
  {
    name: 'creative',
    img: 'https://placehold.co/1280x400',
  },
  {
    name: 'minimalistic',
    img: 'https://placehold.co/1280x400',
  },
  {
    name: 'luxury',
    img: 'https://placehold.co/1280x400',
  },
  {
    name: 'modern',
    img: 'https://placehold.co/1280x400',
  },
])

const selectedTemplate = ref('default')

function selectTemplate(name: string) {
  selectedTemplate.value = name
  template.value.selected = name
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
        class="flex flex-col p-2 gap-1 transition-all duration-300 hover:scale-98 hover:cursor-pointer brightness-95 hover:brightness-100 rounded-lg"
        :class="
          selectedTemplate === template.name
            ? 'border-1 border-primary font-semibold hover:scale-100 brightness-100'
            : 'border-1 border-transparent'
        "
        @click="selectTemplate(template.name)"
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
