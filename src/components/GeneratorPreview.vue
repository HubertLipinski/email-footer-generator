<script setup lang="ts">
import 'prismjs/themes/prism-tomorrow.min.css'
import { onMounted, ref, useTemplateRef } from 'vue'
import MinimalTemplate from '@/components/templates/MinimalTemplate.vue'
import { useHtmlPreview } from '@/composables/useHtmlPreview.ts'

import DownloadIcon from '~icons/material-symbols/download'
import CopyIcon from '~icons/material-symbols/content-copy-outline'
import SpinIcon from '~icons/svg-spinners/180-ring-with-bg'

const template = useTemplateRef('footerPreview')
const renderHash = crypto.randomUUID()

const { htmlString, humanReadable } = useHtmlPreview(template)

onMounted(async () => {
  console.info('[Preview] Mounted!')
})

const isDownloading = ref<boolean>(false)
const downloadHtml = () => {
  isDownloading.value = true

  setTimeout(() => {
    const blob = new Blob([htmlString.value], { type: 'text/html' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = `generated-footer-${crypto.randomUUID()}.html`
    document.body.appendChild(a)
    a.click()

    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    isDownloading.value = false
  }, 1000)
}

const codeCopied = ref<boolean>(false)
const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(htmlString.value)
    codeCopied.value = true
  } catch (err) {
    console.error('Whoops, there was an error:', err)
  }

  setTimeout(() => {
    codeCopied.value = false
  }, 2000)
}
</script>

<template>
  <div class="bg-card rounded-lg">
    <div class="border-0 rounded-md">
      <div class="min-h-[200px] align-middle" v-show="false">
        <div ref="footerPreview">
          <!--          TODO: Toggle between templates-->
          <!--          <DefaultTemplate :key="renderHash" />-->
          <MinimalTemplate :key="renderHash" />
        </div>
      </div>
      <div class="w-full pb-6">
        <iframe :srcdoc="htmlString" class="w-full min-h-[200px]"></iframe>
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
      <button class="btn btn-soft" @click="downloadHtml">
        <DownloadIcon v-if="!isDownloading" />
        <SpinIcon v-else />
        {{ isDownloading ? 'Working' : 'Download' }}
      </button>

      <button class="btn" :class="codeCopied ? 'btn-success' : 'btn-primary'" @click="copyCode">
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
