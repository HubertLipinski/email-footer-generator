import { useI18n } from 'vue-i18n'
import { onMounted, ref, watch } from 'vue'

const LOCAL_STORAGE_LANGUAGE = 'app-lang'

export interface LocaleOption {
  label: string
  value: string
}

export function useTranslation() {
  const { t, locale } = useI18n()

  const selected = ref(locale ?? 'en')
  const availableLocales = ref<LocaleOption[]>([
    { label: 'PL', value: 'pl' },
    { label: 'EN', value: 'en' },
    { label: 'DE', value: 'de' },
    { label: 'ES', value: 'es' },
    { label: 'UA', value: 'uk' }, // ISO 639-1
  ])

  watch(selected, (newValue) => {
    if (newValue) {
      localStorage.setItem(LOCAL_STORAGE_LANGUAGE, newValue)
    }
  })

  onMounted(() => {
    const savedLocale = localStorage.getItem(LOCAL_STORAGE_LANGUAGE)
    const supportedValues: string[] = availableLocales.value.map((item: LocaleOption) => item.value)

    if (savedLocale && selected.value !== savedLocale && supportedValues.includes(savedLocale)) {
      console.info('Restoring LocalStorage language')
      selected.value = savedLocale
    }
  })

  return {
    t,
    selected,
    availableLocales,
  }
}
