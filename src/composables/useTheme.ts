import { ref, watchEffect } from 'vue'

export function useTheme() {
  const activeTheme = ref('dark')

  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme.value)
  })

  return activeTheme
}
