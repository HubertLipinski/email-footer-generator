<script setup lang="ts">
import TheFooter from '@/components/ui/TheFooter.vue'
import TheNavbar from '@/components/ui/TheNavbar.vue'
</script>

<template>
  <div class="h-svh lg:h-screen grid transition-all duration-300">
    <div class="flex flex-col gap-6 container max-w-3xl mx-auto px-2 md:px-0 pt-4">
      <TheNavbar />

      <div class="grow-0 bg-base-200 rounded-box p-6 w-full gap-6 overflow-x-hidden">
        <router-view v-slot="{ Component }">
          <Transition name="slide-fade" mode="out-in">
            <keep-alive include="GeneratorView">
              <component :is="Component" />
            </keep-alive>
          </Transition>
        </router-view>
      </div>

      <TheFooter />
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.05s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(25px);
  opacity: 0;
}
</style>
