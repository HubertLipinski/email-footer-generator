<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useConfiguratorStore } from '@/stores/configurator.ts'

const store = useConfiguratorStore()
const { personal, social, styles, additional } = storeToRefs(store)
</script>

<template>
  <table
    cellpadding="0"
    cellspacing="0"
    style="
      font-family: 'Segoe UI', Tahoma, sans-serif;
      font-size: 14px;
      color: #2c3e50;
      border-collapse: collapse;
      width: 100%;
      background-color: #f8f9fa;
      border-left: 4px solid #3498db;
    "
  >
    <tr>
      <td style="padding: 15px">
        <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%">
          <tr>
            <td style="vertical-align: middle; width: 100px; text-align: center" v-show="true">
              <img
                src="https://placehold.co/400"
                alt="Logo"
                style="max-width: 80px; max-height: 80px; border-radius: 5px"
              />
            </td>
            <td style="vertical-align: top; padding-left: 15px">
              <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%">
                <tr>
                  <td style="font-weight: bold; font-size: 16px; color: #3498db">{{ personal.name }}</td>
                </tr>
                <tr v-if="personal.position">
                  <td style="color: #7f8c8d">{{ personal.position }}</td>
                </tr>
                <tr v-if="personal.company">
                  <td style="padding-top: 5px">{{ personal.company }}</td>
                </tr>
                <tr>
                  <td style="padding-top: 8px">
                    <table cellpadding="0" cellspacing="0" style="border-collapse: collapse">
                      <tr v-if="personal.email">
                        <td style="padding-right: 10px">
                          <a :href="`mailto:${personal.email}`" style="color: #3498db; text-decoration: none">
                            <img
                              src="https://api.iconify.design/material-symbols:alternate-email.svg?color=%233498db"
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
                        <td style="padding-right: 10px; padding-top: 5px">
                          <a href="tel:(555)123-4567" style="color: #3498db; text-decoration: none">
                            <img
                              src="https://api.iconify.design/material-symbols:phone-enabled.svg?color=%233498db"
                              alt="Phone"
                              width="16"
                              height="16"
                              style="vertical-align: middle; margin-right: 5px"
                            />
                            (TODO) 123-4567
                          </a>
                        </td>
                      </tr>
                      <tr v-if="personal.website">
                        <td style="padding-right: 10px; padding-top: 5px">
                          <a href="https://www.example.com" style="color: #3498db; text-decoration: none">
                            <img
                              src="https://api.iconify.design/material-symbols:globe.svg?color=%233498db"
                              alt="Website"
                              width="16"
                              height="16"
                              style="vertical-align: middle; margin-right: 5px"
                            />
                            {{ personal.website }}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 15px">
                    <!--                    <a href="https://linkedin.com/in/johndoe" style="text-decoration: none; margin-right: 8px">-->
                    <!--                      <img src="https://api.iconify.design/mdi:linkedin.svg?color=%233498db" alt="LinkedIn" width="20" height="20"/>-->
                    <!--                    </a>-->
                    <!--                    <a href="https://twitter.com/johndoe" style="text-decoration: none; margin-right: 8px"-->
                    <!--                      ><img src="https://api.iconify.design/ri:twitter-x-fill.svg?color=%233498db" alt="Twitter" width="20" height="20"-->
                    <!--                    /></a>-->
                    <!--                    <a href="https://instagram.com/johndoe" style="text-decoration: none; margin-right: 8px"-->
                    <!--                      ><img src="https://api.iconify.design/mdi:instagram.svg?color=%233498db" alt="Instagram" width="20" height="20"-->
                    <!--                    /></a>-->
                    <a
                      v-for="icon in social.selected"
                      :key="icon.label"
                      :href="icon.value"
                      target="_blank"
                      style="text-decoration: none; margin-right: 8px"
                    >
                      <img :src="`${icon.icon}?color=%233498db`" :alt="icon.label" width="20" height="20" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr v-if="additional.disclaimer.enabled">
            <td
              colspan="2"
              style="padding-top: 15px; font-size: 12px; color: #7f8c8d"
              :style="`color:${additional.disclaimer.color}; text-align: ${styles.alignment}`"
            >
              <p style="padding-top: 10px; border-top: 1px solid #e0e0e0">
                This email and any files transmitted with it are confidential and intended solely for the use of the
                individual or entity to whom they are addressed.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</template>

<style scoped></style>
