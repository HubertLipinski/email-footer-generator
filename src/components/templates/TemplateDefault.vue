<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'
import { computed, type StyleValue } from 'vue'
import { useTemplateStyles } from '@/composables/useTemplateStyles.ts'

const store = useConfiguratorStore()
const { personal, social, styles, additional } = storeToRefs(store)

const { rawColor, rawUrl } = useTemplateStyles()

const bodyStyles = computed<StyleValue>(() => ({
  fontFamily: `${styles.value.fontFamily}, sans-serif`,
  fontSize: `${styles.value.fontSize}px`,
  backgroundColor: styles.value.backgroundColor,
  textAlign: styles.value.alignment,
  color: styles.value.textColor,
  padding: '0',
}))
</script>

<template>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" :style="bodyStyles">
    <tbody>
      <tr>
        <td style="padding: 0 5px 10px 5px" v-if="personal.image.enabled && personal.image.url">
          <img :src="personal.image.url" alt="Logo" style="max-width: 100px; max-height: 50px" />
        </td>
      </tr>
      <tr>
        <td style="padding: 0 5px 5px; font-weight: bold; font-size: 1.125em">
          {{ personal.name }}
        </td>
      </tr>
      <tr v-if="personal.position">
        <td style="padding: 0 5px 12px 5px">
          {{ personal.position }} <span v-if="personal.company">| {{ personal.company }}</span>
        </td>
      </tr>
      <tr v-if="personal.email">
        <td style="padding: 0 5px 10px 5px">
          <a :href="`mailto:${personal.email}`" style="text-decoration: none" :style="{ color: styles.accentColor }">
            {{ personal.email }}
          </a>
        </td>
      </tr>
      <tr v-if="personal.website">
        <td style="padding: 0 5px 10px 5px">
          <a
            :href="personal.website"
            target="_blank"
            style="text-decoration: none"
            :style="{ color: styles.accentColor }"
          >
            {{ rawUrl(personal.website) }}
          </a>
        </td>
      </tr>
      <tr v-if="social.enabled && social.selected.length">
        <td style="padding-top: 2px">
          <table
            role="presentation"
            cellspacing="0"
            cellpadding="0"
            border="0"
            :align="styles.alignment"
            style="margin: auto"
          >
            <tbody>
              <tr>
                <td v-for="icon in social.selected" :key="icon.label" style="padding: 0 5px">
                  <a :href="icon.value" target="_blank" style="text-decoration: none">
                    <img
                      :src="`${icon.icon}?color=%23${rawColor(icon.color)}`"
                      :alt="icon.label"
                      width="24"
                      height="24"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="additional.disclaimer.enabled">
        <td style="padding: 0 5px 0 5px">
          <p
            style="margin: 10px 0 0; font-size: 0.75em; border-top: 1px solid #e0e0e0; padding-top: 10px"
            :style="`color:${additional.disclaimer.color}`"
          >
            {{ additional.disclaimer.content }}
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
