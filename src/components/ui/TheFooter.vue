<script setup lang="ts">
import IconGithub from '~icons/mdi/github'
import { ref } from 'vue'
import { useTranslation } from '@/composables/useTranslation.ts'

const personalUrl = ref(import.meta.env.VITE_PERSONAL_URL)

const { t } = useTranslation()
</script>

<template>
  <div class="w-full bg-base p-4 rounded-box text-center text-base-content grow-1 place-content-end">
    <div class="flex items-center justify-center flex-wrap gap-2 mb-4">
      <p class="basis-full">
        <span class="font-mono">&copy; {{ new Date().getFullYear() }}</span> by
        <a :href="personalUrl" target="_blank" class="link link-hover hover:text-primary font-bold">Hubert Lipiński</a>
      </p>
      <a
        href="https://github.com/HubertLipinski"
        target="_blank"
        class="link link-hover flex items-center justify-center hover:text-primary"
      >
        <IconGithub class="mr-1" />
        {{ t('home.sourceCode') }}
      </a>
    </div>
  </div>
</template>

<style scoped></style>
