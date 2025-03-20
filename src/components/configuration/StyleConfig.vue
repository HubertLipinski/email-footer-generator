<script setup lang="ts">
import { ref } from 'vue'
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'
import { useTranslation } from '@/composables/useTranslation.ts'
import { FONT_OPTIONS, type FontOption } from '@/types/fontOptions.ts'
import { TextAlignment, type TextAlignmentValue } from '@/types/configurator.ts'

const fontOptions = ref<FontOption[]>([...Object.values(FONT_OPTIONS)])

const alignOptions = ref<TextAlignmentValue[]>([TextAlignment.LEFT, TextAlignment.CENTER, TextAlignment.RIGHT])

const store = useConfiguratorStore()
const { styles } = storeToRefs(store)

const { t } = useTranslation()
</script>

<template>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">{{ t('editor.form.fontFamily') }}</legend>
    <select class="select" v-model="styles.fontFamily" name="fontFamily">
      <option v-for="font in fontOptions" :key="font">{{ font }}</option>
    </select>
  </fieldset>

  <fieldset class="fieldset">
    <legend class="fieldset-legend">{{ t('editor.form.backgroundColor') }}</legend>
    <div class="inline-flex gap-2">
      <input
        type="color"
        id="backgroundColor"
        class="input flex-none max-w-18 p-0 m-0 border-0 shadow-none color-picker"
        v-model="styles.backgroundColor"
      />
      <label for="backgroundColor" class="label text-base-content text-base hover:cursor-text">
        {{ styles.backgroundColor }}
      </label>
    </div>
  </fieldset>

  <fieldset class="fieldset">
    <legend class="fieldset-legend">{{ t('editor.form.textColor') }}</legend>
    <div class="inline-flex gap-2">
      <input
        type="color"
        id="textColor"
        class="input flex-none max-w-18 p-0 m-0 border-0 shadow-none color-picker"
        v-model="styles.textColor"
      />
      <label for="textColor" class="label text-base-content text-base hover:cursor-text">
        {{ styles.textColor }}
      </label>
    </div>
  </fieldset>

  <fieldset class="fieldset">
    <legend class="fieldset-legend">{{ t('editor.form.accentColor') }}</legend>
    <div class="inline-flex gap-2">
      <input
        type="color"
        id="accentColor"
        class="input flex-none max-w-18 p-0 m-0 border-0 shadow-none color-picker"
        v-model="styles.accentColor"
      />
      <label for="accentColor" class="label text-base-content text-base hover:cursor-text">
        {{ styles.accentColor }}
      </label>
    </div>
  </fieldset>

  <fieldset class="fieldset">
    <legend class="fieldset-legend">{{ t('editor.form.fontSize', { value: `${styles.fontSize} px` }) }}</legend>
    <div class="w-full max-w-xs py-1">
      <input
        type="range"
        name="fontSize"
        min="10"
        max="20"
        class="range range-xs range-primary"
        step="1"
        v-model="styles.fontSize"
      />
      <div class="flex justify-between mt-3 text-xs">
        <span v-for="number in 11" :key="number">{{ 9 + number }}</span>
      </div>
    </div>
  </fieldset>

  <fieldset class="fieldset">
    <legend class="fieldset-legend">{{ t('editor.form.textAlignment') }}</legend>
    <div class="flex items-start gap-2">
      <div v-for="alignment in alignOptions" :key="`input-${alignment}`">
        <label
          class="btn btn-outline btn-primary"
          :for="`alignment-${alignment}`"
          :class="{ 'btn-active': styles.alignment === alignment }"
        >
          <span class="whitespace-nowrap capitalize">{{ t(`editor.form.${alignment}`) }}</span>
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
