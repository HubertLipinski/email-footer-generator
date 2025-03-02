import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { PersonalConfig, SocialOptions } from '@/types/configurator.ts'

import IconFacebook from '~icons/mdi/facebook-box'
import IconX from '~icons/ri/twitter-x-fill'
import IconLinkedIn from '~icons/mdi/linkedin'
import IconInstagram from '~icons/mdi/instagram'

export const useConfiguratorStore = defineStore('configurator', () => {
  const personal = ref<PersonalConfig>({
    name: 'John Doe',
    position: 'Software Engineer',
    email: 'mail@example.com',
    company: '',
    website: '',
  })

  const social = ref({
    selected: ['facebook', 'twitter'],
    facebook: 'https://facebook.com/',
    twitter: 'https://x.com/',
    linkedin: '',
    instagram: '',
  })

  const socialOptions = ref<SocialOptions>({
    facebook: {
      label: 'Facebook',
      placeholder: 'https://facebook.com/your-profile',
      component: IconFacebook,
    },
    twitter: {
      label: 'X (Twitter)',
      placeholder: 'https://x.com/your-profile',
      component: IconX,
    },
    linkedin: {
      label: 'LinkedIn',
      placeholder: 'https://linkedin.com/in/your-profile',
      component: IconLinkedIn,
    },
    instagram: {
      label: 'Instagram',
      placeholder: 'https://instagram.com/your-profile',
      component: IconInstagram,
    },
  })

  const styles = ref({
    fontFamily: 'Arial',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    fontSize: 14,
    alignment: 'left',
  })

  const config = ref({
    socialMediaIcons: true,
  })

  const additional = ref({
    disclaimer: {
      enabled: true,
      color: '#a0a0a0',
      content:
        'This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed.',
    },
  })

  return { personal, social, socialOptions, styles, config, additional }
})
