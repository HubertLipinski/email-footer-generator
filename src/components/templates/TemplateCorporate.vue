<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { computed, type StyleValue } from 'vue'
import { useTemplateStyles } from '@/composables/useTemplateStyles.ts'

const store = useConfiguratorStore()
const { personal, social, styles, additional } = storeToRefs(store)

const { rawColor, rawUrl } = useTemplateStyles()

const bodyStyles = computed<StyleValue>(() => ({
  fontFamily: `${styles.value.fontFamily}, sans-serif`,
  fontSize: `${styles.value.fontSize}px`,
  color: styles.value.textColor,
  borderCollapse: 'collapse',
  backgroundColor: styles.value.backgroundColor,
  width: '100%',
  borderLeft: `4px solid ${styles.value.accentColor}`,
}))
</script>

<template>
  <table cellpadding="0" cellspacing="0" :style="bodyStyles">
    <tbody>
      <tr>
        <td style="padding: 15px">
          <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%">
            <tbody>
              <tr>
                <td
                  style="vertical-align: middle; width: 100px; text-align: center"
                  v-if="personal.image.enabled && personal.image.url"
                >
                  <img
                    :src="personal.image.url"
                    alt="Logo"
                    style="max-width: 80px; max-height: 80px; border-radius: 5px"
                  />
                </td>
                <td style="vertical-align: top; padding-left: 15px">
                  <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%">
                    <tbody>
                      <tr>
                        <td style="font-weight: bold; font-size: 16px" :style="{ color: styles.accentColor }">
                          {{ personal.name }}
                        </td>
                      </tr>
                      <tr v-if="personal.position">
                        <td style="padding-top: 5px">{{ personal.position }}</td>
                      </tr>
                      <tr v-if="personal.company">
                        <td style="padding-top: 5px">{{ personal.company }}</td>
                      </tr>
                      <tr>
                        <td style="padding-top: 8px">
                          <table cellpadding="0" cellspacing="0" style="border-collapse: collapse">
                            <tbody>
                              <tr v-if="personal.email">
                                <td style="padding-right: 10px; padding-top: 7px">
                                  <a
                                    :href="`mailto:${personal.email}`"
                                    style="text-decoration: none"
                                    :style="{ color: styles.accentColor }"
                                  >
                                    <img
                                      :src="`https://api.iconify.design/material-symbols:alternate-email.svg?color=%23${rawColor(styles.accentColor)}`"
                                      alt="Email"
                                      width="16"
                                      height="16"
                                      style="vertical-align: middle; margin-right: 5px"
                                    />
                                    {{ personal.email }}
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding-right: 10px; padding-top: 7px">
                                  <a
                                    :href="`tel:${personal.phone}`"
                                    style="text-decoration: none"
                                    :style="{ color: styles.accentColor }"
                                  >
                                    <img
                                      :src="`https://api.iconify.design/material-symbols:phone-enabled.svg?color=%23${rawColor(styles.accentColor)}`"
                                      alt="Phone"
                                      width="16"
                                      height="16"
                                      style="vertical-align: middle; margin-right: 5px"
                                    />
                                    {{ personal.phone }}
                                  </a>
                                </td>
                              </tr>
                              <tr v-if="personal.website">
                                <td style="padding-right: 10px; padding-top: 7px">
                                  <a
                                    href="https://www.example.com"
                                    style="text-decoration: none"
                                    :style="{ color: styles.accentColor }"
                                  >
                                    <img
                                      :src="`https://api.iconify.design/material-symbols:globe.svg?color=%23${rawColor(styles.accentColor)}`"
                                      alt="Website"
                                      width="16"
                                      height="16"
                                      style="vertical-align: bottom; margin-right: 5px"
                                    />
                                    {{ rawUrl(personal.website) }}
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr v-if="social.enabled && social.selected.length">
                        <td style="padding-top: 15px">
                          <a
                            v-for="icon in social.selected"
                            :key="icon.label"
                            :href="icon.value"
                            target="_blank"
                            style="text-decoration: none; margin-right: 8px"
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
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr v-if="additional.disclaimer.enabled">
                <td
                  colspan="2"
                  style="padding-top: 15px; font-size: 12px"
                  :style="{ color: additional.disclaimer.color, textAlign: styles.alignment }"
                >
                  <p style="padding-top: 10px; border-top: 1px solid #e0e0e0">
                    This email and any files transmitted with it are confidential and intended solely for the use of the
                    individual or entity to whom they are addressed.
                  </p>
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
