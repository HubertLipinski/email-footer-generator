import { type MaybeRefOrGetter, readonly, ref, toValue } from 'vue'

export function useClipboard() {
  const codeCopied = ref<boolean>(false)

  async function copy(text: MaybeRefOrGetter<string>): Promise<void> {
    try {
      await navigator.clipboard.writeText(toValue(text))
      codeCopied.value = true
    } catch (err) {
      console.error('[Copy]:', err)
    }

    setTimeout(() => {
      codeCopied.value = false
    }, 2000)
  }

  return {
    codeCopied: readonly(codeCopied),
    copy,
  }
}
