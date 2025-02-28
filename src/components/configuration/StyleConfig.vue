<script setup lang="ts">
import { ref } from 'vue'
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'

const fontOptions = ref([
  'Arial',
  'Helvetica',
  'Tahoma',
  'Verdana',
  'Trebuchet MS',
  'Geneva',
  'Times New Roman',
  'Georgia',
  'Garamond',
  'Courier New',
  'Lucida Console',
  'Monaco',
])

const alignOptions = ref(['left', 'center', 'right'])

const store = useConfiguratorStore()
const { styles } = storeToRefs(store)
</script>

<template>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">Font Family</legend>
    <select class="select" v-model="styles.fontFamily">
      <option v-for="font in fontOptions" :key="font">{{ font }}</option>
    </select>
  </fieldset>

  <fieldset class="fieldset">
    <legend class="fieldset-legend">Background Color</legend>
    <div class="inline-flex gap-2">
      <input type="color" class="input flex-none max-w-18 p-0 m-0 border-0" v-model="styles.backgroundColor" />
      <input type="text" class="input flex-none max-w-40" v-model="styles.backgroundColor" />
    </div>
  </fieldset>

  <fieldset class="fieldset">
    <legend class="fieldset-legend">Text Color</legend>
    <div class="inline-flex gap-2">
      <input type="color" class="input flex-none max-w-18 p-0 m-0 border-0" v-model="styles.textColor" />
      <input type="text" class="input flex-none max-w-40" v-model="styles.textColor" />
    </div>
  </fieldset>

  <fieldset class="fieldset">
    <legend class="fieldset-legend">Font Size: {{ styles.fontSize }} px</legend>
    <div class="w-full max-w-xs py-1">
      <input type="range" min="10" max="20" class="range range-xs" step="1" v-model="styles.fontSize" />
      <div class="flex justify-between px-2.5 mt-3 text-xs">
        <span v-for="number in 11" :key="number">{{ 9 + number }}</span>
      </div>
    </div>
  </fieldset>

  <fieldset class="fieldset">
    <legend class="fieldset-legend">Text alignment</legend>
    <div class="flex items-start gap-2">
      <div v-for="alignment in alignOptions" :key="`input-${alignment}`">
        <label
          class="btn btn-outline btn-primary"
          :for="`alignment-${alignment}`"
          :class="{ 'btn-active': styles.alignment === alignment }"
        >
          <span class="whitespace-nowrap capitalize">{{ alignment }}</span>
        </label>
        <input
          type="radio"
          name="alignment"
          :id="`alignment-${alignment}`"
          class="hidden"
          :value="alignment"
          v-model="styles.alignment"
        />
      </div>
    </div>
  </fieldset>
</template>

<style scoped></style>
