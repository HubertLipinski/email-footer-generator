<script setup lang="ts">
import DefaultTemplate from '@/components/templates/DefaultTemplate.vue'
import { nextTick, onMounted, ref, useTemplateRef } from 'vue'
import { html as beautyHtml } from 'js-beautify'
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";

const template = useTemplateRef('footerPreview')
const htmlCode = ref<string>()

onMounted(async () => {
  // await nextTick()

  const dom = template.value as HTMLElement
  const table = dom.getElementsByTagName('table')[0] as HTMLElement

  htmlCode.value = beautyHtml(table.outerHTML, {
    indent_size: 4,
    preserve_newlines: false,
    end_with_newline: true,
  })

  await nextTick()
  Prism.highlightAll();
})
</script>

<template>
  <div class="bg-card rounded-lg">
    <div class="border-0 rounded-md">
      <div ref="footerPreview" class="min-h-[200px] align-middle">
        <div class="text-center text-muted-foreground" v-show="false">
          Fill in the form to generate your email footer
        </div>

        <DefaultTemplate />
      </div>
      <div class="flex justify-between pb-4">
        <h3>HTML Code</h3>
        <button
          class="text-sm flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mr-1"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
          </svg>
          Copy HTML
        </button>
      </div>
      <div class="w-full bg-neutral text-sm mr-2 rounded-lg overflow-x-auto text-white">
        <pre><code class="language-html">{{ htmlCode }}</code></pre>
      </div>
    </div>
    <div class="mt-6 flex justify-end gap-x-6">
      <button
        class="text-sm flex items-center text-muted-foreground hover:text-foreground transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mr-1"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" x2="12" y1="3" y2="15"></line>
        </svg>
        Download
      </button>
    </div>
  </div>
</template>

<style scoped>
pre {
  background: inherit;
}
</style>
