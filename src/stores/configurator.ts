import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { PersonalConfig } from '@/types/configurator.ts'

export const useConfiguratorStore = defineStore('configurator', () => {
  const personal = ref<PersonalConfig>({
    name: '',
    position: '',
    email: '',
    company: '',
  })

  const social = ref({})

  const styles = ref({})

  return { personal, social, styles }
})
