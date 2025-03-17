import { type Component, ref, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import { type PersonalConfig, type SocialOption, TextAlignment } from '@/types/configurator.ts'
import TemplateDefault from '@/components/templates/TemplateDefault.vue'
import { TEMPLATE_TO_STYLES, THEME_OPTIONS, type ThemeOption } from '@/types/themeOptions.ts'

export const useConfiguratorStore = defineStore('configurator', () => {
  const template = ref({
    selected: {
      name: THEME_OPTIONS.Default,
      component: shallowRef<Component>(TemplateDefault),
    },
  })

  const personal = ref<PersonalConfig>({
    name: 'John Smith',
    position: 'Marketing Manager',
    email: 'john.smith@example.com',
    company: 'Example Corp',
    website: 'https://example-website.com',
    phone: '123 456 789',
    image: {
      enabled: true,
      url: 'https://placehold.co/400',
    },
  })

  const social = ref<{ enabled: boolean; selected: SocialOption[] }>({
    enabled: true,
    selected: [],
  })

  const styles = ref({
    fontFamily: 'Arial',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    accentColor: '#0047e1',
    fontSize: 14,
    alignment: TextAlignment.LEFT,
  })

  const additional = ref({
    disclaimer: {
      enabled: true,
      color: '#787878',
      content:
        'This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed.',
    },
  })

  function updateTemplateStyles(template: ThemeOption): void {
    const styleObject = TEMPLATE_TO_STYLES[template]

    Object.assign(styles.value, styleObject.styles)
    Object.assign(additional.value.disclaimer, styleObject.additional.disclaimer)
  }

  return { template, personal, social, styles, additional, updateTemplateStyles }
})
