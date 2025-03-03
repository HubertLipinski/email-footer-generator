<script setup lang="ts">
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'

const store = useConfiguratorStore()
const { socialOptions, social, config } = storeToRefs(store)
</script>

<template>
  <div>
    <label class="fieldset-label max-w-64">
      <input
        type="checkbox"
        :true-value="true"
        :false-value="false"
        class="toggle toggle-sm"
        v-model="config.socialMediaIcons"
      />
      <span class="pl-2 d-block text-base-content">Display Icons</span>
    </label>

    <div v-show="config.socialMediaIcons" class="pt-2 pb-4">
      <fieldset class="fieldset flex pb-2 flex-wrap gap-2">
        <legend class="fieldset-legend">Select Icons</legend>
        <div v-for="(option, key) in socialOptions" :key="key">
          <label
            class="btn btn-soft btn-primary"
            :for="`input-${key}`"
            :class="{ 'btn-active': social.selected.includes(key as string) }"
          >
            <component :is="option.component" />
            <span class="whitespace-nowrap">{{ option.label }}</span>
          </label>
          <input type="checkbox" :id="`input-${key}`" class="hidden" :value="key" v-model="social.selected" />
        </div>
      </fieldset>

      <div v-for="option in social.selected" :key="option" class="pt-3">
        <label class="input">
          <component :is="socialOptions[option].component" />
          <input
            type="url"
            required
            pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$"
            title="Must be valid URL"
            :placeholder="socialOptions[option].placeholder"
            v-model.trim="social[option]"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
