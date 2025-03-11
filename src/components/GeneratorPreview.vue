<script setup lang="ts">
import 'prismjs/themes/prism-tomorrow.min.css'
import { nextTick, shallowRef, useTemplateRef, watch } from 'vue'
import { useHtmlPreview } from '@/composables/useHtmlPreview.ts'
import { useClipboard } from '@/composables/useClipboard.ts'
import { useDownloadFile } from '@/composables/useDownloadFile.ts'

import DownloadIcon from '~icons/material-symbols/download'
import CopyIcon from '~icons/material-symbols/content-copy-outline'
import SpinIcon from '~icons/svg-spinners/180-ring-with-bg'
import { useTranslation } from '@/composables/useTranslation.ts'

const template = useTemplateRef('footerPreview')

const { htmlString, humanReadable, iframeSrcDoc, iframeHeight, renderHash, render } = useHtmlPreview(template)
const { codeCopied, copy } = useClipboard()
const { isDownloading, downloadFile } = useDownloadFile()

function downloadHtml() {
  downloadFile(htmlString, `generated-footer-${crypto.randomUUID()}.html`)
}

const { t } = useTranslation()

// TODO: refactor
const previewTemplate = shallowRef(TemplateDefault)

import TemplateDefault from '@/components/templates/TemplateDefault.vue' // TODO: update
import TemplateCreative from '@/components/templates/TemplateCreative.vue'
import TemplateCorporate from '@/components/templates/TemplateCorporate.vue'
import TemplateLuxury from '@/components/templates/TemplateLuxury.vue'
import TemplateMinimalistic from '@/components/templates/TemplateMinimalistic.vue'

watch(previewTemplate, async () => {
  await nextTick()
  await render()
})
// TODO: refactor
</script>

<template>
  <div>
    <select class="select" v-model="previewTemplate">
      <option :value="TemplateDefault">Default</option>
      <option :value="TemplateCreative">Creative</option>
      <option :value="TemplateLuxury">Luxury</option>
      <option :value="TemplateMinimalistic">Minimalistic</option>
      <option :value="TemplateCorporate">Corporate</option>
    </select>

    <h2 class="text-xl font-semibold mb-6">{{ t('home.preview') }}</h2>
    <div class="bg-card rounded-lg">
      <div class="border-0 rounded-md">
        <div class="align-middle" v-show="false">
          <div ref="footerPreview">
            <component :is="previewTemplate" :key="renderHash" />
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
        <div class="flex justify-between pb-4" tabindex="0">
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
  //pointer-events: none;
}
</style>
