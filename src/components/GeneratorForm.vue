<script setup lang="ts">
import VTabs from '@/components/ui/vTabs.vue'
import VTabContent from '@/components/ui/vTabContent.vue'
import PersonalConfig from '@/components/configuration/PersonalConfig.vue'
import SocialConfig from '@/components/configuration/SocialConfig.vue'

// Todo store integration
</script>

<template>
  <div>
    <VTabs>
      <!--      <VTabContent title="General">-->
      <!--        <p>Todo: General configuration such as themes</p>-->
      <!--      </VTabContent>-->
      <VTabContent title="Personal">
        <PersonalConfig />
      </VTabContent>
      <VTabContent title="Social">
        <SocialConfig />
      </VTabContent>
      <VTabContent title="Styles"> Additional Tab </VTabContent>
      <VTabContent title="Setting"> Setting Tab </VTabContent>
    </VTabs>

    <button class="btn btn-primary w-full">Generate Footer</button>
  </div>
</template>

<style scoped></style>
