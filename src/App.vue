<script setup lang="ts">
import TheGenerator from "@/components/TheGenerator.vue";
import GeneratorPreview from "@/components/GeneratorPreview.vue";
</script>

<template>
  <div class="h-screen grid justify-items-center items-center">
    <div class="grid grid-cols-2 w-full">
      <div class="flex flex-col gap-4">
        <h1 class="text-xl w-full bg-base-200 p-4 rounded-box text-center">Email Footer Generator</h1>

        <div class="bg-base-200 rounded-box p-10 w-full gap-6">
          <TheGenerator/>
        </div>

        <div class="w-full bg-base-200 p-4 rounded-box text-center">
          <a class="link text-center">Settings</a>
        </div>
        <div class="divider"></div>
        <div class="w-full bg-base-200 p-4 rounded-box text-center">2025 &copy; Hubert Lipiński</div>
      </div>
      <div class="">
        <GeneratorPreview/>
      </div>
    </div>
  </div>

</template>

<style>

</style>
