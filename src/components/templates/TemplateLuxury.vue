<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'

const store = useConfiguratorStore()
const { personal, social, additional } = storeToRefs(store)
</script>

<template>
  <table
    cellpadding="0"
    cellspacing="0"
    style="
      font-family: 'Didot', 'Bodoni MT', serif;
      font-size: 14px;
      color: #333;
      border-collapse: collapse;
      width: 100%;
      /*max-width: 600px;*/
      border: 1px solid #d4af37;
      padding: 2px;
    "
  >
    <tr>
      <td style="padding: 20px; background-color: #ffffff">
        <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%">
          <tr>
            <td style="text-align: center; padding-bottom: 15px">
              <p style="margin: 0; font-size: 22px; font-weight: normal; color: #d4af37; letter-spacing: 2px">
                {{ personal.name.toUpperCase() }}
              </p>
              <p
                v-if="personal.position"
                style="margin: 0; font-size: 14px; color: #666; letter-spacing: 1px; padding-top: 5px"
              >
                {{ personal.position.toUpperCase() }}
              </p>
            </td>
          </tr>
          <tr>
            <td style="text-align: center; padding-bottom: 15px">
              <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%">
                <tr>
                  <td style="width: 40%; text-align: right">
                    <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; display: inline-block">
                      <tr>
                        <td style="width: 40px; height: 1px; background-color: #d4af37"></td>
                      </tr>
                    </table>
                  </td>
                  <td style="width: 20%; text-align: center">
                    <img
                      src="https://placehold.co/400"
                      alt="Logo"
                      style="max-width: 100px; max-height: 50px; margin: 0 15px; vertical-align: middle"
                    />
                  </td>
                  <td style="width: 40%; text-align: left">
                    <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; display: inline-block">
                      <tr>
                        <td style="width: 40px; height: 1px; background-color: #d4af37"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="text-align: center; padding-bottom: 15px">
              <p style="margin: 0; font-size: 14px; color: #666">
                <a :href="`mailto:${personal.email}`" style="color: #d4af37; text-decoration: none">{{
                  personal.email
                }}</a>

                <span v-if="true">
                  &nbsp;|&nbsp;
                  <a href="tel:(555)123-4567" style="color: #d4af37; text-decoration: none">(555) 123-4567</a>
                </span>

                <span v-if="personal.website">
                  &nbsp;|&nbsp;
                  <a :href="personal.website" style="color: #d4af37; text-decoration: none">{{ personal.website }}</a>
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">
              <p style="margin: 0; font-size: 14px; color: #666">123 Luxury Avenue, Suite 500, New York, NY 10022</p>
            </td>
          </tr>
          <tr>
            <td style="text-align: center; padding-top: 15px">
              <a
                v-for="icon in social.selected"
                :key="icon.label"
                :href="icon.value"
                target="_blank"
                style="text-decoration: none; margin: 0 5px"
              >
                <img :src="`${icon.icon}?color=%23D4AF37`" :alt="icon.label" width="18" height="18" />
              </a>
            </td>
          </tr>
          <tr style="font-size: 11px; text-align: center" v-if="additional.disclaimer.enabled">
            <td style="padding: 15px 20% 0">
              <p :style="`color:${additional.disclaimer.color};`">
                {{ additional.disclaimer.content }}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</template>

<style scoped></style>
