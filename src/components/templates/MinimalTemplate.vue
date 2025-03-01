<script setup lang="ts">
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'
import {computed, reactive} from 'vue'

const store = useConfiguratorStore()
const { personal, social, styles, config } = storeToRefs(store)

const bodyStyles = reactive({
  'font-family': `${styles.value.fontFamily}, sans-serif`,
  'background-color': styles.value.backgroundColor,
  'text-align': styles.value.alignment,
  color: styles.value.textColor,
  'font-size': `${styles.value.fontSize}px`,
})

const lastSocial = computed(() => social.value.selected[social.value.selected.length - 1])

function socialElementStyle(name: string): string | null {
  if (name !== lastSocial.value) {
    return 'padding-right: 10px'
  }

  return null
}
</script>

<template>
  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="padding: 10px; border-top: 1px solid #ddd; margin: auto"
    :style="bodyStyles"
  >
    <tr>
      <td style="padding: 10px">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" :style="bodyStyles">
          <tr>
            <td style="padding-bottom: 10px; font-weight: bold">
              {{ personal.name }}
            </td>
          </tr>
          <tr v-if="personal.position">
            <td style="padding-bottom: 10px">{{ personal.position }}</td>
          </tr>
          <tr v-if="personal.email">
            <td style="padding-bottom: 10px">
              <a :href="`mailto:${personal.email}`" style="text-decoration: none">
                {{ personal.email }}
              </a>
            </td>
          </tr>
          <tr v-if="personal.company">
            <td style="padding-bottom: 10px">{{ personal.company }}</td>
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
                  <td v-if="social.selected.includes('facebook') && social.facebook" :style="socialElementStyle('facebook')">
                    <a :href="social.facebook" target="_blank" style="text-decoration: none"
                      ><img
                        src="https://api.iconify.design/mdi:facebook-box.svg?color=%231877F2"
                        alt="Facebook"
                        width="24"
                        height="24"
                    /></a>
                  </td>
                  <td v-if="social.selected.includes('twitter') && social.twitter" :style="socialElementStyle('twitter')">
                    <a :href="social.twitter" target="_blank" style="text-decoration: none"
                      ><img
                        src="https://api.iconify.design/ri:twitter-x-fill.svg?color=%23000000"
                        alt="Twitter"
                        width="24"
                        height="24"
                    /></a>
                  </td>
                  <td v-if="social.selected.includes('linkedin') && social.linkedin" :style="socialElementStyle('linkedin')">
                    <a :href="social.linkedin" target="_blank" style="text-decoration: none"
                      ><img
                        src="https://api.iconify.design/skill-icons:instagram.svg"
                        alt="LinkedIn"
                        width="24"
                        height="24"
                    /></a>
                  </td>
                  <td v-if="social.selected.includes('instagram') && social.instagram" :style="socialElementStyle('instagram')">
                    <a :href="social.instagram" target="_blank" style="text-decoration: none"
                      ><img
                        src="https://api.iconify.design/devicon:linkedin.svg"
                        alt="Instagram"
                        width="24"
                        height="24"
                    /></a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</template>

<style scoped></style>
