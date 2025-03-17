<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'
import { useTemplateStyles } from '@/composables/useTemplateStyles.ts'
import { computed, type StyleValue } from 'vue'

const store = useConfiguratorStore()
const { personal, social, styles, additional } = storeToRefs(store)

const { rawColor, rawUrl } = useTemplateStyles()

const bodyStyles = computed<StyleValue>(() => ({
  fontFamily: `${styles.value.fontFamily}, sans-serif`,
  fontSize: `${styles.value.fontSize}px`,
  color: styles.value.textColor,
  borderCollapse: 'collapse',
  width: '100%',
}))
</script>

<template>
  <table cellpadding="0" cellspacing="0" :style="bodyStyles">
    <tbody>
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%">
            <tbody>
              <tr v-if="personal.image.enabled && personal.image.url">
                <td style="padding: 10px 10px 15px 10px">
                  <img :src="personal.image.url" alt="Logo" style="max-width: 120px; max-height: 60px" />
                </td>
              </tr>
              <tr>
                <td style="font-size: 16px; font-weight: bold; padding-left: 10px">{{ personal.name }}</td>
              </tr>
              <tr>
                <td style="padding-top: 8px; padding-left: 10px" :style="{ color: styles.textColor }">
                  {{ personal.position }} <span v-if="personal.company">| {{ personal.company }}</span>
                </td>
              </tr>
              <tr>
                <td style="padding-top: 14px; padding-left: 10px">
                  <table cellpadding="0" cellspacing="0" style="border-collapse: collapse">
                    <tbody>
                      <tr>
                        <td style="height: 1px; width: 30px" :style="{ backgroundColor: styles.accentColor }"></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding-top: 14px; padding-left: 10px">
                  <a
                    :href="`mailto:${personal.email}`"
                    style="text-decoration: none"
                    :style="{ color: styles.textColor }"
                  >
                    {{ personal.email }}
                  </a>
                  <span>
                    &nbsp;•&nbsp;
                    <a
                      :href="`tel:${personal.phone}`"
                      style="text-decoration: none"
                      :style="{ color: styles.textColor }"
                    >
                      {{ personal.phone }}
                    </a>
                  </span>
                  <span v-if="personal.website">
                    &nbsp;•&nbsp;
                    <a :href="personal.website" style="text-decoration: none" :style="{ color: styles.textColor }">
                      {{ rawUrl(personal.website) }}
                    </a>
                  </span>
                </td>
              </tr>
              <tr v-if="social.enabled && social.selected.length">
                <td style="padding-top: 14px; padding-left: 10px">
                  <a
                    v-for="icon in social.selected"
                    :key="icon.label"
                    :href="icon.value"
                    target="_blank"
                    style="text-decoration: none; margin-right: 8px"
                  >
                    <img
                      :src="`${icon.icon}?color=%23${rawColor(styles.textColor)}`"
                      :alt="icon.label"
                      width="20"
                      height="20"
                    />
                  </a>
                </td>
              </tr>
              <tr v-if="additional.disclaimer.enabled">
                <td
                  style="padding-top: 15px; font-size: 12px; padding-left: 10px; padding-bottom: 10px"
                  :style="`color:${additional.disclaimer.color}; text-align: ${styles.alignment}`"
                >
                  {{ additional.disclaimer.content }}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
