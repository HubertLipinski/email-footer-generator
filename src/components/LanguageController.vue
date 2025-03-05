<script setup lang="ts">
import { useTranslation } from '@/composables/useTranslation.ts'

const { selected, availableLocales } = useTranslation()
</script>

<template>
  <select class="select select-ghost" id="language" aria-label="Language" v-model="selected">
    <option v-for="option in availableLocales" :key="option.value" :value="option.value">{{ option.label }}</option>
  </select>
</template>

<style scoped></style>
