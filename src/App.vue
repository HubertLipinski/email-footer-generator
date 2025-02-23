<script setup lang="ts">
import TheGenerator from "@/components/TheGenerator.vue";
import GeneratorPreview from "@/components/GeneratorPreview.vue";

</script>

<template>

  <main class="min-h-screen">
    <div class="h-screen grid grid-rows-2lg:grid-flow-cols lg:grid-cols-2 lg:grid-cols-[1fr 1fr]">
      <div class="bg-base-300 lg:h-screen p-3 lg:p-5  overflow-y-auto">
        <h1 class="text-2xl pb-4">Email Footer Generator</h1>
        <TheGenerator />
      </div>
      <div class="lg:h-screen">
        <GeneratorPreview/>
      </div>
    </div>
  </main>

</template>

<style>
@import "tailwindcss";
@plugin "daisyui";
</style>
