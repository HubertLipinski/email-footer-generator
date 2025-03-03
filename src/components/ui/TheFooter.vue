<script setup lang="ts">
import IconGithub from '~icons/mdi/github'
</script>

<template>
  <div class="w-full bg-base p-4 rounded-box text-center text-gray-500 grow-1 place-content-end">
    &copy; {{ new Date().getFullYear() }} by
    <a href="https://hublip.pl" target="_blank" class="link link-hover hover:text-primary">Hubert Lipiński</a>
    <a
      href="https://github.com/HubertLipinski"
      target="_blank"
      class="link link-hover flex items-center justify-center p-2 hover:text-primary"
      ><IconGithub class="mr-1" /> GitHub</a
    >
  </div>
</template>

<style scoped></style>
