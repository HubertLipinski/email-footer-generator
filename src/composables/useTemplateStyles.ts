export function useTemplateStyles() {
  function rawColor(hex: string): string {
    if (hex.length < 7) return '#440044FF'

    if (!hex.startsWith('#')) return hex

    return hex.substring(1)
  }

  return {
    rawColor,
  }
}
