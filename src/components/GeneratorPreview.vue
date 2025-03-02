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

const { isDevMode } = useDevelopmentMode()

const template = useTemplateRef('footerPreview')
const renderHash = crypto.randomUUID()

const { htmlString, humanReadable, iframeSrcDoc, iframeHeight } = useHtmlPreview(template)

const { codeCopied, copy } = useClipboard()

const { isDownloading, downloadFile } = useDownloadFile()

function downloadHtml() {
  downloadFile(htmlString, `generated-footer-${crypto.randomUUID()}.html`)
}
</script>

<template>
  <div class="bg-card rounded-lg">
    <div class="border-0 rounded-md">
      <div class="align-middle" v-show="false">
        <div ref="footerPreview">
          <!--          TODO: Toggle between templates -->
          <!--                    <DefaultTemplate :key="renderHash" />-->
          <MinimalTemplate :key="renderHash" />
        </div>
      </div>
      <div class="w-full pb-6">
        <iframe :key="renderHash" :srcdoc="iframeSrcDoc" class="w-full" :style="{ height: iframeHeight }" />
        <span class="text-xs" v-if="isDevMode">Height: {{ iframeHeight }}</span>
      </div>
      <div class="flex justify-between pb-4">
        <h3>HTML Code</h3>
        <span class="tooltip" data-tip="Minified version">
          <span class="text-secondary px-1">{{ htmlString.length }} characters</span>
        </span>
      </div>
      <div class="w-full bg-neutral text-sm mr-2 rounded-lg overflow-x-auto text-white focus:outline-none">
        <pre class="focus:outline-none max-h-[300px] p-2 pl-3 ml-2 my-0"><code
          class="language-html">{{ humanReadable }}</code></pre>
      </div>
    </div>
    <div class="mt-6 flex justify-end gap-x-4">
      <button class="btn btn-soft w-[120px]" @click="downloadHtml">
        <DownloadIcon v-if="!isDownloading" />
        <SpinIcon v-else />
        {{ isDownloading ? 'Working' : 'Download' }}
      </button>

      <button class="btn w-[95px]" :class="codeCopied ? 'btn-success' : 'btn-primary'" @click="() => copy(htmlString)">
        <CopyIcon />
        {{ codeCopied ? 'Done!' : 'Copy' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
pre {
  background: inherit;
}
</style>
