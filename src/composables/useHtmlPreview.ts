import { computed, type MaybeRefOrGetter, nextTick, onMounted, onUnmounted, ref, watchEffect } from 'vue'
import { html as beautyHtml } from 'js-beautify'
import Prism from 'prismjs'

export function useHtmlPreview(domElement: MaybeRefOrGetter, root: string = 'table') {
  const htmlString = ref<string>('')
  const humanReadable = ref<string>('')
  const renderHash = ref(crypto.randomUUID())

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

    renderHash.value = crypto.randomUUID()
  })

  function stripVueGeneratedTags(html: string): string {
    let output = html

    output = output.replace(/\s*data-v-[a-f0-9]+=""/g, '')
    output = output.replace(/<!--v-if-->/g, '')

    return output
  }

  const iframeHeight = ref('100px')
  const iframeSrcDoc = computed((): string => {
    return `<html><head><script>
                  function sendHeight() {
                    window.parent.postMessage(
                      { height: document.documentElement.scrollHeight },
                      '*'
                    );
                  }
                  window.addEventListener('load', sendHeight);
                  window.addEventListener('resize', sendHeight);
                <\/script>
                <style>* { margin: 0; padding: 0; box-sizing: border-box; } html, body { width: 100%; overflow: hidden;}</style>
                </head>
                <body>${htmlString.value}</body>
                </html>`
  })

  const updateHeight = (event: MessageEvent<{ height?: number }>) => {
    if (event.data?.height) {
      iframeHeight.value = `${event.data.height}px`
    }
  }

  onMounted(() => {
    window.addEventListener('message', updateHeight)
  })

  onUnmounted(() => {
    window.removeEventListener('message', updateHeight)
  })

  return {
    htmlString,
    humanReadable,
    iframeSrcDoc,
    iframeHeight,
    renderHash,
  }
}
