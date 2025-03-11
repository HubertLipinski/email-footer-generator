<script setup lang="ts">
import TabsWrapper from '@/components/ui/tabs/TabsWrapper.vue'
import TabContent from '@/components/ui/tabs/TabContent.vue'
import PersonalConfig from '@/components/configuration/PersonalConfig.vue'
import SocialConfig from '@/components/configuration/SocialConfig.vue'
import StyleConfig from '@/components/configuration/StyleConfig.vue'
import DisclaimerConfig from '@/components/configuration/DisclaimerConfig.vue'
import TemplateConfig from '@/components/configuration/TemplateConfig.vue'
import { useTranslation } from '@/composables/useTranslation.ts'

const { t } = useTranslation()
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="flex justify-between mb-4 items-center">
      <h2 class="text-xl font-semibold">{{ t('editor.configureYourEmailFooter') }}</h2>
    </div>

    <TabsWrapper>
      <TransitionGroup name="slide-fade-list" appear>
        <TabContent title="editor.template" key="template">
          <TemplateConfig />
        </TabContent>
        <TabContent title="editor.personal" key="personal">
          <PersonalConfig />
        </TabContent>
        <TabContent title="editor.social" key="social">
          <SocialConfig />
        </TabContent>
        <TabContent title="editor.styles" key="styles">
          <StyleConfig />
        </TabContent>
        <TabContent title="editor.disclaimer" key="disclaimer">
          <DisclaimerConfig />
        </TabContent>
      </TransitionGroup>
    </TabsWrapper>
  </div>
</template>

<style scoped>
.slide-fade-list-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-list-leave-active {
  display: none;
  overflow: hidden;
}

.slide-fade-list-enter-from,
.slide-fade-list-leave-to {
  opacity: 0;
  overflow: hidden;
  transform: translateY(10px);
}
</style>
