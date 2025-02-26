<script setup lang="ts">
import VTabs from '@/components/ui/vTabs.vue'
import VTabContent from '@/components/ui/vTabContent.vue'
import PersonalConfig from '@/components/configuration/PersonalConfig.vue'
import SocialConfig from '@/components/configuration/SocialConfig.vue'
</script>

<template>
  <div>
    <div class="flex justify-between mb-4 items-center">
      <h2 class="text-xl font-semibold">Configure your email footer</h2>
      <a class="btn btn-ghost" @click="() => {}">Dummy data</a>
    </div>

    <VTabs>
      <VTabContent title="Personal">
        <PersonalConfig />
      </VTabContent>
      <VTabContent title="Social">
        <SocialConfig />
      </VTabContent>
      <VTabContent title="Styles">Styles Tab</VTabContent>
      <VTabContent title="Setting">Setting Tab</VTabContent>
      <VTabContent title="Additional">Additional Tab</VTabContent>
    </VTabs>

    <button class="btn btn-primary w-full mt-1" type="submit">Generate</button>
  </div>
</template>

<style scoped></style>
