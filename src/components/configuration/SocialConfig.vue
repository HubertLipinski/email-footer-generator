<script setup lang="ts">
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'
import { useTranslation } from '@/composables/useTranslation.ts'
import type { Component } from 'vue'
import { ref } from 'vue'
import type { SocialOption } from '@/types/configurator.ts'

import IconFacebook from '~icons/mdi/facebook-box'
import IconX from '~icons/ri/twitter-x-fill'
import IconLinkedIn from '~icons/mdi/linkedin'
import IconInstagram from '~icons/mdi/instagram'

const { t } = useTranslation()

const socialIcons: Record<string, Component> = {
  facebook: IconFacebook,
  twitter: IconX,
  linkedin: IconLinkedIn,
  instagram: IconInstagram,
}

const socialOptions = ref<Record<string, SocialOption>>({
  facebook: {
    label: 'Facebook',
    value: 'https://facebook.com/your-profile',
    icon: 'https://api.iconify.design/mdi:facebook-box.svg',
    color: '#1877F2',
  },
  twitter: {
    label: 'X (Twitter)',
    value: 'https://x.com/your-profile',
    icon: 'https://api.iconify.design/ri:twitter-x-fill.svg',
    color: '#000000',
  },
  linkedin: {
    label: 'LinkedIn',
    value: 'https://linkedin.com/in/your-profile',
    icon: 'https://api.iconify.design/mdi:linkedin.svg',
    color: '#0077B5',
  },
  instagram: {
    label: 'Instagram',
    value: 'https://instagram.com/your-profile',
    icon: 'https://api.iconify.design/mdi:instagram.svg', // ?color=%23C13584
    color: '#C13584',
  },
})

function getSocialComponent(item: SocialOption): Component | null {
  const key = Object.keys(socialOptions.value).find((key) => socialOptions.value[key] === item)
  return key ? socialIcons[key] : null
}

const store = useConfiguratorStore()
const { social } = storeToRefs(store)
</script>

<template>
  <div class="pt-4">
    <label class="fieldset-label max-w-64">
      <input
        type="checkbox"
        name="socialEnabled"
        :true-value="true"
        :false-value="false"
        class="toggle toggle-sm"
        v-model="social.enabled"
      />
      <span class="pl-2 d-block text-base-content">{{ t('editor.form.socialToggle') }}</span>
    </label>

    <div v-show="social.enabled" class="pt-2 pb-4">
      <fieldset class="fieldset flex pb-2 flex-wrap gap-2">
        <legend class="fieldset-legend">{{ t('editor.form.selectIcons') }}</legend>
        <div v-for="(option, key) in socialOptions" :key="key">
          <label
            class="btn btn-soft btn-primary"
            :for="`input-${key}`"
            :class="{ 'btn-active': social.selected.includes(option) }"
          >
            <component :is="socialIcons[key]" />
            <span class="whitespace-nowrap">{{ option.label }}</span>
          </label>
          <input type="checkbox" :id="`input-${key}`" class="hidden" :value="option" v-model="social.selected" />
        </div>
      </fieldset>

      <TransitionGroup name="list">
        <div v-for="option in social.selected" :key="option.label" class="pt-3 flex w-full">
          <label class="input grow-1 mr-1">
            <component :is="getSocialComponent(option)" :style="{ color: option.color }" />
            <input
              type="url"
              :id="`social-${option}`"
              required
              pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$"
              title="Must be valid URL"
              v-model.trim="option.value"
            />
          </label>
          <input
            type="color"
            id="textColor"
            class="input p-0 m-0 border-0 shadow-none max-w-18 color-picker"
            v-model="option.color"
          />
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease-in-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
