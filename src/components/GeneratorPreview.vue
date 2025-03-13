<script setup lang="ts">
import 'prismjs/themes/prism-tomorrow.min.css'
import { useTemplateRef } from 'vue'
import { useHtmlPreview } from '@/composables/useHtmlPreview.ts'
import { useClipboard } from '@/composables/useClipboard.ts'
import { useDownloadFile } from '@/composables/useDownloadFile.ts'
import { useTranslation } from '@/composables/useTranslation.ts'
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'

import DownloadIcon from '~icons/material-symbols/download'
import CopyIcon from '~icons/material-symbols/content-copy-outline'
import SpinIcon from '~icons/svg-spinners/180-ring-with-bg'

const { t } = useTranslation()

const templateRef = useTemplateRef('footerPreview')

const { htmlString, humanReadable, iframeSrcDoc, iframeHeight, renderHash } = useHtmlPreview(templateRef)
const { codeCopied, copy } = useClipboard()
const { isDownloading, downloadFile } = useDownloadFile()

function downloadHtml() {
  downloadFile(htmlString, `generated-footer-${crypto.randomUUID()}.html`)
}

const store = useConfiguratorStore()
const { template } = storeToRefs(store)
</script>

<template>
  <div>
    <h2 class="text-xl font-semibold mb-6">{{ t('home.preview') }}</h2>
    <p class="py-2">
      {{ t('preview.selectedTemplate') }}:
      <span class="capitalize text-secondary font-medium">{{ t(`template.${template.selected.name}`) }}</span>
    </p>
    <div class="bg-card rounded-lg">
      <div class="border-0 rounded-md">
        <div class="align-middle" v-show="false">
          <div ref="footerPreview">
            <component :is="template.selected.component" :key="renderHash" />
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
        </div>
        <div class="flex justify-between pb-4" tabindex="-1">
          <h3>{{ t('preview.htmlCode') }}</h3>

          <span class="tooltip break-all" :data-tip="t('preview.minified')">
            <span class="text-secondary px-1">{{ t('preview.characters', { value: htmlString.length }) }}</span>
          </span>
        </div>
        <div class="w-full bg-neutral text-sm rounded-lg text-white focus:outline-none overflow-x-hidden" v-show="true">
          <pre class="focus:outline-none max-h-[350px]"><code
            class="block w-3.5 language-html">{{ humanReadable }}</code></pre>
        </div>
      </div>
      <div class="mt-6 flex justify-end gap-x-4">
        <button class="btn btn-soft min-w-[120px]" @click="downloadHtml" :disabled="isDownloading">
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
  </div>
</template>

<style scoped lang="css">
pre {
  background: inherit;
  margin: 0;
}

iframe {
  /*pointer-events: none;*/
}
</style>
