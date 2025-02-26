<script setup lang="ts">
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'

const store = useConfiguratorStore()
const { personal, social, config } = storeToRefs(store)
</script>

<template>
  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="
      /*background-color: #f8f9fa;*/
      padding: 20px;
      text-align: center;
      border-top: 1px solid #ddd;
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: auto;
    "
  >
    <tr>
      <td style="padding: 10px">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td style="padding-bottom: 10px; font-size: 16px; font-weight: bold">
              {{ personal.name }}
            </td>
          </tr>
          <tr v-if="personal.position">
            <td style="padding-bottom: 5px; font-size: 14px">{{ personal.position }}</td>
          </tr>
          <tr v-if="personal.email">
            <td style="padding-bottom: 5px">
              <a :href="`mailto:${personal.email}`" style="color: #007bff; text-decoration: none">
                {{ personal.email }}
              </a>
            </td>
          </tr>
          <tr v-if="personal.company">
            <td style="padding-bottom: 5px; font-size: 14px">{{ personal.company }}</td>
          </tr>
          <tr v-if="personal.website">
            <td style="padding-bottom: 10px">
              <a :href="personal.website" target="_blank" style="color: #007bff; text-decoration: none">
                {{ personal.website }}
              </a>
            </td>
          </tr>
          <tr v-if="config.socialMediaIcons">
            <td>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: auto;">
                <tr>
                  <td v-if="social.selected.includes('facebook')&& social.facebook" style="padding: 0 10px;"><a :href="social.facebook" target="_blank" style="text-decoration: none;"><img src="https://img.icons8.com/ios-filled/50/000000/facebook.png" alt="Facebook" width="24" height="24"></a></td>
                  <td v-if="social.selected.includes('twitter')&& social.twitter" style="padding: 0 10px;"><a :href="social.twitter" target="_blank" style="text-decoration: none;"><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" width="24" height="24"></a></td>
                  <td v-if="social.selected.includes('linkedin')&& social.linkedin" style="padding: 0 10px;"><a :href="social.linkedin" target="_blank" style="text-decoration: none;"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" width="24" height="24"></a></td>
                  <td v-if="social.selected.includes('instagram') && social.instagram" style="padding: 0 10px;"><a :href="social.instagram" target="_blank" style="text-decoration: none;"><img src="https://img.icons8.com/ios-filled/50/000000/instagram.png" alt="Instagram" width="24" height="24"></a></td>
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
