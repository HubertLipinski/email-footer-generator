<script setup lang="ts">
import TabsWrapper from '@/components/ui/tabs/TabsWrapper.vue'
import TabContent from '@/components/ui/tabs/TabContent.vue'
import PersonalConfig from '@/components/configuration/PersonalConfig.vue'
import SocialConfig from '@/components/configuration/SocialConfig.vue'
import StyleConfig from '@/components/configuration/StyleConfig.vue'
import DisclaimerConfig from '@/components/configuration/DisclaimerConfig.vue'
import { useTranslation } from '@/composables/useTranslation.ts'

const { t } = useTranslation()
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="flex justify-between mb-4 items-center">
      <h2 class="text-xl font-semibold">{{ t('editor.configureYourEmailFooter') }}</h2>
    </div>

    <TabsWrapper>
      <TabContent title="editor.personal">
        <PersonalConfig />
      </TabContent>
      <TabContent title="editor.social">
        <SocialConfig />
      </TabContent>
      <TabContent title="editor.styles">
        <StyleConfig />
      </TabContent>
      <TabContent title="editor.disclaimer">
        <DisclaimerConfig />
      </TabContent>
    </TabsWrapper>
  </div>
</template>

<style scoped></style>
