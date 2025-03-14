export function useTemplateStyles() {
  function rawColor(hex: string): string {
    if (hex.length < 7) return '#440044FF'

    if (!hex.startsWith('#')) return hex

    return hex.substring(1)
  }

  function rawUrl(str: string): string {
    let url = str

    url = url.replace('https://', '')
    url = url.replace('http://', '')
    url = url.replace('www.', '')

    return url.replace(' ', '')
  }

  return {
    rawColor,
    rawUrl,
  }
}
