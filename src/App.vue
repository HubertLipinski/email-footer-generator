<script setup lang="ts">
import TheFooter from '@/components/ui/TheFooter.vue'
import TheNavbar from '@/components/ui/TheNavbar.vue'
</script>

<template>
  <div class="h-svh lg:h-screen grid px-2 md:px-0 pt-[4rem]">
    <div class="flex flex-col gap-6 container max-w-3xl mx-auto overflow-x-hidden">
      <TheNavbar />

      <router-view v-slot="{ Component }">
        <keep-alive include="GeneratorView">
          <component :is="Component" />
        </keep-alive>
      </router-view>

      <TheFooter />
    </div>
  </div>
</template>
