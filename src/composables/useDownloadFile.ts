import { type MaybeRefOrGetter, ref, toValue } from 'vue'

export function useDownloadFile() {
  const isDownloading = ref<boolean>(false)

  function downloadFile(content: MaybeRefOrGetter<string>, filename: string, type: string = 'text/html'): void {
    if (isDownloading.value) return

    isDownloading.value = true

    setTimeout(() => {
      const blob = new Blob([toValue(content)], { type })
      const url = URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()

      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      isDownloading.value = false
    }, 1000)
  }

  return {
    isDownloading,
    downloadFile,
  }
}
