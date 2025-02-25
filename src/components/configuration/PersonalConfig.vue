<script setup lang="ts"></script>

<template>
  <div class="flex flex-col tab-content">
    <div class="join gap-4">
      <fieldset class="fieldset join-item flex-grow">
        <legend class="fieldset-legend">Name</legend>
        <input type="text" class="input w-full" placeholder="John Doe" />
      </fieldset>
      <fieldset class="fieldset join-item flex-grow">
        <legend class="fieldset-legend">Position</legend>
        <input type="text" class="input w-full" placeholder="Software Developer" />
      </fieldset>
    </div>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Email</legend>
      <input type="text" class="input w-full" placeholder="johndoe@example.com" />
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Company</legend>
      <input type="text" class="input w-full" placeholder="Company" />
    </fieldset>
  </div>
</template>

<style scoped></style>
