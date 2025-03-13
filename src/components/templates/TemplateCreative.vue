<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'
import { computed, type StyleValue } from 'vue'
import { useTemplateStyles } from '@/composables/useTemplateStyles.ts'

const store = useConfiguratorStore()
const { personal, social, styles, additional } = storeToRefs(store)

const { rawColor } = useTemplateStyles()

const bodyStyles = computed<StyleValue>(() => ({
  fontFamily: `${styles.value.fontFamily}, sans-serif`,
  fontSize: `${styles.value.fontSize}px`,
  color: styles.value.textColor,
  borderCollapse: 'collapse',
  backgroundColor: styles.value.backgroundColor,
  width: '100%',
}))
</script>

<template>
  <table cellpadding="0" cellspacing="0" :style="bodyStyles">
    <tbody>
      <tr>
        <td style="padding-bottom: 15px">
          <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%">
            <tr>
              <td style="width: 60%">
                <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%">
                  <tr>
                    <td
                      style="font-size: 20px; font-weight: 700; letter-spacing: 1px"
                      :style="{ color: styles.accentColor }"
                    >
                      {{ personal.name }}
                    </td>
                  </tr>
                  <tr v-if="personal.position">
                    <td
                      style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; padding-top: 5px"
                      :style="{ color: styles.textColor }"
                    >
                      {{ personal.position }}
                    </td>
                  </tr>
                </table>
              </td>
              <td style="width: 40%; text-align: right" v-show="true">
                <img src="https://placehold.co/400" alt="Logo" style="max-width: 100px; max-height: 50px" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td
          style="padding: 15px 0; border-top: 2px solid; border-bottom: 2px solid"
          :style="{ borderColor: styles.accentColor }"
        >
          <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%">
            <tr>
              <td style="width: 50%">
                <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%">
                  <tr>
                    <td style="font-size: 12px">
                      <a
                        :href="`mailto:${personal.email}`"
                        style="text-decoration: none"
                        :style="{ color: styles.accentColor }"
                      >
                        {{ personal.email }}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 12px; padding-top: 10px">
                      <a href="tel:(555)123-4567" style="text-decoration: none" :style="{ color: styles.textColor }"
                        >(TODO) 123-4567</a
                      >
                    </td>
                  </tr>
                </table>
              </td>
              <td style="width: 50%; text-align: right">
                <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%">
                  <tr v-if="personal.company">
                    <td style="font-size: 12px; text-align: right">{{ personal.company }}</td>
                  </tr>
                  <tr v-if="personal.website">
                    <td style="font-size: 12px; padding-top: 10px; text-align: right">
                      <a
                        :href="personal.website"
                        target="_blank"
                        style="text-decoration: none"
                        :style="{ color: styles.textColor }"
                      >
                        {{ personal.website }}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr v-if="social.enabled && social.selected.length">
        <td style="padding-top: 15px; text-align: center">
          <a
            v-for="icon in social.selected"
            :key="icon.label"
            :href="icon.value"
            target="_blank"
            style="text-decoration: none; margin: 0 8px"
          >
            <img
              :src="`${icon.icon}?color=%23${rawColor(styles.accentColor)}`"
              :alt="icon.label"
              width="20"
              height="20"
            />
          </a>
        </td>
      </tr>
      <tr v-if="additional.disclaimer.enabled">
        <td
          style="padding-top: 15px; font-size: 12px"
          :style="`color:${additional.disclaimer.color}; text-align: ${styles.alignment}`"
        >
          <p>
            {{ additional.disclaimer.content }}
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
