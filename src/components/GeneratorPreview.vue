<script setup lang="ts">
import 'prismjs/themes/prism-tomorrow.min.css'
import { useTemplateRef } from 'vue'
import MinimalTemplate from '@/components/templates/MinimalTemplate.vue'
import { useHtmlPreview } from '@/composables/useHtmlPreview.ts'
import { useDevelopmentMode } from '@/composables/useDevelopmentMode.ts'
import { useClipboard } from '@/composables/useClipboard.ts'
import { useDownloadFile } from '@/composables/useDownloadFile.ts'

import DownloadIcon from '~icons/material-symbols/download'
import CopyIcon from '~icons/material-symbols/content-copy-outline'
import SpinIcon from '~icons/svg-spinners/180-ring-with-bg'
import { useTranslation } from '@/composables/useTranslation.ts'

const { isDevMode } = useDevelopmentMode()

const template = useTemplateRef('footerPreview')
const renderHash = crypto.randomUUID()

const { htmlString, humanReadable, iframeSrcDoc, iframeHeight } = useHtmlPreview(template)
const { codeCopied, copy } = useClipboard()
const { isDownloading, downloadFile } = useDownloadFile()

function downloadHtml() {
  downloadFile(htmlString, `generated-footer-${crypto.randomUUID()}.html`)
}

const { t } = useTranslation()
</script>

<template>
  <div class="bg-card rounded-lg">
    <div class="border-0 rounded-md">
      <div class="align-middle" v-show="false">
        <div ref="footerPreview">
          <!--          TODO: Toggle between templates -->
          <MinimalTemplate :key="renderHash" />
        </div>
      </div>
      <div class="w-full pb-6" tabindex="-1">
        <iframe
          :key="renderHash"
          :srcdoc="iframeSrcDoc"
          class="w-full"
          :style="{ height: iframeHeight }"
          tabindex="-1"
        />
        <span class="text-xs p-0 m-0" v-if="isDevMode">Height: {{ iframeHeight }}</span>
      </div>
      <div class="flex justify-between pb-4" tabindex="0">
        <h3>{{ t('preview.htmlCode') }}</h3>
        <span class="tooltip" data-tip="Minified version">
          <span class="text-secondary px-1">{{ t('preview.characters', { value: htmlString.length }) }}</span>
        </span>
      </div>
      <div class="w-full bg-neutral text-sm rounded-lg text-white focus:outline-none overflow-x-hidden" v-show="true">
        <pre class="focus:outline-none max-h-[350px]"><code
          class="block w-3.5 language-html">{{ humanReadable }}</code></pre>
      </div>
    </div>
    <div class="mt-6 flex justify-end gap-x-4">
      <button class="btn btn-soft min-w-[120px]" @click="downloadHtml">
        <DownloadIcon v-if="!isDownloading" />
        <SpinIcon v-else />
        {{ isDownloading ? t('preview.wait') : t('preview.download') }}
      </button>

      <button
        class="btn min-w-[95px]"
        :class="codeCopied ? 'btn-success' : 'btn-primary'"
        @click="() => copy(htmlString)"
      >
        <CopyIcon />
        {{ codeCopied ? t('preview.done') : t('preview.copy') }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="css">
pre {
  background: inherit;
  margin: 0;
}

iframe {
  pointer-events: none;
}
</style>
