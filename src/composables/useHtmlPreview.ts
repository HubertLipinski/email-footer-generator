import { type MaybeRefOrGetter, nextTick, ref, watchEffect } from 'vue'
import { html as beautyHtml } from 'js-beautify'
import Prism from 'prismjs'

export function useHtmlPreview(domElement: MaybeRefOrGetter, root: string = 'table') {
  const htmlString = ref<string>('')
  const humanReadable = ref<string>('')

  watchEffect(async () => {
    if (!domElement.value) return

    const rootElement = domElement.value.getElementsByTagName(root)[0] as HTMLElement
    htmlString.value = stripVueGeneratedTags(rootElement.outerHTML)

    humanReadable.value = beautyHtml(htmlString.value, {
      indent_size: 2,
      preserve_newlines: false,
      end_with_newline: true,
    })

    await nextTick()

    Prism.highlightAll()
  })

  function stripVueGeneratedTags(html: string): string {
    let output = html

    output = output.replace(/\s*data-v-[a-f0-9]+=""/g, '')
    output = output.replace(/<!--v-if-->/g, '')

    return output
  }

  return {
    htmlString,
    humanReadable,
  }
}
