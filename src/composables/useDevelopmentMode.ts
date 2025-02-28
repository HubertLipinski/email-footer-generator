import { ref } from 'vue'

export function useDevelopmentMode() {
  const buildMode = ref<string>(import.meta.env.MODE)

  return {
    buildMode,
    isDevMode: buildMode.value === 'development',
    isProdMode: buildMode.value !== 'development',
  }
}
