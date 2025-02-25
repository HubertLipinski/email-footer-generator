<script setup lang="ts"></script>

<template>
  <div class="bg-card rounded-lg">
    <h2 class="text-xl font-semibold mb-4">Preview</h2>
    <div class="border rounded-md p-6">
      <div id="footerPreview" class="min-h-[200px]">
        <div class="text-center text-muted-foreground">
          Fill in the form to generate your email footer
        </div>
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
  </div>
</template>

<style scoped></style>
