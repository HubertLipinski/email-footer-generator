<script setup lang="ts">
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'

const store = useConfiguratorStore()
const { personal } = storeToRefs(store)
</script>

<template>
  <div class="flex flex-col tab-content">
    <div class="join gap-4">
      <fieldset class="fieldset join-item flex-grow">
        <legend class="fieldset-legend">Name</legend>
        <input
          type="text"
          name="name"
          class="input w-full"
          placeholder="John Doe"
          v-model.trim="personal.name"
          required
          autocomplete="on"
        />
      </fieldset>
      <fieldset class="fieldset join-item flex-grow">
        <legend class="fieldset-legend">Position</legend>
        <input
          type="text"
          name="position"
          class="input w-full"
          placeholder="Software Developer"
          v-model.trim="personal.position"
        />
      </fieldset>
    </div>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Email</legend>
      <input
        type="email"
        name="email"
        class="input w-full"
        placeholder="johndoe@example.com"
        v-model.trim="personal.email"
        autocomplete="on"
      />
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Company</legend>
      <input
        type="text"
        name="work"
        class="input w-full"
        placeholder="Company"
        v-model.trim="personal.company"
        autocomplete="on"
      />
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Website</legend>
      <input
        type="url"
        name="website"
        class="input w-full"
        placeholder="https://example.com"
        v-model.trim="personal.website"
      />
    </fieldset>
  </div>
</template>

<style scoped></style>
