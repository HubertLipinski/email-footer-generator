<script setup lang="ts">
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'

const store = useConfiguratorStore()
const { personal, social, config } = storeToRefs(store)
</script>

<template>
  <table style="width: 100%; font-family: Arial, sans-serif; background-color: #ffffff">
    <tr>
      <td style="padding: 10px; text-align: left; color: #000000">
        <p style="margin: 0; font-size: 16px; font-weight: bold">{{ personal.name }}</p>
        <p style="margin: 5px 0; font-size: 14px; color: #555555">
          {{ personal.position }}{{ personal.company.length ? ' | ' : '' }}{{ personal.company }}
        </p>
      </td>
    </tr>
    <tr v-if="config.socialMediaIcons">
      <td style="padding: 10px; text-align: left; background-color: #ffffff;">
        <table style="border-collapse: collapse;">
          <tr>
            <td style="padding-right: 10px;" v-if="social.linkedin.length">
              <a :href="social.linkedin">
                <img src="https://cdn-icons-png.flaticon.com/24/145/145807.png" alt="LinkedIn" width="24" height="24" style="display: block; border: none;">
              </a>
            </td>
            <td style="padding-right: 10px;" v-if="social.facebook.length">
              <a :href="social.facebook">
                <img src="https://cdn-icons-png.flaticon.com/24/145/145802.png" alt="Facebook" width="24" height="24" style="display: block; border: none;">
              </a>
            </td>
            <td v-if="social.twitter.length">
              <a :href="social.twitter">
                <img src="https://cdn-icons-png.flaticon.com/24/145/145812.png" alt="Twitter" width="24" height="24" style="display: block; border: none;">
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</template>

<style scoped></style>
