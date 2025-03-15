<script setup lang="ts">
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'
import { useTranslation } from '@/composables/useTranslation.ts'
import { type Component, onMounted, ref, watch } from 'vue'
import type { SocialOption } from '@/types/configurator.ts'
import Draggable from 'vuedraggable'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

import IconFacebook from '~icons/mdi/facebook-box'
import IconX from '~icons/ri/twitter-x-fill'
import IconLinkedIn from '~icons/mdi/linkedin'
import IconInstagram from '~icons/mdi/instagram'

const { t, selected } = useTranslation()

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
    icon: 'https://api.iconify.design/mdi:instagram.svg',
    color: '#C13584',
  },
})

function getSocialComponent(item: SocialOption): Component | null {
  const key = Object.keys(socialOptions.value).find((key) => socialOptions.value[key] === item)
  return key ? socialIcons[key] : null
}

const store = useConfiguratorStore()
const { social } = storeToRefs(store)

onMounted(() => {
  if (social.value.selected.length === 0) {
    social.value.selected.push(socialOptions.value['facebook'])
    social.value.selected.push(socialOptions.value['twitter'])
  }
})

const schema = z.object({
  value: z.string().nonempty().url(),
})

const { validate } = useForm({
  validationSchema: toTypedSchema(schema),
  validateOnMount: true,
})

const validateURL = (value: string) => {
  return schema.safeParse({ value })
}

const handleValidation = (value: string, label: string) => {
  const result = validateURL(value)
  const element = social.value.selected.find((option) => option.label === label)

  if (!element) return

  element.error = result.success ? '' : 'invalid_url'
}

watch(selected, () => validate())
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

      <Draggable
        v-model="social.selected"
        item-key="label"
        handle=".drag-handle"
        tag="div"
        class="overflow-hidden pt-2"
      >
        <template #item="{ element, index }">
          <div class="flex w-full items-start gap-2 pt-4 py-1">
            <span class="drag-handle cursor-move text-lg pt-2.25 pr-2">
              <i-system-uicons-drag-vertical />
            </span>
            <div class="flex flex-col w-full gap-y-2">
              <div class="inline-flex">
                <label class="input grow-1 mr-1">
                  <component :is="getSocialComponent(element)" :style="{ color: element.color }" />
                  <input
                    type="url"
                    :id="`social-${index}`"
                    v-model.trim="element.value"
                    @blur="handleValidation(element.value, element.label)"
                  />
                </label>

                <input
                  type="color"
                  class="input p-0 m-0 border-0 shadow-none max-w-18 color-picker"
                  v-model="element.color"
                  v-show="false"
                />
              </div>
              <div v-if="element.error" class="inline-flex text-error text-xs">
                {{ t(`validation.${element.error}`) }}
              </div>
            </div>
          </div>
        </template>
      </Draggable>
    </div>
  </div>
</template>
