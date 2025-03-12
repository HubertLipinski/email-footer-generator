<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'

const store = useConfiguratorStore()
const { personal, social, styles, additional } = storeToRefs(store)
</script>

<template>
  <table
    cellpadding="0"
    cellspacing="0"
    style="font-family: Georgia, sans-serif; font-size: 14px; color: #0f172a; border-collapse: collapse; width: 100%"
  >
    <tr>
      <td>
        <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%">
          <tr>
            <td style="padding-bottom: 10px">
              <img src="https://placehold.co/400" alt="Logo" style="max-width: 120px; max-height: 60px" />
            </td>
          </tr>
          <tr>
            <td style="font-size: 16px; font-weight: bold">John Doe</td>
          </tr>
          <tr>
            <td style="color: #666; padding-top: 8px">Marketing Manager at Acme Corporation</td>
          </tr>
          <tr>
            <td style="padding-top: 14px">
              <table cellpadding="0" cellspacing="0" style="border-collapse: collapse">
                <tr>
                  <td style="height: 1px; background-color: #0f172a; width: 30px"></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 14px">
              <a :href="`mailto:${personal.email}`" style="color: #0f172a; text-decoration: none">
                {{ personal.email }}
              </a>
              <span v-if="true">
                &nbsp;•&nbsp;
                <a href="tel:(555)123-4567" style="color: #0f172a; text-decoration: none">(TODO) 123-4567</a>
              </span>
              <span v-if="personal.website">
                &nbsp;•&nbsp;
                <a :href="personal.website" style="color: #0f172a; text-decoration: none">{{ personal.website }}</a>
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 14px">
              <a
                v-for="icon in social.selected"
                :key="icon.label"
                :href="icon.value"
                target="_blank"
                style="text-decoration: none; margin-right: 8px"
              >
                <img :src="`${icon.icon}?color=%235F6368`" :alt="icon.label" width="20" height="20" />
              </a>
            </td>
          </tr>
          <tr v-if="additional.disclaimer.enabled">
            <td
              style="padding-top: 15px; font-size: 12px"
              :style="`color:${additional.disclaimer.color}; text-align: ${styles.alignment}`"
            >
              {{ additional.disclaimer.content }}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</template>

<style scoped></style>
