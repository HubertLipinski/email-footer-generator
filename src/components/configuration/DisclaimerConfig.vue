<script setup lang="ts">
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'
import { useTranslation } from '@/composables/useTranslation.ts'

const store = useConfiguratorStore()
const { additional } = storeToRefs(store)

const { t } = useTranslation()
</script>

<template>
  <div class="pt-4">
    <label class="fieldset-label max-w-64 pb-2">
      <input
        type="checkbox"
        name="showDisclaimer"
        :true-value="true"
        :false-value="false"
        class="toggle toggle-sm"
        v-model="additional.disclaimer.enabled"
      />
      <span class="pl-2 d-block text-base-content">{{ t('editor.form.disclaimerToggle') }}</span>
    </label>

    <div v-if="additional.disclaimer.enabled">
      <fieldset class="fieldset">
        <legend class="fieldset-legend">{{ t('editor.form.disclaimer') }}</legend>
        <textarea
          name="disclaimer"
          class="textarea h-24 w-full max-h-[150px]"
          v-model="additional.disclaimer.content"
        ></textarea>
      </fieldset>

      <fieldset class="fieldset">
        <legend class="fieldset-legend">{{ t('editor.form.textColor') }}</legend>
        <div class="inline-flex gap-2">
          <input
            type="color"
            id="disclaimerColor"
            class="input flex-none max-w-18 p-0 m-0 border-0 color-picker"
            v-model="additional.disclaimer.color"
          />
          <label for="disclaimerColor" class="label text-base-content text-base hover:cursor-text">
            {{ additional.disclaimer.color }}
          </label>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<style scoped></style>
