<script setup lang="ts">
import ThemeController from '@/components/ThemeController.vue'
import LanguageController from '@/components/LanguageController.vue'
</script>

<template>
  <div class="h-screen grid items-center">
    <div class="flex flex-col gap-6 container max-w-3xl mx-auto">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold w-full py-4 rounded-box">Email Footer Generator</h1>
        <div class="inline-flex gap-x-4">
          <LanguageController class="w-20" />
          <ThemeController />
        </div>
      </div>

      <div role="tablist" class="tabs tabs-box p-2 swap">
        <RouterLink to="/" role="tab" class="tab flex-grow" activeClass="tab-active">
          Editor
        </RouterLink>
        <RouterLink to="/preview" role="tab" class="tab flex-grow" activeClass="tab-active">
          Preview
        </RouterLink>
      </div>

      <div class="bg-base-200 rounded-box p-6 w-full gap-6 min-h-[420px]">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>

      <div class="w-full bg-base p-4 rounded-box text-center text-gray-500">
        &copy; {{ new Date().getFullYear() }} by Hubert Lipiński
      </div>
    </div>
  </div>
</template>
