<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'
import { computed, reactive } from 'vue'
import { TextAlignment } from '@/types/configurator.ts'

const store = useConfiguratorStore()
const { personal, social, styles, config, additional } = storeToRefs(store)

const bodyStyles = reactive({
  'font-family': `${styles.value.fontFamily}, sans-serif`,
  'background-color': styles.value.backgroundColor,
  'text-align': styles.value.alignment,
  color: styles.value.textColor,
  'font-size': `${styles.value.fontSize}px`,
})

const socialElementStyle = computed(() => {
  if (styles.value.alignment !== TextAlignment.RIGHT) {
    return 'padding-right: 10px'
  }

  return 'padding-left: 10px'
})
</script>

<template>
  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="padding: 20px; border-top: 1px solid #ddd"
    :style="bodyStyles"
  >
    <tr>
      <td style="padding-bottom: 10px; font-weight: bold; font-size: 1.125em">
        {{ personal.name }}
      </td>
    </tr>
    <tr v-if="personal.position">
      <td style="padding-bottom: 10px">
        {{ personal.position }} <span v-if="personal.company">| {{ personal.company }}</span>
      </td>
    </tr>
    <tr v-if="personal.email">
      <td style="padding-bottom: 10px">
        <a :href="`mailto:${personal.email}`" style="text-decoration: none">
          {{ personal.email }}
        </a>
      </td>
    </tr>
    <tr v-if="personal.website">
      <td style="padding-bottom: 10px">
        <a :href="personal.website" target="_blank" style="text-decoration: none">
          {{ personal.website }}
        </a>
      </td>
    </tr>
    <tr v-if="config.socialMediaIcons && social.selected.length">
      <td>
        <table
          role="presentation"
          cellspacing="0"
          cellpadding="0"
          border="0"
          :align="styles.alignment"
          style="margin: auto"
        >
          <tr>
            <td v-if="social.selected.includes('facebook') && social.facebook" :style="socialElementStyle">
              <a :href="social.facebook" target="_blank" style="text-decoration: none"
                ><img
                  src="https://api.iconify.design/mdi:facebook-box.svg?color=%231877F2"
                  alt="Facebook"
                  width="24"
                  height="24"
              /></a>
            </td>
            <td v-if="social.selected.includes('twitter') && social.twitter" :style="socialElementStyle">
              <a :href="social.twitter" target="_blank" style="text-decoration: none"
                ><img
                  src="https://api.iconify.design/ri:twitter-x-fill.svg?color=%23000000"
                  alt="Twitter"
                  width="24"
                  height="24"
              /></a>
            </td>
            <td v-if="social.selected.includes('linkedin') && social.linkedin" :style="socialElementStyle">
              <a :href="social.linkedin" target="_blank" style="text-decoration: none"
                ><img src="https://api.iconify.design/devicon:linkedin.svg" alt="LinkedIn" width="24" height="24"
              /></a>
            </td>
            <td v-if="social.selected.includes('instagram') && social.instagram" :style="socialElementStyle">
              <a :href="social.instagram" target="_blank" style="text-decoration: none"
                ><img
                  src="https://api.iconify.design/mdi:instagram.svg?color=%23000000"
                  alt="Instagram"
                  width="24"
                  height="24"
              /></a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr v-if="additional.disclaimer.enabled">
      <td>
        <p style="margin: 10px 0 0; font-size: 0.75em" :style="`color:${additional.disclaimer.color}`">
          {{ additional.disclaimer.content }}
        </p>
      </td>
    </tr>
  </table>
</template>

<style scoped></style>
