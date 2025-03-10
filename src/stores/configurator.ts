import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type PersonalConfig, type SocialOption, TextAlignment } from '@/types/configurator.ts'

export const useConfiguratorStore = defineStore('configurator', () => {
  const personal = ref<PersonalConfig>({
    name: 'John Doe',
    position: 'Software Engineer',
    email: 'mail@example.com',
    company: '',
    website: '',
  })

  const social = ref<{ enabled: boolean; selected: SocialOption[] }>({
    enabled: true,
    selected: [],
  })

  const styles = ref({
    fontFamily: 'Arial',
    backgroundColor: '#ffffff',
    textColor: '#000000',
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

  return { personal, social, styles, additional }
})
