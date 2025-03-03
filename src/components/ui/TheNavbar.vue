<script setup lang="ts">
import ThemeController from '@/components/ThemeController.vue'
import LanguageController from '@/components/LanguageController.vue'
import { ref } from 'vue'

const title = ref(import.meta.env.VITE_APP_TITLE ?? 'Footer Generator')
</script>

<template>
  <div class="flex justify-between items-center px-2 md:px-0">
    <h1 class="text-xl md:text-2xl font-bold w-full py-4 rounded-box">{{ title }}</h1>
    <div class="inline-flex gap-x-4">
      <LanguageController class="w-20" />
      <ThemeController />
    </div>
  </div>

  <div role="tablist" class="tabs tabs-box p-2">
    <RouterLink to="/" role="tab" class="tab flex-grow" activeClass="tab-active">Editor</RouterLink>
    <RouterLink to="/preview" role="tab" class="tab flex-grow" activeClass="tab-active">Preview</RouterLink>
  </div>
</template>

<style scoped></style>
