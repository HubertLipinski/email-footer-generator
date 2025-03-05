<script setup lang="ts">
import GeneratorPreview from '@/components/GeneratorPreview.vue'
import { useTranslation } from '@/composables/useTranslation.ts'

const { t } = useTranslation()
</script>

<template>
  <div class="grow-0 bg-base-200 rounded-box p-6 w-full gap-6 overflow-x-hidden">
    <h2 class="text-xl font-semibold mb-6">{{ t('home.preview') }}</h2>
    <GeneratorPreview />
  </div>
</template>

<style scoped></style>
