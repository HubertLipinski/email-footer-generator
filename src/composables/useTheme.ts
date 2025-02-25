import { ref, watchEffect } from 'vue'

const LOCAL_STORAGE_THEME_KEY = 'app-theme'
const AVAILABLE_THEMES = ['light', 'dark']

export function useTheme() {
  const defaultTheme = 'dark'

  const activeTheme = ref(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? 'dark')

  if (!localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, defaultTheme)
  }

  addEventListener('storage', (event) => {
    if (event.key === LOCAL_STORAGE_THEME_KEY && event.newValue) {
      if (AVAILABLE_THEMES.includes(event.newValue)) {
        activeTheme.value = event.newValue
      }
    }
  })

  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme.value)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, activeTheme.value)
  })

  return activeTheme
}
