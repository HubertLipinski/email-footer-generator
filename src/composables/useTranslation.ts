import { useI18n } from 'vue-i18n'
import { onMounted, ref, watch } from 'vue'
import { type ZodErrorMap, ZodIssueCode } from 'zod'

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

  const zodI18nErrorMap = (): ZodErrorMap => {
    return (issue, ctx) => {
      switch (issue.code) {
        case ZodIssueCode.invalid_type:
          return { message: t('validation.required') }

        case ZodIssueCode.too_small:
          return { message: t('validation.required') }

        case ZodIssueCode.invalid_string:
          return { message: t(`validation.invalid_${issue.validation}`) }

        case ZodIssueCode.custom:
          return { message: t(`validation.${issue.message ?? 'custom'}`) }

        default:
          return { message: ctx.defaultError }
      }
    }
  }

  return {
    t,
    selected,
    availableLocales,
    zodI18nErrorMap,
  }
}
