<script setup lang="ts">
import TabsWrapper from '@/components/ui/tabs/TabsWrapper.vue'
import TabContent from '@/components/ui/tabs/TabContent.vue'
import PersonalConfig from '@/components/configuration/PersonalConfig.vue'
import SocialConfig from '@/components/configuration/SocialConfig.vue'
import StyleConfig from '@/components/configuration/StyleConfig.vue'
import DisclaimerConfig from '@/components/configuration/DisclaimerConfig.vue'
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="flex justify-between mb-4 items-center">
      <h2 class="text-xl font-semibold">Configure your email footer</h2>
    </div>

    <TabsWrapper>
      <TabContent title="Personal">
        <PersonalConfig />
      </TabContent>
      <TabContent title="Social">
        <SocialConfig />
      </TabContent>
      <TabContent title="Styles">
        <StyleConfig />
      </TabContent>
      <TabContent title="Disclaimer">
        <DisclaimerConfig />
      </TabContent>
    </TabsWrapper>
  </div>
</template>

<style scoped></style>
