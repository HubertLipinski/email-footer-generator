<script setup lang="ts">
import DefaultTemplate from '@/components/templates/DefaultTemplate.vue'
import {nextTick, onMounted, ref, useTemplateRef} from 'vue'
import { html as beautyHtml } from 'js-beautify'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
import MinimalTemplate from "@/components/templates/MinimalTemplate.vue";

const template = useTemplateRef('footerPreview')
const htmlCode = ref<string>()
const renderHash = crypto.randomUUID()
const codeLength = ref<number>(0)

onMounted(async () => {
  console.info('Preview mounted!')

  const dom = template.value as HTMLElement
  const table = dom.getElementsByTagName('table')[0] as HTMLElement

  let stringHTML = table.outerHTML;

  // clean Vue generated attributes and comments
  stringHTML = stringHTML.replace(/\s*data-v-[a-f0-9]+=""/g, '')
  stringHTML = stringHTML.replace(/<!--v-if-->/g, '')


  codeLength.value = stringHTML.length
  console.log(stringHTML)

  htmlCode.value = beautyHtml(stringHTML, {
    indent_size: 2,
    preserve_newlines: false,
    end_with_newline: true,
  })

  await nextTick()

  Prism.highlightAll()
})

</script>

<template>
  <div class="bg-card rounded-lg">
    <div class="border-0 rounded-md">
      <div  class="min-h-[200px] align-middle">
        <div ref="footerPreview">
          <DefaultTemplate :key="renderHash"/>
<!--          <MinimalTemplate :key="renderHash"/>-->
        </div>
      </div>
      <div class="flex justify-between pb-4">
        <h3>
          HTML Code

        </h3>
        <button
          class="text-sm flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <span class="tooltip" data-tip="Minified version">
            <span class="text-secondary px-1">{{codeLength}} characters</span>
          </span>
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
            class="mr-1 ml-3"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
          </svg>
          Copy HTML
        </button>
      </div>
      <div class="w-full bg-neutral text-sm mr-2 rounded-lg overflow-x-auto text-white focus:outline-none">
        <pre class="focus:outline-none max-h-[300px] p-2 pl-3 ml-2"><code class="language-html">{{ htmlCode }}</code></pre>
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

/*
.code-preview:after {
  content: 'Show More';
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -10px;
  z-index: 10;
  cursor: pointer;
  backdrop-filter: blur(2px);
}
*/
</style>
