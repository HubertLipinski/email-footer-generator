<script setup lang="ts">
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'

const store = useConfiguratorStore()
const { additional } = storeToRefs(store)
</script>

<template>
  <label class="fieldset-label max-w-64 pb-2">
    <input
      type="checkbox"
      :true-value="true"
      :false-value="false"
      class="toggle toggle-sm"
      v-model="additional.disclaimer.enabled"
    />
    <span class="pl-2 d-block text-base-content">Show disclaimer</span>
  </label>

  <div v-if="additional.disclaimer.enabled">
    <fieldset class="fieldset">
      <legend class="fieldset-legend">Disclaimer</legend>
      <textarea class="textarea h-24 w-full max-h-[150px]" v-model="additional.disclaimer.content"></textarea>
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Text Color</legend>
      <div class="inline-flex gap-2">
        <input type="color" class="input flex-none max-w-18 p-0 m-0 border-0" v-model="additional.disclaimer.color" />
        <input type="text" class="input flex-none max-w-40" v-model="additional.disclaimer.color" />
      </div>
    </fieldset>
  </div>
</template>

<style scoped></style>
