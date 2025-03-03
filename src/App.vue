<script setup lang="ts">
import TheFooter from '@/components/ui/TheFooter.vue'
import TheNavbar from '@/components/ui/TheNavbar.vue'
</script>

<template>
  <div class="h-svh lg:h-screen grid px-4 py-[4rem]">
    <div class="flex flex-col gap-6 container max-w-3xl mx-auto overflow-x-hidden">
      <TheNavbar />

      <div class="grow-0 bg-base-200 rounded-box p-6 w-full gap-6 min-h-[420px]">
        <router-view v-slot="{ Component }">
          <keep-alive include="GeneratorView">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>

      <TheFooter />
    </div>
  </div>
</template>
